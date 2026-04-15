/* ============================================================
   F2 Listening Revision — Quiz Logic
   ============================================================ */

// ── State ──────────────────────────────────────────────────
let currentUnitId   = null;   // which unit's quiz is open
let selectedWordIdx = null;   // index of the currently selected vocab word chip
let vocabMatches    = {};     // { wordIndex: defIndex } — student's pairings
let shuffledDefOrder = [];    // order in which definitions are displayed

// ── DOM refs ───────────────────────────────────────────────
const overlay      = document.getElementById('modalOverlay');
const modalTitle   = document.getElementById('modalTitle');
const quizForm     = document.getElementById('quizForm');
const mcqContainer = document.getElementById('mcqContainer');
const vocabWords   = document.getElementById('vocabWords');
const vocabDefs    = document.getElementById('vocabDefs');
const submitBtn    = document.getElementById('submitBtn');
const submitNote   = document.getElementById('submitNote');
const resultsPanel = document.getElementById('resultsPanel');
const scoreCircle  = document.getElementById('scoreCircle');
const scoreMessage = document.getElementById('scoreMessage');
const mcqResults   = document.getElementById('mcqResults');
const vocabResults = document.getElementById('vocabResults');
const closeBtn     = document.getElementById('closeBtn');
const retryBtn     = document.getElementById('retryBtn');
const closeResultBtn = document.getElementById('closeResultBtn');

// ── Boot ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderUnits();

  closeBtn.addEventListener('click', closeModal);
  closeResultBtn.addEventListener('click', closeModal);
  submitBtn.addEventListener('click', submitQuiz);
  retryBtn.addEventListener('click', () => openQuiz(currentUnitId));

  // Close on overlay background click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
  });
});

