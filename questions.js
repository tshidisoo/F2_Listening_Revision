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
        question: "In the video, Rosy is recording her family with a camcorder. What colour is Rosy's hair?",
        options: ["Black", "Brown", "Blonde", "Red"],
        answer: 1
      },
      {
        question: "Rosy introduces her cousin Tim. What colour are Tim's eyes?",
        options: ["Blue", "Brown", "Green", "Black"],
        answer: 2
      },
      {
        question: "How old is Rosy's little brother Billy?",
        options: ["One", "Three", "Four", "Two"],
        answer: 3
      },
      {
        question: "In the video, where does Tim look for Billy first?",
        options: ["In the wardrobe", "Behind the door", "Under the bed", "In the garden"],
        answer: 2
      },
      {
        question: "What is Billy wearing on his head when he pops up from behind the bed?",
        options: ["A hat", "A helmet", "A scarf", "Bear ears"],
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
        question: "In the video, the teacher shows the children their new classroom. What type of pegs are on the wall?",
        options: ["Number pegs", "Name pegs", "Colour pegs", "Animal pegs"],
        answer: 3
      },
      {
        question: "When the teacher shows the children the new computer, what do the children say?",
        options: ["\"Please!\"", "\"Sorry!\"", "\"Wow!\"", "\"Hello!\""],
        answer: 2
      },
      {
        question: "The teacher asks 'Do you like our new things?' How do the children reply?",
        options: ["They sit quietly.", "They say 'No, we don't.'", "They shake their heads.", "They raise their hands and say 'Yes, we do!'"],
        answer: 3
      },
      {
        question: "The teacher points to a pink object on Rosy's desk. What does the teacher think it is?",
        options: ["A ruler", "A new book", "A new teddy", "A pencil"],
        answer: 2
      },
      {
        question: "What is actually inside the pink object on Rosy's desk?",
        options: ["Books and rulers", "Toys and stickers", "Crayons and erasers", "New pencils and pens"],
        answer: 3
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
        question: "In the video, Mom is pushing a stroller in the park. Who is in the stroller?",
        options: ["Rosy's doll", "A puppy", "Twin babies", "Billy"],
        answer: 2
      },
      {
        question: "What do the babies do that shows something is wrong?",
        options: ["They run away.", "They fall asleep.", "They laugh loudly.", "They cry and rub their eyes."],
        answer: 3
      },
      {
        question: "Rosy asks 'Are they hot?' and Tim asks 'Are they cold?' What is Mom's answer to both questions?",
        options: ["Maybe.", "Yes, they are!", "I don't know.", "No, they aren't."],
        answer: 3
      },
      {
        question: "What food does Rosy offer the babies?",
        options: ["Bananas", "A cheese sandwich", "Apples", "A milkshake"],
        answer: 2
      },
      {
        question: "Why are the babies happy at the end of the video?",
        options: ["They had a bath.", "They went to sleep.", "They found their toys.", "They ate apples."],
        answer: 3
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
        question: "At the start of the video, Tim looks at pictures of himself. Which of these CAN Tim do?",
        options: ["Ride a bike", "Dance", "Play football", "Skateboard"],
        answer: 3
      },
      {
        question: "What can Tim NOT do at the start of the video?",
        options: ["Skate", "Skateboard", "Ride a bike", "Swim"],
        answer: 2
      },
      {
        question: "Who does Tim ask to teach him to ride a bike?",
        options: ["Rosy", "Dad", "His teacher", "Grandpa"],
        answer: 3
      },
      {
        question: "How does Tim feel when he first gets on the bike?",
        options: ["Excited", "Angry", "Scared", "Bored"],
        answer: 2
      },
      {
        question: "How does Tim find out he can ride the bike?",
        options: ["Grandpa tells him before he starts.", "He reads instructions.", "He watches a video.", "Grandpa secretly lets go and Tim keeps going."],
        answer: 3
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
        question: "In the video, where are Mom and Rosy sitting?",
        options: ["At a restaurant", "In the kitchen", "In the classroom", "At a picnic table"],
        answer: 3
      },
      {
        question: "Where is Billy hiding in the video?",
        options: ["Under the table", "In the car", "Behind the tree", "Behind a bush"],
        answer: 2
      },
      {
        question: "What food does Rosy bring to Billy behind the tree?",
        options: ["A milkshake and juice", "Chocolate and cake", "A banana and apple", "A cheese sandwich and salad"],
        answer: 3
      },
      {
        question: "Who eats Billy's food while it is on the grass?",
        options: ["Tim", "The babies", "Some birds", "Grandpa"],
        answer: 2
      },
      {
        question: "What does Mom say when she sees the food is gone?",
        options: ["\"Let's go home.\"", "\"Naughty Billy!\"", "\"Oh no! We're hungry!\"", "\"Don't worry. We've got more food.\""],
        answer: 3
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
        question: "In the video, Rosy and Tim look at something on the wall at school. What is it?",
        options: ["A map", "Their school timetable", "A picture", "A clock"],
        answer: 1
      },
      {
        question: "On which day do Rosy and Tim have PE?",
        options: ["Monday", "Wednesday", "Thursday", "Friday"],
        answer: 2
      },
      {
        question: "What does Grandma give the children at the bus stop?",
        options: ["Their coats", "Their PE bags", "Their lunch boxes", "Their school bags"],
        answer: 1
      },
      {
        question: "What problem does Tim find when he opens his bag at school?",
        options: ["He has the wrong shoes.", "His bag is empty.", "It is Rosy's bag with her clothes inside.", "He forgot his shoes."],
        answer: 2
      },
      {
        question: "How does Tim solve the problem of having no PE clothes?",
        options: ["He wears his school clothes.", "He sits and watches.", "He goes home to get his bag.", "He borrows another boy's clothes."],
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
        question: "In the video, where are Rosy and Alice when they make their plans to play after school?",
        options: ["At the park", "In the classroom", "On the school bus", "At home"],
        answer: 2
      },
      {
        question: "Why can Alice not play on Monday?",
        options: ["She goes swimming.", "She visits her grandma.", "She has a music lesson.", "She helps her mom."],
        answer: 2
      },
      {
        question: "What does Rosy do every Tuesday?",
        options: ["Go swimming", "Have a music lesson", "Visit her grandma", "Help her mom"],
        answer: 2
      },
      {
        question: "Why can't Rosy play on Thursday?",
        options: ["She helps her mom.", "She has a music lesson.", "She visits grandma.", "She goes swimming."],
        answer: 3
      },
      {
        question: "How do the girls finally find a time to be together?",
        options: ["They agree to meet on Wednesday.", "They decide to play on the weekend.", "Mom invites Alice to go swimming with them on Thursday.", "Alice skips her music lesson."],
        answer: 2
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
        question: "In the video, why does the family go to the toy shop?",
        options: ["The teacher asked them to.", "They want toys for themselves.", "It is Rosy's birthday.", "It is Billy's birthday tomorrow."],
        answer: 3
      },
      {
        question: "Tim picks up some balloons in the shop. Why does Mom say no?",
        options: ["They already have balloons.", "They are too expensive.", "Balloons are not allowed.", "Billy is scared of balloons."],
        answer: 3
      },
      {
        question: "What present does the family decide to buy for Billy?",
        options: ["A car", "A train", "Chocolate", "A teddy bear"],
        answer: 2
      },
      {
        question: "What time is it when Rosy wakes Mom and Dad in the morning?",
        options: ["Eight o'clock", "Seven o'clock", "Six o'clock", "Five o'clock"],
        answer: 3
      },
      {
        question: "Where does the family find Billy at five o'clock in the morning?",
        options: ["In the kitchen eating breakfast", "Still asleep in his bed", "Playing in the garden", "In the living room opening his presents"],
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
        question: "In the video, where does the family plan to walk to?",
        options: ["The park", "The library", "The beach", "The shops"],
        answer: 3
      },
      {
        question: "Tim says the weather is sunny. What does Grandpa tell the children to put on before going out?",
        options: ["Their coats", "Their scarves", "Their boots", "Their sun hats"],
        answer: 3
      },
      {
        question: "What happens to Tim's hat when the wind picks up outside?",
        options: ["He gives it to Billy.", "He leaves it at home.", "The wind blows it off.", "It falls in a puddle."],
        answer: 2
      },
      {
        question: "Why does the family rush home before reaching the shops?",
        options: ["They forgot their shopping list.", "It gets too hot.", "It starts snowing.", "It starts raining and they have no umbrellas."],
        answer: 3
      },
      {
        question: "What problem do they have when they reach the front door?",
        options: ["Tim loses the key.", "The door is broken.", "Mom is not home.", "Grandpa hasn't got the key."],
        answer: 3
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
