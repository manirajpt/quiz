import { v4 as uuid } from 'uuid';



const qz = {
    data: [
        {
            id: uuid.v4(),
            category: "marvel",
            image: "https://cdn.vox-cdn.com/thumbor/s-Oy8BtdWSKvO-4hzN7Gg8ZPL98=/0x0:1920x1080/1200x800/filters:focal(598x133:890x425)/cdn.vox-cdn.com/uploads/chorus_image/image/68669366/spiderman16x9.0.jpg",
            title: "Marvel",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique quis nunc eget rutrum",
            quiz: [
                {
                    id: uuid.v4(),
                    question: "Black Panther is set in which fictional country?",
                    options: [
                        { id: uuid.v4(), option: "Wakanda", isCorrect: true },
                        { id: uuid.v4(), option: "Takanda", isCorrect: false },
                        { id: uuid.v4(), option: "Zakanda", isCorrect: false },
                        { id: uuid.v4(), option: "Jakanda", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "Who rescued Tony Stark and Nebula from space?",
                    options: [
                        { id: uuid.v4(), option: "Captain America", isCorrect: false },
                        { id: uuid.v4(), option: "Captain Marvel", isCorrect: true },
                        { id: uuid.v4(), option: "Thor", isCorrect: false },
                        { id: uuid.v4(), option: "Hulk", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "Thor's Mjolnir is made from the metal of a dying ___?",
                    options: [
                        { id: uuid.v4(), option: "Nebula", isCorrect: false },
                        { id: uuid.v4(), option: "Moon", isCorrect: false },
                        { id: uuid.v4(), option: "Star", isCorrect: true },
                        { id: uuid.v4(), option: "Sun", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "What did Thor say about Jane Foster's catchphrase?",
                    options: [
                        { id: uuid.v4(), option: "It's Crap", isCorrect: false },
                        { id: uuid.v4(), option: "That's Bullshit", isCorrect: false },
                        { id: uuid.v4(), option: "What ever", isCorrect: false },
                        { id: uuid.v4(), option: "It's perfect", isCorrect: true }
                    ]
                },
            ]
        },
        {
            id: uuid.v4(),
            category: "dc",
            image: "https://imgix.bustle.com/uploads/image/2018/8/28/3e646f5f-5e18-40f4-a6f3-c71f0c6b0051-justice-league.jpg",
            title: "DC",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique quis nunc eget rutrum",
            quiz: [
                {
                    id: uuid.v4(),
                    question: "What was Wonder Woman originally named?",
                    options: [
                        { id: uuid.v4(), option: "Anita", isCorrect: false },
                        { id: uuid.v4(), option: "Suprema", isCorrect: true },
                        { id: uuid.v4(), option: "Mishita", isCorrect: false },
                        { id: uuid.v4(), option: "None", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "Which supervillain was once the Iranian Ambassador to the U.N.?",
                    options: [
                        { id: uuid.v4(), option: "Wonder Man", isCorrect: false },
                        { id: uuid.v4(), option: "Superman", isCorrect: false },
                        { id: uuid.v4(), option: "The Joker", isCorrect: true },
                        { id: uuid.v4(), option: "Batman", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "What is Batman's favorite food?",
                    options: [
                        { id: uuid.v4(), option: "Chicken Salad", isCorrect: false },
                        { id: uuid.v4(), option: "Turkey Roast", isCorrect: false },
                        { id: uuid.v4(), option: "Goat Ribs", isCorrect: false },
                        { id: uuid.v4(), option: "Mulligatawny soup", isCorrect: true }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "In how many seconds can Green Arrow shoot and reload?",
                    options: [
                        { id: uuid.v4(), option: "Two and a half seconds", isCorrect: true },
                        { id: uuid.v4(), option: "Two seconds", isCorrect: false },
                        { id: uuid.v4(), option: "One second", isCorrect: false },
                        { id: uuid.v4(), option: "One and a half seconds", isCorrect: false }
                    ]
                },
            ]
        },
        {
            id: uuid.v4(),
            category: "general",
            image: "https://images.pexels.com/photos/2017364/pexels-photo-2017364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "General Knowledge",
            description: "Test your knowledge with this diverse set of questions from various fields.",
            quiz: [
                {
                    id: uuid.v4(),
                    question: "Which planet is known as the Red Planet?",
                    options: [
                        { id: uuid.v4(), option: "Earth", isCorrect: false },
                        { id: uuid.v4(), option: "Mars", isCorrect: true },
                        { id: uuid.v4(), option: "Venus", isCorrect: false },
                        { id: uuid.v4(), option: "Jupiter", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "Who painted the Mona Lisa?",
                    options: [
                        { id: uuid.v4(), option: "Vincent van Gogh", isCorrect: false },
                        { id: uuid.v4(), option: "Pablo Picasso", isCorrect: false },
                        { id: uuid.v4(), option: "Leonardo da Vinci", isCorrect: true },
                        { id: uuid.v4(), option: "Michelangelo", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "Which country hosted the first modern Olympic Games?",
                    options: [
                        { id: uuid.v4(), option: "France", isCorrect: false },
                        { id: uuid.v4(), option: "Greece", isCorrect: true },
                        { id: uuid.v4(), option: "United States", isCorrect: false },
                        { id: uuid.v4(), option: "Italy", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "What is the largest organ of the human body?",
                    options: [
                        { id: uuid.v4(), option: "Liver", isCorrect: false },
                        { id: uuid.v4(), option: "Heart", isCorrect: false },
                        { id: uuid.v4(), option: "Skin", isCorrect: true },
                        { id: uuid.v4(), option: "Lung", isCorrect: false }
                    ]
                },
            ]
        },
        {
            id: uuid.v4(),
            category: "sports",
            image: "https://images.unsplash.com/photo-1542587213-2d2a38c891ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
            title: "Sports",
            description: "Test your sports knowledge with this exciting quiz!",
            quiz: [
                {
                    id: uuid.v4(),
                    question: "Which country won the FIFA World Cup in 2018?",
                    options: [
                        { id: uuid.v4(), option: "Brazil", isCorrect: false },
                        { id: uuid.v4(), option: "Germany", isCorrect: false },
                        { id: uuid.v4(), option: "France", isCorrect: true },
                        { id: uuid.v4(), option: "Argentina", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "Who holds the record for the most home runs in a single MLB season?",
                    options: [
                        { id: uuid.v4(), option: "Babe Ruth", isCorrect: false },
                        { id: uuid.v4(), option: "Hank Aaron", isCorrect: false },
                        { id: uuid.v4(), option: "Barry Bonds", isCorrect: true },
                        { id: uuid.v4(), option: "Mark McGwire", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "Which country has won the most Olympic gold medals in swimming?",
                    options: [
                        { id: uuid.v4(), option: "Australia", isCorrect: false },
                        { id: uuid.v4(), option: "China", isCorrect: false },
                        { id: uuid.v4(), option: "United States", isCorrect: true },
                        { id: uuid.v4(), option: "Russia", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "Who is known as the fastest man in the world?",
                    options: [
                        { id: uuid.v4(), option: "Usain Bolt", isCorrect: true },
                        { id: uuid.v4(), option: "Carl Lewis", isCorrect: false },
                        { id: uuid.v4(), option: "Maurice Greene", isCorrect: false },
                        { id: uuid.v4(), option: "Yohan Blake", isCorrect: false }
                    ]
                },
            ]
        },
        {
            id: uuid.v4(),
            category: "science",
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
            title: "Science",
            description: "Challenge your understanding of scientific concepts with this quiz.",
            quiz: [
                {
                    id: uuid.v4(),
                    question: "What is the chemical symbol for gold?",
                    options: [
                        { id: uuid.v4(), option: "Au", isCorrect: true },
                        { id: uuid.v4(), option: "Ag", isCorrect: false },
                        { id: uuid.v4(), option: "Pt", isCorrect: false },
                        { id: uuid.v4(), option: "Pb", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "What planet is known as the 'Gas Giant'?",
                    options: [
                        { id: uuid.v4(), option: "Earth", isCorrect: false },
                        { id: uuid.v4(), option: "Mars", isCorrect: false },
                        { id: uuid.v4(), option: "Jupiter", isCorrect: true },
                        { id: uuid.v4(), option: "Venus", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "Who developed the theory of relativity?",
                    options: [
                        { id: uuid.v4(), option: "Isaac Newton", isCorrect: false },
                        { id: uuid.v4(), option: "Galileo Galilei", isCorrect: false },
                        { id: uuid.v4(), option: "Albert Einstein", isCorrect: true },
                        { id: uuid.v4(), option: "Nikola Tesla", isCorrect: false }
                    ]
                },
                {
                    id: uuid.v4(),
                    question: "What is the hardest natural substance on Earth?",
                    options: [
                        { id: uuid.v4(), option: "Gold", isCorrect: false },
                        { id: uuid.v4(), option: "Iron", isCorrect: false },
                        { id: uuid.v4(), option: "Diamond", isCorrect: true },
                        { id: uuid.v4(), option: "Platinum", isCorrect: false }
                    ]
                },
            ]
        },
    ]
};

export default qz;