// ── Render video cards ─────────────────────────────────────
function renderUnits() {
  const grid = document.getElementById('videoGrid');

  UNITS.forEach(unit => {
    const pad = String(unit.id).padStart(2, '0');
    const videoFile = `family-and-friends-2-u${pad}.mp4`;

    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
      <video controls preload="metadata">
        <source src="${videoFile}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="card-body">
        <span class="card-unit-badge">Unit ${pad}</span>
        <p class="card-title">${unit.title}</p>
        <button class="btn btn-quiz" data-unit="${unit.id}">
          🎯 Take the Quiz
        </button>
      </div>
    `;

    card.querySelector('.btn-quiz').addEventListener('click', () => openQuiz(unit.id));
    grid.appendChild(card);
  });
}

// ── Open Quiz ──────────────────────────────────────────────
function openQuiz(unitId) {
  currentUnitId    = unitId;
  selectedWordIdx  = null;
  vocabMatches     = {};
  shuffledDefOrder = [];

  const unit = UNITS.find(u => u.id === unitId);

  // Reset UI
  modalTitle.textContent = `Quiz — ${unit.title}`;
  quizForm.classList.remove('hidden');
  resultsPanel.classList.add('hidden');
  submitNote.textContent = '';
  submitBtn.disabled = false;

  renderMCQ(unit.mcq);
  renderVocabMatch(unit.vocab);

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  // Scroll modal to top
  overlay.querySelector('.modal-card').scrollTop = 0;
}

// ── Close Modal ────────────────────────────────────────────
function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ── Render MCQ ─────────────────────────────────────────────
function renderMCQ(questions) {
  mcqContainer.innerHTML = '';

  questions.forEach((q, qi) => {
    const block = document.createElement('div');
    block.className = 'mcq-question';

    const optionsHtml = q.options.map((opt, oi) => `
      <label class="mcq-option" data-qi="${qi}" data-oi="${oi}">
        <input type="radio" name="mcq-${qi}" value="${oi}" />
        ${opt}
      </label>
    `).join('');

    block.innerHTML = `
      <p class="mcq-question-text">
        <span class="mcq-question-number">Q${qi + 1}</span>
        ${escapeHtml(q.question)}
      </p>
      <div class="mcq-options">${optionsHtml}</div>
    `;

    // Highlight label when radio changes
    block.querySelectorAll('.mcq-option').forEach(label => {
      label.addEventListener('click', () => {
        block.querySelectorAll('.mcq-option').forEach(l => l.classList.remove('selected'));
        label.classList.add('selected');
      });
    });

    mcqContainer.appendChild(block);
  });
}

// ── Render Vocab Match ─────────────────────────────────────
function renderVocabMatch(vocab) {
  vocabWords.innerHTML = '';
  vocabDefs.innerHTML  = '';

  // Shuffle definition display order
  shuffledDefOrder = shuffleIndices(vocab.length);

  // Word chips (left column — always in original order)
  vocab.forEach((item, wi) => {
    const chip = document.createElement('div');
    chip.className = 'vocab-chip';
    chip.dataset.wi = wi;
    chip.textContent = item.word;
    chip.addEventListener('click', () => handleWordClick(wi, chip));
    vocabWords.appendChild(chip);
  });

  // Definition chips (right column — shuffled order)
  shuffledDefOrder.forEach((defIdx, displayPos) => {
    const chip = document.createElement('div');
    chip.className = 'vocab-chip';
    chip.dataset.di = defIdx;          // original definition index
    chip.dataset.dp = displayPos;      // position in display
    chip.textContent = vocab[defIdx].definition;
    chip.addEventListener('click', () => handleDefClick(defIdx, chip));
    vocabDefs.appendChild(chip);
  });
}

// ── Vocab: click a word chip ───────────────────────────────
function handleWordClick(wi, chip) {
  // If already matched, ignore
  if (chip.classList.contains('locked')) return;

  // If clicking the already-selected word → deselect
  if (selectedWordIdx === wi) {
    selectedWordIdx = null;
    chip.classList.remove('selected');
    return;
  }

  // If this word already has a match, un-match it first
  if (vocabMatches[wi] !== undefined) {
    const prevDefIdx = vocabMatches[wi];
    delete vocabMatches[wi];
    // Un-style the definition chip
    const prevDefChip = vocabDefs.querySelector(`[data-di="${prevDefIdx}"]`);
    if (prevDefChip) {
      prevDefChip.classList.remove('matched', 'locked');
    }
    chip.classList.remove('matched', 'locked');
  }

  // Deselect any previously selected word
  vocabWords.querySelectorAll('.vocab-chip').forEach(c => c.classList.remove('selected'));

  selectedWordIdx = wi;
  chip.classList.add('selected');
}

// ── Vocab: click a definition chip ────────────────────────
function handleDefClick(defIdx, chip) {
  // No word selected yet
  if (selectedWordIdx === null) return;

  // If this definition is already matched to someone else, remove that pair
  const existingWordForThisDef = Object.entries(vocabMatches).find(([, di]) => di === defIdx);
  if (existingWordForThisDef) {
    const [oldWi] = existingWordForThisDef;
    delete vocabMatches[oldWi];
    const oldWordChip = vocabWords.querySelector(`[data-wi="${oldWi}"]`);
    if (oldWordChip) oldWordChip.classList.remove('matched', 'locked', 'selected');
    chip.classList.remove('matched', 'locked');
  }

  // Make the match
  vocabMatches[selectedWordIdx] = defIdx;

  // Style the word chip as matched
  const wordChip = vocabWords.querySelector(`[data-wi="${selectedWordIdx}"]`);
  if (wordChip) {
    wordChip.classList.remove('selected');
    wordChip.classList.add('matched', 'locked');
  }

  // Style the definition chip as matched
  chip.classList.add('matched', 'locked');

  selectedWordIdx = null;
}

// ── Submit Quiz ────────────────────────────────────────────
function submitQuiz() {
  const unit = UNITS.find(u => u.id === currentUnitId);

  // Validate: all MCQ answered?
  let mcqAnswers = [];
  let allAnswered = true;
  for (let qi = 0; qi < unit.mcq.length; qi++) {
    const sel = mcqContainer.querySelector(`input[name="mcq-${qi}"]:checked`);
    if (!sel) { allAnswered = false; break; }
    mcqAnswers.push(parseInt(sel.value, 10));
  }

  // Validate: all vocab matched?
  const allVocabMatched = Object.keys(vocabMatches).length === unit.vocab.length;

  if (!allAnswered || !allVocabMatched) {
    let msg = [];
    if (!allAnswered)    msg.push('answer all 10 multiple choice questions');
    if (!allVocabMatched) msg.push('match all 5 vocabulary words');
    submitNote.textContent = `⚠ Please ${msg.join(' and ')} before submitting.`;
    return;
  }

  submitNote.textContent = '';

  // Score MCQ
  let mcqScore = 0;
  const mcqDetails = unit.mcq.map((q, qi) => {
    const studentAnswer = mcqAnswers[qi];
    const correct = studentAnswer === q.answer;
    if (correct) mcqScore++;
    return { question: q.question, studentAnswer, correctAnswer: q.answer, options: q.options, correct };
  });

  // Score Vocab
  let vocabScore = 0;
  const vocabDetails = unit.vocab.map((item, wi) => {
    const studentDefIdx = vocabMatches[wi];
    const correct = studentDefIdx === wi;
    if (correct) vocabScore++;
    return {
      word: item.word,
      correctDef: item.definition,
      studentDef: studentDefIdx !== undefined ? unit.vocab[studentDefIdx].definition : '(not matched)',
      correct
    };
  });

  const totalScore = mcqScore + vocabScore;
  const totalPossible = unit.mcq.length + unit.vocab.length;

  showResults(totalScore, totalPossible, mcqScore, vocabScore, mcqDetails, vocabDetails);
}

// ── Show Results ───────────────────────────────────────────
function showResults(total, possible, mcqScore, vocabScore, mcqDetails, vocabDetails) {
  quizForm.classList.add('hidden');
  resultsPanel.classList.remove('hidden');

  const pct = Math.round((total / possible) * 100);

  // Score circle
  scoreCircle.textContent = `${total}/${possible}`;
  scoreCircle.className = 'score-circle';
  if (pct >= 90)      scoreCircle.classList.add('great');
  else if (pct >= 70) scoreCircle.classList.add('good');
  else if (pct >= 50) scoreCircle.classList.add('ok');
  else                scoreCircle.classList.add('low');

  // Score message
  let emoji, heading, msg;
  if (pct >= 90) {
    emoji = '🌟'; heading = 'Excellent!';
    msg = `You scored ${pct}%! Outstanding work — you really listened carefully!`;
  } else if (pct >= 70) {
    emoji = '👍'; heading = 'Good Job!';
    msg = `You scored ${pct}%. Well done! Review the ones you missed and try again.`;
  } else if (pct >= 50) {
    emoji = '🙂'; heading = 'Keep Going!';
    msg = `You scored ${pct}%. A good effort — watch the video again and try to improve!`;
  } else {
    emoji = '💪'; heading = 'Keep Practising!';
    msg = `You scored ${pct}%. Don't worry! Watch the video again carefully and try once more.`;
  }

  scoreMessage.innerHTML = `
    <h3>${emoji} ${heading}</h3>
    <p>${msg}</p>
    <p style="margin-top:6px; font-size:0.88rem; color:#666;">
      Section A (MCQ): ${mcqScore}/10 &nbsp;|&nbsp; Section B (Vocab): ${vocabScore}/5
    </p>
  `;

  // MCQ results
  mcqResults.innerHTML = '';
  mcqDetails.forEach((d, qi) => {
    const item = document.createElement('div');
    item.className = 'mcq-result-item';

    const headerClass = d.correct ? 'correct-header' : 'wrong-header';
    const icon        = d.correct ? '✅' : '❌';
    const studentAns  = d.options[d.studentAnswer];
    const correctAns  = d.options[d.correctAnswer];

    item.innerHTML = `
      <div class="mcq-result-header ${headerClass}">
        <span class="result-icon">${icon}</span>
        <span><strong>Q${qi + 1}:</strong> ${escapeHtml(d.question)}</span>
      </div>
      ${!d.correct ? `
      <div class="mcq-result-detail">
        Your answer: <em>${escapeHtml(studentAns)}</em> &nbsp;|&nbsp;
        Correct answer: <strong>${escapeHtml(correctAns)}</strong>
      </div>` : ''}
    `;
    mcqResults.appendChild(item);
  });

  // Vocab results
  vocabResults.innerHTML = '';
  const vGrid = document.createElement('div');
  vGrid.className = 'vocab-result-grid';

  vocabDetails.forEach(d => {
    const item = document.createElement('div');
    item.className = `vocab-result-item ${d.correct ? 'correct' : 'wrong'}`;
    item.innerHTML = `
      <span class="vocab-word">${d.correct ? '✅' : '❌'} ${escapeHtml(d.word)}</span>
      <span>${escapeHtml(d.studentDef)}</span>
      ${!d.correct ? `<span class="vocab-correct-def">✔ ${escapeHtml(d.correctDef)}</span>` : ''}
    `;
    vGrid.appendChild(item);
  });

  vocabResults.appendChild(vGrid);

  // Scroll to top of modal
  overlay.querySelector('.modal-card').scrollTop = 0;
}

// ── Helpers ────────────────────────────────────────────────

/**
 * Returns a derangement of indices 0..n-1:
 * a shuffle where NO index lands in its original position,
 * guaranteeing that definition i is never displayed in the same
 * row as word i (i.e. never visually "in line" with its word).
 */
function shuffleIndices(n) {
  let arr;
  do {
    arr = Array.from({ length: n }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  } while (arr.some((v, i) => v === i));   // retry if any def landed on its own row
  return arr;
}

/** Minimal HTML escape to prevent XSS from question text */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
