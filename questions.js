// Family and Friends 2 — Listening Revision Quiz Data
// 16 units × 10 MCQ + 5 vocabulary matching questions
//
// MCQ mix per unit:
//   Q1–Q5  →  video-context questions (what happens / characters / story)
//   Q6–Q10 →  concept / language questions about the unit topic

const UNITS = [
  // ─────────────────────────────────────────────────────────
  {
    id: 0,
    title: "Starter – Hello!",
    mcq: [
      // Video-context
      {
        question: "What does the teacher say to the children at the very beginning of the video?",
        options: ["Goodbye", "Sorry", "Hello", "Please"],
        answer: 2
      },
      {
        question: "At the end of the video, what do the children say to the teacher when they leave?",
        options: ["Hello", "Sorry", "Thank you", "Goodbye"],
        answer: 3
      },
      {
        question: "In the video, a child wants a pencil and asks politely. What does she say?",
        options: ["Thank you", "Goodbye", "Please", "Hello"],
        answer: 2
      },
      {
        question: "A boy in the video drops someone's book by accident. What does he say?",
        options: ["Hello", "Please", "Goodbye", "Sorry"],
        answer: 3
      },
      {
        question: "After the teacher gives a child a sticker, the child says ___.",
        options: ["Sorry", "Goodbye", "Please", "Thank you"],
        answer: 3
      },
      // Concept
      {
        question: "What colour is the sky on a sunny day?",
        options: ["Red", "Green", "Yellow", "Blue"],
        answer: 3
      },
      {
        question: "What colour is grass?",
        options: ["Blue", "Green", "Orange", "Pink"],
        answer: 1
      },
      {
        question: "How many fingers do you have on one hand?",
        options: ["Four", "Six", "Five", "Three"],
        answer: 2
      },
      {
        question: "What colour is a banana?",
        options: ["Red", "Blue", "Yellow", "Green"],
        answer: 2
      },
      {
        question: "How many days are in a week?",
        options: ["Five", "Six", "Eight", "Seven"],
        answer: 3
      }
    ],
    vocab: [
      { word: "hello", definition: "What you say when you meet someone" },
      { word: "goodbye", definition: "What you say when you leave" },
      { word: "please", definition: "A polite word when asking for something" },
      { word: "thank you", definition: "What you say when someone helps you" },
      { word: "sorry", definition: "What you say when you make a mistake" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Unit 1 – My Family",
    mcq: [
      // Video-context
      {
        question: "In the video, Rosy points to a woman and says 'This is my ___.' Who is she?",
        options: ["Sister", "Grandmother", "Mom", "Teacher"],
        answer: 2
      },
      {
        question: "According to the video, who is Tim's sister?",
        options: ["Suzy", "Grandma", "Mom", "Rosy"],
        answer: 3
      },
      {
        question: "In the video, Tim calls his dad's dad 'my ___.' What does he say?",
        options: ["Uncle", "Father", "Brother", "Grandfather"],
        answer: 3
      },
      {
        question: "When Grandma arrives in the video, what does Rosy say about her?",
        options: ["'She is my teacher.'", "'She is my sister.'", "'She is my grandmother.'", "'She is my aunt.'"],
        answer: 2
      },
      {
        question: "In the video, how does Tim describe Rosy to his friend?",
        options: ["'He is my brother.'", "'She is my sister.'", "'She is my mother.'", "'He is my grandfather.'"],
        answer: 1
      },
      // Concept
      {
        question: "Which word shows that something belongs to you?",
        options: ["His", "Her", "Their", "My"],
        answer: 3
      },
      {
        question: "How do you talk about a boy? 'He ___ my brother.'",
        options: ["am", "are", "is", "be"],
        answer: 2
      },
      {
        question: "How do you talk about a girl? '___ is my sister.'",
        options: ["He", "They", "It", "She"],
        answer: 3
      },
      {
        question: "Who is your dad's dad?",
        options: ["Uncle", "Father", "Grandfather", "Brother"],
        answer: 2
      },
      {
        question: "Which word means a female parent?",
        options: ["Father", "Brother", "Mother", "Grandfather"],
        answer: 2
      }
    ],
    vocab: [
      { word: "mother", definition: "Your female parent" },
      { word: "father", definition: "Your male parent" },
      { word: "sister", definition: "A girl who has the same parents as you" },
      { word: "brother", definition: "A boy who has the same parents as you" },
      { word: "grandfather", definition: "Your dad's or mom's father" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Unit 2 – My Things",
    mcq: [
      // Video-context
      {
        question: "In the video, Billy cannot find his eraser. What does he use an eraser for?",
        options: ["To measure lines", "To colour pictures", "To rub out pencil mistakes", "To carry books"],
        answer: 2
      },
      {
        question: "Suzy opens her pencil case in the video. What does she take out first to write with?",
        options: ["A ruler", "A crayon", "A schoolbag", "A pencil"],
        answer: 3
      },
      {
        question: "In the video, a child asks 'Is this your ruler?' The boy replies 'No, it's ___.'",
        options: ["my ruler", "her ruler", "his ruler", "your ruler"],
        answer: 2
      },
      {
        question: "What does the teacher in the video use to draw a straight line on the board?",
        options: ["A pencil", "An eraser", "A crayon", "A ruler"],
        answer: 3
      },
      {
        question: "In the video, what does Rosy use to colour her picture in bright colours?",
        options: ["A ruler", "A pencil", "A crayon", "An eraser"],
        answer: 2
      },
      // Concept
      {
        question: "What do you use to write in your book?",
        options: ["Ruler", "Eraser", "Pencil", "Schoolbag"],
        answer: 2
      },
      {
        question: "What do you carry your books and pencils in?",
        options: ["An eraser", "A ruler", "A crayon", "A schoolbag"],
        answer: 3
      },
      {
        question: "How do you say you have something? 'I ___ a pencil.'",
        options: ["am", "is", "have", "are"],
        answer: 2
      },
      {
        question: "Which word shows something belongs to a boy?",
        options: ["My", "Her", "Your", "His"],
        answer: 3
      },
      {
        question: "Which word shows something belongs to the person you are talking to?",
        options: ["My", "His", "Her", "Your"],
        answer: 3
      }
    ],
    vocab: [
      { word: "pencil", definition: "A thin stick you use to write or draw" },
      { word: "ruler", definition: "A flat stick used to draw straight lines and measure" },
      { word: "eraser", definition: "A soft block used to remove pencil marks" },
      { word: "crayon", definition: "A coloured wax stick used for drawing and colouring" },
      { word: "schoolbag", definition: "A bag you carry your school things in" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Unit 3 – Animals",
    mcq: [
      // Video-context
      {
        question: "According to the video, what pet does Rosy have at home?",
        options: ["A goldfish", "A parrot", "A rabbit", "A hamster"],
        answer: 2
      },
      {
        question: "In the video, Tim says 'I don't like ___.' Which animal does he not like?",
        options: ["Rabbits", "Dogs", "Hamsters", "Fish"],
        answer: 2
      },
      {
        question: "In the video, Billy's parrot surprises everyone. What does the parrot do?",
        options: ["It hops around", "It copies what people say", "It swims in a bowl", "It hides in its shell"],
        answer: 1
      },
      {
        question: "The tortoise in the video moves very slowly. What does it have on its back?",
        options: ["Wings", "Long ears", "A hard shell", "A fluffy tail"],
        answer: 2
      },
      {
        question: "In the video, Suzy's goldfish lives in ___.",
        options: ["A cage", "A garden", "A bowl of water", "A box"],
        answer: 2
      },
      // Concept
      {
        question: "How do you say you like something? 'I ___ cats.'",
        options: ["likes", "like", "liking", "liked"],
        answer: 1
      },
      {
        question: "How do you say you do not like something?",
        options: ["I like dogs.", "I don't like dogs.", "I am like dogs.", "I liking dogs."],
        answer: 1
      },
      {
        question: "Which animal says 'meow' and likes to purr?",
        options: ["Dog", "Cat", "Parrot", "Hamster"],
        answer: 1
      },
      {
        question: "Which animal says 'woof' and is a popular pet?",
        options: ["Cat", "Rabbit", "Dog", "Fish"],
        answer: 2
      },
      {
        question: "What do you say to describe an animal? 'It ___ four legs.'",
        options: ["have", "am", "are", "has"],
        answer: 3
      }
    ],
    vocab: [
      { word: "rabbit", definition: "A small fluffy animal with long ears that hops" },
      { word: "hamster", definition: "A small furry pet that stores food in its cheeks" },
      { word: "parrot", definition: "A colourful bird that can copy words people say" },
      { word: "tortoise", definition: "A slow animal with a hard shell on its back" },
      { word: "goldfish", definition: "A small orange or gold fish kept as a pet" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Unit 4 – Food",
    mcq: [
      // Video-context
      {
        question: "In the video, what fruit does Rosy's mom put in Rosy's lunch box?",
        options: ["An orange", "Grapes", "A strawberry", "A banana"],
        answer: 3
      },
      {
        question: "At the dinner table in the video, Tim says 'I don't like ___.' Which food does he refuse?",
        options: ["Bananas", "Oranges", "Grapes", "Carrots"],
        answer: 3
      },
      {
        question: "In the video, Dad offers Rosy an orange and asks 'Do you like oranges?' What does Rosy say?",
        options: ["'No, I don't.'", "'I don't know.'", "'Yes, I do!'", "'Sorry, please.'"],
        answer: 2
      },
      {
        question: "In the video, what fruit does the monkey pick up and eat?",
        options: ["A strawberry", "Grapes", "A carrot", "A banana"],
        answer: 3
      },
      {
        question: "In the video, what does Suzy bring to school as a snack?",
        options: ["A banana", "An orange", "Grapes", "A carrot"],
        answer: 2
      },
      // Concept
      {
        question: "How do you ask if someone likes food? 'Do you ___ apples?'",
        options: ["likes", "liking", "like", "liked"],
        answer: 2
      },
      {
        question: "How do you say you do not like food? 'No, I ___ like apples.'",
        options: ["am not", "doesn't", "don't", "isn't"],
        answer: 2
      },
      {
        question: "Which vegetable is long and orange and rabbits love it?",
        options: ["Peas", "Strawberry", "Banana", "Carrot"],
        answer: 3
      },
      {
        question: "Which fruit is round, orange coloured and juicy?",
        options: ["Banana", "Grapes", "Orange", "Strawberry"],
        answer: 2
      },
      {
        question: "Small, round, green vegetables that come in a pod are called ___.",
        options: ["Grapes", "Peas", "Carrots", "Strawberries"],
        answer: 1
      }
    ],
    vocab: [
      { word: "banana", definition: "A long yellow fruit that monkeys love to eat" },
      { word: "orange", definition: "A round, juicy citrus fruit with orange-coloured skin" },
      { word: "carrot", definition: "A long orange vegetable that grows underground" },
      { word: "grapes", definition: "Small round fruits that grow in bunches on a vine" },
      { word: "strawberry", definition: "A small red fruit with tiny seeds on the outside" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 5,
    title: "Unit 5 – My Body",
    mcq: [
      // Video-context
      {
        question: "In the video, the children sing a song and touch their bodies. What do they touch first?",
        options: ["Their knees", "Their toes", "Their shoulders", "Their elbows"],
        answer: 2
      },
      {
        question: "In the video, a character hurts their knee while playing. Where exactly is the knee?",
        options: ["At the top of the arm", "On the face", "In the middle of the leg", "At the end of the foot"],
        answer: 2
      },
      {
        question: "The teacher asks children to bend their elbow in the video. Where do they bend?",
        options: ["Their finger", "The middle of their arm", "The middle of their leg", "Their chin"],
        answer: 1
      },
      {
        question: "In the video, Rosy shows her thumb to the camera and says it is the ___ finger on her hand.",
        options: ["longest", "tallest", "shortest and thickest", "thinnest"],
        answer: 2
      },
      {
        question: "A character in the video points to the bottom of their face, below the mouth. What body part is that?",
        options: ["Nose", "Elbow", "Knee", "Chin"],
        answer: 3
      },
      // Concept
      {
        question: "How many eyes do you have?",
        options: ["One", "Four", "Three", "Two"],
        answer: 3
      },
      {
        question: "What do you use to smell things?",
        options: ["Ears", "Nose", "Mouth", "Eyes"],
        answer: 1
      },
      {
        question: "What do you use to hear sounds?",
        options: ["Mouth", "Eyes", "Nose", "Ears"],
        answer: 3
      },
      {
        question: "What do you use to eat and speak?",
        options: ["Nose", "Ears", "Eyes", "Mouth"],
        answer: 3
      },
      {
        question: "How do you say you have body parts? 'I have two ___.'",
        options: ["has leg", "legs", "leg", "legged"],
        answer: 1
      }
    ],
    vocab: [
      { word: "shoulder", definition: "The joint at the top of your arm where it meets your body" },
      { word: "elbow", definition: "The joint in the middle of your arm that bends" },
      { word: "knee", definition: "The joint in the middle of your leg that bends" },
      { word: "thumb", definition: "The short, thick finger on the side of your hand" },
      { word: "chin", definition: "The pointed part at the bottom of your face" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Unit 6 – Clothes",
    mcq: [
      // Video-context
      {
        question: "In the video, it is cold outside and Rosy puts on a short coat over her clothes. What is it called?",
        options: ["A scarf", "Gloves", "A jacket", "A sweater"],
        answer: 2
      },
      {
        question: "Tim wraps something long around his neck before going outside in the video. What is it?",
        options: ["A jacket", "Gloves", "Boots", "A scarf"],
        answer: 3
      },
      {
        question: "In the video, Suzy puts on her boots because it is raining. What are boots?",
        options: ["Coverings for your hands", "A long piece of cloth for your neck", "Strong shoes that cover your ankles", "A warm top you pull over your head"],
        answer: 2
      },
      {
        question: "The teacher describes what Billy is wearing in the video. She says 'He is ___ a green sweater.'",
        options: ["wear", "wore", "wears", "wearing"],
        answer: 3
      },
      {
        question: "In the video, Mom puts gloves on the children's hands. What do gloves keep warm?",
        options: ["Your neck", "Your feet", "Your head", "Your hands"],
        answer: 3
      },
      // Concept
      {
        question: "What do you wear over your other clothes when it is cold outside?",
        options: ["Gloves", "Jacket", "Scarf", "Sweater"],
        answer: 1
      },
      {
        question: "What do you wear on your feet to keep them dry inside your shoes?",
        options: ["Gloves", "Scarf", "Socks", "Jacket"],
        answer: 2
      },
      {
        question: "If a girl is wearing a blue jacket, what colour is her jacket?",
        options: ["Red", "Green", "Yellow", "Blue"],
        answer: 3
      },
      {
        question: "Which sentence is correct? 'He ___ wearing a green sweater.'",
        options: ["am", "are", "is", "be"],
        answer: 2
      },
      {
        question: "What is a warm knitted top you pull over your head called?",
        options: ["Scarf", "Boots", "Sweater", "Gloves"],
        answer: 2
      }
    ],
    vocab: [
      { word: "jacket", definition: "A short coat you wear over your clothes to stay warm" },
      { word: "scarf", definition: "A long piece of cloth you wrap around your neck" },
      { word: "boots", definition: "Strong shoes that cover your ankles and lower legs" },
      { word: "gloves", definition: "Coverings for your hands with separate fingers" },
      { word: "sweater", definition: "A warm knitted top you pull over your head" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Unit 7 – At School",
    mcq: [
      // Video-context
      {
        question: "In the video, what is the first lesson the children have when school starts?",
        options: ["Art", "Music", "Science", "Math"],
        answer: 3
      },
      {
        question: "During the art lesson in the video, what do the children create?",
        options: ["A science experiment", "A song", "A painting", "A number chart"],
        answer: 2
      },
      {
        question: "In the video, the class goes to the library. What do the children do there?",
        options: ["Eat lunch", "Play football", "Borrow and read books", "Sing songs"],
        answer: 2
      },
      {
        question: "Rosy's favourite lesson in the video is music. What does she do during music class?",
        options: ["Draw pictures", "Count numbers", "Sing and play instruments", "Run in the gym"],
        answer: 2
      },
      {
        question: "In the video, what time does the school day begin?",
        options: ["At 6 o'clock", "At 10 o'clock", "At night", "At 8 o'clock in the morning"],
        answer: 3
      },
      // Concept
      {
        question: "Which school subject involves experiments and learning about nature?",
        options: ["Music", "Art", "Science", "Math"],
        answer: 2
      },
      {
        question: "Which school subject uses numbers and counting?",
        options: ["Art", "Music", "Math", "Science"],
        answer: 2
      },
      {
        question: "Where do you go to borrow books at school?",
        options: ["Classroom", "Canteen", "Library", "Gym"],
        answer: 2
      },
      {
        question: "What is a place at school where you eat your lunch?",
        options: ["Library", "Gym", "Classroom", "Canteen"],
        answer: 3
      },
      {
        question: "Which school subject involves painting and drawing?",
        options: ["Math", "Art", "Science", "Music"],
        answer: 1
      }
    ],
    vocab: [
      { word: "math", definition: "The school subject that uses numbers and calculations" },
      { word: "science", definition: "The school subject about nature, experiments and discoveries" },
      { word: "art", definition: "The school subject where you draw, paint and make things" },
      { word: "music", definition: "The school subject where you sing and play instruments" },
      { word: "library", definition: "A room full of books where you can read and borrow books" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 8,
    title: "Unit 8 – Hobbies",
    mcq: [
      // Video-context
      {
        question: "In the video, Rosy says 'I like ___.' What is her favourite hobby?",
        options: ["Drawing", "Reading", "Singing", "Swimming"],
        answer: 3
      },
      {
        question: "In the video, Billy says 'I can't ___.' Which hobby can't he do?",
        options: ["Read", "Swim", "Dance", "Draw"],
        answer: 2
      },
      {
        question: "Suzy's favourite hobby in the video is reading. Where does she like to read?",
        options: ["In the swimming pool", "In the kitchen", "In the library", "In the gym"],
        answer: 2
      },
      {
        question: "At the end of the video, all the children do one hobby together. What do they do?",
        options: ["Draw pictures", "Go swimming", "Sing a song", "Read books"],
        answer: 2
      },
      {
        question: "In the video, Tim shows everyone he can kick a ball into a goal. Which hobby is this?",
        options: ["Swimming", "Drawing", "Reading", "Playing football"],
        answer: 3
      },
      // Concept
      {
        question: "How do you say you are able to do something? 'I ___ swim.'",
        options: ["am", "can", "do", "are"],
        answer: 1
      },
      {
        question: "How do you say you are not able to do something? 'I ___ fly.'",
        options: ["can", "am not", "can't", "don't"],
        answer: 2
      },
      {
        question: "Which hobby involves making music with your voice?",
        options: ["Swimming", "Drawing", "Singing", "Reading"],
        answer: 2
      },
      {
        question: "Which hobby involves moving your body to music?",
        options: ["Dancing", "Reading", "Swimming", "Drawing"],
        answer: 0
      },
      {
        question: "Which sentence is correct about a hobby? 'I like ___.'",
        options: ["to swim", "swim", "swimming", "swam"],
        answer: 2
      }
    ],
    vocab: [
      { word: "swimming", definition: "Moving through water using your arms and legs" },
      { word: "drawing", definition: "Making pictures with a pencil, pen or crayon" },
      { word: "reading", definition: "Looking at words in a book to understand the story" },
      { word: "singing", definition: "Making music with your voice" },
      { word: "dancing", definition: "Moving your body in rhythm to music" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Unit 9 – My House",
    mcq: [
      // Video-context
      {
        question: "In the video, Rosy gives a tour of her house. Which room does she show first?",
        options: ["The bedroom", "The kitchen", "The bathroom", "The living room"],
        answer: 3
      },
      {
        question: "Tim says his favourite room is the kitchen in the video. Why does he like it?",
        options: ["Because he sleeps there", "Because there is a sofa", "Because there is always food there", "Because the TV is there"],
        answer: 2
      },
      {
        question: "In the video, Rosy cannot find her toy. Where does she finally find it?",
        options: ["On the sofa", "Under the bed", "In the wardrobe", "On the table"],
        answer: 1
      },
      {
        question: "In the video, how many beds does Rosy say are in her bedroom?",
        options: ["One", "Three", "Four", "Two"],
        answer: 3
      },
      {
        question: "In the video, where does the family go to watch TV together?",
        options: ["The kitchen", "The bedroom", "The bathroom", "The living room"],
        answer: 3
      },
      // Concept
      {
        question: "How do you describe one thing in a room? 'There ___ a bed.'",
        options: ["are", "am", "is", "be"],
        answer: 2
      },
      {
        question: "How do you describe many things? 'There ___ two chairs.'",
        options: ["is", "am", "be", "are"],
        answer: 3
      },
      {
        question: "The toy is ___ the bed. (Underneath the bed.)",
        options: ["on", "under", "next to", "in"],
        answer: 1
      },
      {
        question: "What is the big cupboard where you hang your clothes?",
        options: ["Sofa", "Bed", "Table", "Wardrobe"],
        answer: 3
      },
      {
        question: "What is the long, comfortable seat in the living room called?",
        options: ["Wardrobe", "Bed", "Table", "Sofa"],
        answer: 3
      }
    ],
    vocab: [
      { word: "bedroom", definition: "The room in a house where you sleep" },
      { word: "bathroom", definition: "The room where you wash and have a bath or shower" },
      { word: "kitchen", definition: "The room where food is prepared and cooked" },
      { word: "sofa", definition: "A long soft seat in the living room for more than one person" },
      { word: "wardrobe", definition: "A large tall cupboard where you hang and store clothes" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 10,
    title: "Unit 10 – In Town",
    mcq: [
      // Video-context
      {
        question: "In the video, Rosy feels sick so Mom takes her somewhere. Where do they go?",
        options: ["The library", "The park", "The bank", "The hospital"],
        answer: 3
      },
      {
        question: "The family in the video needs to buy food. Which place do they go to?",
        options: ["The post office", "The hospital", "The supermarket", "The bank"],
        answer: 2
      },
      {
        question: "In the video, Tim wants to send a letter to his grandma. Where does he go?",
        options: ["The supermarket", "The library", "The post office", "The park"],
        answer: 2
      },
      {
        question: "At the end of the video, the children play outside on the swings. Where are they?",
        options: ["The hospital", "The bank", "The library", "The park"],
        answer: 3
      },
      {
        question: "In the video, someone asks for directions and is told 'Go ___ then turn right.'",
        options: ["left", "back", "straight", "around"],
        answer: 2
      },
      // Concept
      {
        question: "How do you ask where something is? '___ is the hospital?'",
        options: ["What", "Who", "Where", "When"],
        answer: 2
      },
      {
        question: "The park is next ___ the library.",
        options: ["from", "to", "in", "on"],
        answer: 1
      },
      {
        question: "Where do you borrow books in town?",
        options: ["Supermarket", "Hospital", "Park", "Library"],
        answer: 3
      },
      {
        question: "Where do you go to save or get money?",
        options: ["Park", "Bank", "Hospital", "Post office"],
        answer: 1
      },
      {
        question: "Where do you go to eat food prepared by others?",
        options: ["Library", "Bank", "Restaurant", "Post office"],
        answer: 2
      }
    ],
    vocab: [
      { word: "hospital", definition: "A place where sick or injured people are cared for by doctors and nurses" },
      { word: "supermarket", definition: "A large shop where you buy food and household items" },
      { word: "post office", definition: "A place where you send and receive letters and parcels" },
      { word: "bank", definition: "A place where people keep their money safe" },
      { word: "park", definition: "An outdoor area with grass, trees and places to play" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 11,
    title: "Unit 11 – The Weather",
    mcq: [
      // Video-context
      {
        question: "In the video, what is the weather like when the children go to the park to play?",
        options: ["Cloudy and cold", "Stormy and rainy", "Sunny and warm", "Foggy and dark"],
        answer: 2
      },
      {
        question: "Rosy looks out the window in the video and sees the trees bending. What does she say about the weather?",
        options: ["'It's sunny!'", "'It's foggy!'", "'It's stormy!'", "'It's windy!'"],
        answer: 3
      },
      {
        question: "In the video, the children cannot go outside because the weather is dangerous. What is the weather like?",
        options: ["Sunny", "Windy", "Foggy", "Stormy"],
        answer: 3
      },
      {
        question: "In the story, the children build a snowman. What season is it?",
        options: ["Spring", "Autumn", "Summer", "Winter"],
        answer: 3
      },
      {
        question: "Rosy's favourite season in the video is summer. What does she love doing in summer?",
        options: ["Building snowmen", "Playing in fallen leaves", "Going to the beach and swimming", "Flying a kite in the wind"],
        answer: 2
      },
      // Concept
      {
        question: "How do you ask about the weather? 'What's the weather ___?'",
        options: ["look", "like", "alike", "such"],
        answer: 1
      },
      {
        question: "Which season comes after summer?",
        options: ["Spring", "Winter", "Summer", "Autumn"],
        answer: 3
      },
      {
        question: "In which season do flowers start to bloom and it gets warmer?",
        options: ["Winter", "Autumn", "Spring", "Summer"],
        answer: 2
      },
      {
        question: "What is the weather like when there is lightning, thunder and heavy rain?",
        options: ["Foggy", "Sunny", "Cloudy", "Stormy"],
        answer: 3
      },
      {
        question: "What is the weather like when thick mist makes it hard to see?",
        options: ["Windy", "Foggy", "Sunny", "Stormy"],
        answer: 1
      }
    ],
    vocab: [
      { word: "cloudy", definition: "When the sky is covered with clouds and the sun is hidden" },
      { word: "windy", definition: "When the wind is blowing strongly" },
      { word: "sunny", definition: "When the sun is shining and the sky is clear and bright" },
      { word: "stormy", definition: "When there is strong wind, heavy rain, thunder and lightning" },
      { word: "foggy", definition: "When thick mist makes it hard to see clearly" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 12,
    title: "Unit 12 – At the Park",
    mcq: [
      // Video-context
      {
        question: "In the video, what is Rosy doing at the park? She is sitting and going back and forth through the air.",
        options: ["Jogging", "Climbing", "Cycling", "Swinging"],
        answer: 3
      },
      {
        question: "According to the video, what are Tim and Billy doing on the climbing frame?",
        options: ["Swinging", "Skipping", "Jogging", "Climbing"],
        answer: 3
      },
      {
        question: "In the video, Suzy jumps over a long spinning rope again and again. What is this activity?",
        options: ["Climbing", "Cycling", "Swinging", "Skipping"],
        answer: 3
      },
      {
        question: "In the video, what does Dad do around the park while the children play?",
        options: ["He swings", "He skips", "He jogs", "He climbs"],
        answer: 2
      },
      {
        question: "In the video, how do the children travel to the park?",
        options: ["They jog there", "They ride their bikes", "They skip there", "They take a bus"],
        answer: 1
      },
      // Concept
      {
        question: "How do you describe what someone is doing right now? 'She ___ climbing.'",
        options: ["climb", "is", "are", "climbs"],
        answer: 1
      },
      {
        question: "How do you ask what someone is doing? 'What ___ they doing?'",
        options: ["is", "do", "are", "am"],
        answer: 2
      },
      {
        question: "Which sentence uses the present continuous correctly?",
        options: ["He cycling.", "He cycle.", "He is cycling.", "He are cycling."],
        answer: 2
      },
      {
        question: "The children ___ playing in the park.",
        options: ["is", "am", "be", "are"],
        answer: 3
      },
      {
        question: "Which hobby involves riding a bicycle?",
        options: ["Jogging", "Skipping", "Climbing", "Cycling"],
        answer: 3
      }
    ],
    vocab: [
      { word: "swinging", definition: "Moving back and forth on a swing" },
      { word: "climbing", definition: "Going up something like a tree or climbing frame using hands and feet" },
      { word: "skipping", definition: "Jumping over a spinning rope as it passes under your feet" },
      { word: "cycling", definition: "Riding a bicycle" },
      { word: "jogging", definition: "Running slowly for exercise" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 13,
    title: "Unit 13 – Shopping",
    mcq: [
      // Video-context
      {
        question: "In the video, Rosy and Mom go to the supermarket. What does Rosy push around the shop?",
        options: ["A receipt", "A shelf", "A trolley", "A basket"],
        answer: 2
      },
      {
        question: "At the checkout in the video, who takes the family's money and gives them change?",
        options: ["The trolley", "The shelf", "The receipt", "The cashier"],
        answer: 3
      },
      {
        question: "In the video, Mom asks 'How much is it?' The apple costs £1. She pays £2. How much change does she get?",
        options: ["£3", "£2", "£1", "50p"],
        answer: 2
      },
      {
        question: "At the end of the shopping trip in the video, the cashier gives Mom a piece of paper. What is it?",
        options: ["An invitation", "A book", "A receipt", "A letter"],
        answer: 2
      },
      {
        question: "In the video, Rosy picks up some apples from ___.",
        options: ["The trolley", "The floor", "The cashier", "The shelf"],
        answer: 3
      },
      // Concept
      {
        question: "How do you ask the price of something? '___ much is it?'",
        options: ["What", "How", "Where", "Which"],
        answer: 1
      },
      {
        question: "How do you say you want to buy something? 'I'd ___ an apple, please.'",
        options: ["want", "have", "like", "need"],
        answer: 2
      },
      {
        question: "Something costs £3. You pay £5. How much change do you get?",
        options: ["£1", "£3", "£2", "£8"],
        answer: 2
      },
      {
        question: "Which sentence means you want to buy something?",
        options: ["I don't want that.", "I'd like that apple please.", "That is very expensive.", "No, thank you."],
        answer: 1
      },
      {
        question: "Where do you pay for your shopping in a supermarket?",
        options: ["At the shelf", "At the park", "At the till / cashier", "In the trolley"],
        answer: 2
      }
    ],
    vocab: [
      { word: "receipt", definition: "A piece of paper showing what you bought and how much you paid" },
      { word: "cashier", definition: "The person at the shop who takes your money and gives change" },
      { word: "trolley", definition: "A large basket on wheels used to carry shopping in a supermarket" },
      { word: "shelf", definition: "A flat surface fixed to a wall where items are displayed in shops" },
      { word: "change", definition: "The money you get back when you pay more than something costs" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 14,
    title: "Unit 14 – At the Beach",
    mcq: [
      // Video-context
      {
        question: "In the video, Rosy and Tim look in the rock pools at the beach. What do they find there?",
        options: ["Starfish only", "Seashells only", "Crabs", "Sandcastles"],
        answer: 2
      },
      {
        question: "In the video, Suzy picks up something pretty from the sand that has a hard, spiral shape. What is it?",
        options: ["A crab", "A starfish", "A seashell", "A sandcastle"],
        answer: 2
      },
      {
        question: "In the video, the children build something together using wet sand. What do they build?",
        options: ["A seashell", "A starfish shape", "A sandcastle", "A crab house"],
        answer: 2
      },
      {
        question: "Before the children go out in the sun in the video, Mom puts something on their skin. What is it?",
        options: ["A seashell", "Sunscreen", "Sand", "Water"],
        answer: 1
      },
      {
        question: "In the video, Tim spots something on the rocks with five arms. What is it?",
        options: ["A crab", "A seashell", "A jellyfish", "A starfish"],
        answer: 3
      },
      // Concept
      {
        question: "How do you describe things at the beach? 'There ___ lots of crabs.'",
        options: ["is", "am", "be", "are"],
        answer: 3
      },
      {
        question: "What do you wear to swim at the beach?",
        options: ["Boots and gloves", "A swimsuit", "A jacket and scarf", "School uniform"],
        answer: 1
      },
      {
        question: "What is the long area of sand next to the sea called?",
        options: ["River", "Lake", "Mountain", "Beach"],
        answer: 3
      },
      {
        question: "Which sea creature has claws and walks sideways?",
        options: ["Starfish", "Seashell", "Crab", "Fish"],
        answer: 2
      },
      {
        question: "What is a popular activity to do at the beach?",
        options: ["Skiing", "Building snowmen", "Swimming and playing in the sand", "Shopping"],
        answer: 2
      }
    ],
    vocab: [
      { word: "crab", definition: "A sea creature with a hard shell, claws and eight legs that walks sideways" },
      { word: "starfish", definition: "A star-shaped sea creature with five arms found on the sea floor" },
      { word: "seashell", definition: "The hard outer covering of a sea creature found on beaches" },
      { word: "sandcastle", definition: "A model of a castle built from wet sand on the beach" },
      { word: "sunscreen", definition: "A cream applied to skin to protect it from the sun's harmful rays" }
    ]
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 15,
    title: "Unit 15 – Party Time!",
    mcq: [
      // Video-context
      {
        question: "At the start of the video, Rosy receives something in the post asking her to come to a party. What is it?",
        options: ["A balloon", "A present", "An invitation", "A decoration"],
        answer: 2
      },
      {
        question: "In the video, Rosy and Tim get the room ready for the party. What do they blow up?",
        options: ["Candles", "Presents", "Invitations", "Balloons"],
        answer: 3
      },
      {
        question: "In the video, everyone gathers around the birthday cake and sings. What do they sing?",
        options: ["'Good morning!'", "'Goodbye!'", "'Happy Birthday!'", "'Hello!'"],
        answer: 2
      },
      {
        question: "In the video, how many candles are on the birthday cake? Count them!",
        options: ["Six", "Ten", "Seven", "Eight"],
        answer: 3
      },
      {
        question: "In the video, what does Rosy give to the birthday person as a gift?",
        options: ["A candle", "An invitation", "A decoration", "A present"],
        answer: 3
      },
      // Concept
      {
        question: "What do guests do when the birthday person blows out the candles?",
        options: ["Go home", "Cry", "Clap and sing", "Go to sleep"],
        answer: 2
      },
      {
        question: "What kind of sweet food is usually on a birthday table?",
        options: ["Plain bread", "Birthday cake", "Vegetables", "Plain rice"],
        answer: 1
      },
      {
        question: "What are the round, colourful things you blow up with air at a party?",
        options: ["Candles", "Presents", "Invitations", "Balloons"],
        answer: 3
      },
      {
        question: "What are the things you use to make a room look special and festive for a party?",
        options: ["Candles", "Invitations", "Presents", "Decorations"],
        answer: 3
      },
      {
        question: "Which sentence means someone is celebrating their birthday?",
        options: ["It is a normal day.", "It is raining today.", "Today is my birthday!", "I go to school today."],
        answer: 2
      }
    ],
    vocab: [
      { word: "invitation", definition: "A card or message asking someone to come to your party" },
      { word: "decoration", definition: "Items used to make a place look colourful and festive" },
      { word: "candles", definition: "Wax sticks with a wick that you light and blow out on a birthday cake" },
      { word: "present", definition: "A gift you give to someone on a special occasion" },
      { word: "balloon", definition: "A colourful rubber bag filled with air used at parties" }
    ]
  }
];
