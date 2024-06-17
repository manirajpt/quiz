import { v4 as uuid } from 'uuid';

const qz = {
    data: [
        {
            id: uuid(),
            category: "marvel",
            image: "https://cdn.vox-cdn.com/thumbor/s-Oy8BtdWSKvO-4hzN7Gg8ZPL98=/0x0:1920x1080/1200x800/filters:focal(598x133:890x425)/cdn.vox-cdn.com/uploads/chorus_image/image/68669366/spiderman16x9.0.jpg",
            title: "Marvel",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique quis nunc eget rutrum",
            quiz: [
                {
                    id: uuid(),
                    question: "Black Panther is set in which fictional country?",
                    options: [
                        { id: uuid(), option: "Wakanda", isCorrect: true },
                        { id: uuid(), option: "Takanda", isCorrect: false },
                        { id: uuid(), option: "Zakanda", isCorrect: false },
                        { id: uuid(), option: "Jakanda", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Who rescued Tony Stark and Nebula from space?",
                    options: [
                        { id: uuid(), option: "Captain America", isCorrect: false },
                        { id: uuid(), option: "Captain Marvel", isCorrect: true },
                        { id: uuid(), option: "Thor", isCorrect: false },
                        { id: uuid(), option: "Hulk", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Thor's Mjolnir is made from the metal of a dying ___?",
                    options: [
                        { id: uuid(), option: "Nebula", isCorrect: false },
                        { id: uuid(), option: "Moon", isCorrect: false },
                        { id: uuid(), option: "Star", isCorrect: true },
                        { id: uuid(), option: "Sun", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What did Thor say about Jane Foster's catchphrase?",
                    options: [
                        { id: uuid(), option: "It's Crap", isCorrect: false },
                        { id: uuid(), option: "That's Bullshit", isCorrect: false },
                        { id: uuid(), option: "What ever", isCorrect: false },
                        { id: uuid(), option: "It's perfect", isCorrect: true }
                    ]
                },
            ]
        },
        {
            id: uuid(),
            category: "dc",
            image: "https://imgix.bustle.com/uploads/image/2018/8/28/3e646f5f-5e18-40f4-a6f3-c71f0c6b0051-justice-league.jpg",
            title: "DC",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique quis nunc eget rutrum",
            quiz: [
                {
                    id: uuid(),
                    question: "What was Wonder Woman originally named?",
                    options: [
                        { id: uuid(), option: "Anita", isCorrect: false },
                        { id: uuid(), option: "Suprema", isCorrect: true },
                        { id: uuid(), option: "Mishita", isCorrect: false },
                        { id: uuid(), option: "None", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which supervillain was once the Iranian Ambassador to the U.N.?",
                    options: [
                        { id: uuid(), option: "Wonder Man", isCorrect: false },
                        { id: uuid(), option: "Superman", isCorrect: false },
                        { id: uuid(), option: "The Joker", isCorrect: true },
                        { id: uuid(), option: "Batman", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is batman's favorite food?",
                    options: [
                        { id: uuid(), option: "Chicken Salad", isCorrect: false },
                        { id: uuid(), option: "Turkey Roast", isCorrect: false },
                        { id: uuid(), option: "Goat Ribbs", isCorrect: false },
                        { id: uuid(), option: "Mulligatawny soup", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "In how many seconds can Green Arrow shoot and reload?",
                    options: [
                        { id: uuid(), option: "Two and a half seconds", isCorrect: true },
                        { id: uuid(), option: "Two seconds", isCorrect: false },
                        { id: uuid(), option: "One seconds", isCorrect: false },
                        { id: uuid(), option: "One and a half seconds", isCorrect: false }
                    ]
                },
            ]
        },
        {
            id: uuid(),
            category: "general",
            image: "https://images.pexels.com/photos/2017364/pexels-photo-2017364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "General Knowledge",
            description: "Test your knowledge with this diverse set of questions from various fields.",
            quiz: [
                {
                    id: uuid(),
                    question: "Which planet is known as the Red Planet?",
                    options: [
                        { id: uuid(), option: "Earth", isCorrect: false },
                        { id: uuid(), option: "Mars", isCorrect: true },
                        { id: uuid(), option: "Venus", isCorrect: false },
                        { id: uuid(), option: "Jupiter", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Who painted the Mona Lisa?",
                    options: [
                        { id: uuid(), option: "Vincent van Gogh", isCorrect: false },
                        { id: uuid(), option: "Pablo Picasso", isCorrect: false },
                        { id: uuid(), option: "Leonardo da Vinci", isCorrect: true },
                        { id: uuid(), option: "Michelangelo", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which country hosted the first modern Olympic Games?",
                    options: [
                        { id: uuid(), option: "France", isCorrect: true },
                        { id: uuid(), option: "Greece", isCorrect: false },
                        { id: uuid(), option: "United States", isCorrect: false },
                        { id: uuid(), option: "Italy", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is the largest organ of the human body?",
                    options: [
                        { id: uuid(), option: "Liver", isCorrect: false },
                        { id: uuid(), option: "Heart", isCorrect: false },
                        { id: uuid(), option: "Skin", isCorrect: true },
                        { id: uuid(), option: "Lung", isCorrect: false }
                    ]
                },
                 {
            id: uuid(),
            category: "sports",
            image: "https://images.unsplash.com/photo-1542587213-2d2a38c891ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
            title: "Sports",
            description: "Test your sports knowledge with this exciting quiz!",
            quiz: [
                {
                    id: uuid(),
                    question: "Which country won the FIFA World Cup in 2018?",
                    options: [
                        { id: uuid(), option: "Brazil", isCorrect: false },
                        { id: uuid(), option: "Germany", isCorrect: false },
                        { id: uuid(), option: "France", isCorrect: true },
                        { id: uuid(), option: "Argentina", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Who holds the record for the most home runs in a single MLB season?",
                    options: [
                        { id: uuid(), option: "Babe Ruth", isCorrect: false },
                        { id: uuid(), option: "Hank Aaron", isCorrect: false },
                        { id: uuid(), option: "Barry Bonds", isCorrect: true },
                        { id: uuid(), option: "Mark McGwire", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which country has won the most Olympic gold medals in hockey?",
                    options: [
                        { id: uuid(), option: "Canada", isCorrect: true },
                        { id: uuid(), option: "Russia", isCorrect: false },
                        { id: uuid(), option: "United States", isCorrect: false },
                        { id: uuid(), option: "Sweden", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "In which year did Roger Federer win his first Wimbledon title?",
                    options: [
                        { id: uuid(), option: "2003", isCorrect: true },
                        { id: uuid(), option: "2005", isCorrect: false },
                        { id: uuid(), option: "2007", isCorrect: false },
                        { id: uuid(), option: "2009", isCorrect: false }
                    ]
                },
            ]
        },
                {
            id: uuid(),
            category: "DSA",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
            title: "Data Structures and Algorithms",
            description: "Challenge your knowledge of data structures and algorithms with these questions!",
            quiz: [
                {
                    id: uuid(),
                    question: "Which data structure uses the LIFO (Last In, First Out) principle?",
                    options: [
                        { id: uuid(), option: "Queue", isCorrect: false },
                        { id: uuid(), option: "Stack", isCorrect: true },
                        { id: uuid(), option: "LinkedList", isCorrect: false },
                        { id: uuid(), option: "Binary Tree", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which algorithm is used to find the shortest path in a graph?",
                    options: [
                        { id: uuid(), option: "Merge Sort", isCorrect: false },
                        { id: uuid(), option: "Dijkstra's Algorithm", isCorrect: true },
                        { id: uuid(), option: "Binary Search", isCorrect: false },
                        { id: uuid(), option: "Depth-First Search", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is the time complexity of binary search algorithm?",
                    options: [
                        { id: uuid(), option: "O(n)", isCorrect: false },
                        { id: uuid(), option: "O(log n)", isCorrect: true },
                        { id: uuid(), option: "O(n^2)", isCorrect: false },
                        { id: uuid(), option: "O(n log n)", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which data structure is used to implement a priority queue?",
                    options: [
                        { id: uuid(), option: "Stack", isCorrect: false },
                        { id: uuid(), option: "Heap", isCorrect: true },
                        { id: uuid(), option: "Array", isCorrect: false },
                        { id: uuid(), option: "LinkedList", isCorrect: false }
                    ]
                },
            ]
        },
                {
            id: uuid(),
            category: "Machine Learning",
            image: "https://images.unsplash.com/photo-1535467729786-7c3555ef9af2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
            title: "Machine Learning",
            description: "Test your understanding of machine learning concepts and algorithms with these questions!",
            quiz: [
                {
                    id: uuid(),
                    question: "Which type of machine learning algorithm is used for classification and regression tasks?",
                    options: [
                        { id: uuid(), option: "Supervised Learning", isCorrect: true },
                        { id: uuid(), option: "Unsupervised Learning", isCorrect: false },
                        { id: uuid(), option: "Reinforcement Learning", isCorrect: false },
                        { id: uuid(), option: "Semi-Supervised Learning", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which algorithm is used to reduce the dimensionality of a dataset?",
                    options: [
                        { id: uuid(), option: "Linear Regression", isCorrect: false },
                        { id: uuid(), option: "Principal Component Analysis (PCA)", isCorrect: true },
                        { id: uuid(), option: "K-Means Clustering", isCorrect: false },
                        { id: uuid(), option: "Decision Trees", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is the primary purpose of using a confusion matrix?",
                    options: [
                        { id: uuid(), option: "To calculate the accuracy of a regression model", isCorrect: false },
                        { id: uuid(), option: "To evaluate the performance of a classification model", isCorrect: true },
                        { id: uuid(), option: "To visualize the distribution of data", isCorrect: false },
                        { id: uuid(), option: "To identify outliers in the dataset", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which method is used to prevent overfitting in a machine learning model?",
                    options: [
                        { id: uuid(), option: "Increasing the size of the training data", isCorrect: false },
                        { id: uuid(), option: "Cross-Validation", isCorrect: true },
                        { id: uuid(), option: "Reducing the number of features", isCorrect: false },
                        { id: uuid(), option: "Normalizing the data", isCorrect: false }
                    ]
                },
            ]
        },
                 {
            id: uuid(),
            category: "maths",
            image: "https://images.unsplash.com/photo-1560073748-11a02c6c1d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
            title: "Mathematics",
            description: "Challenge your mathematical knowledge and problem-solving skills with these questions!",
            quiz: [
                {
                    id: uuid(),
                    question: "What is the derivative of sin(x)?",
                    options: [
                        { id: uuid(), option: "cos(x)", isCorrect: true },
                        { id: uuid(), option: "-sin(x)", isCorrect: false },
                        { id: uuid(), option: "-cos(x)", isCorrect: false },
                        { id: uuid(), option: "sin(x)", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "If a triangle has sides of length 3, 4, and 5, what type of triangle is it?",
                    options: [
                        { id: uuid(), option: "Equilateral", isCorrect: false },
                        { id: uuid(), option: "Isosceles", isCorrect: false },
                        { id: uuid(), option: "Scalene", isCorrect: true },
                        { id: uuid(), option: "Right", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is the value of π (pi) to three decimal places?",
                    options: [
                        { id: uuid(), option: "3.142", isCorrect: true },
                        { id: uuid(), option: "3.141", isCorrect: false },
                        { id: uuid(), option: "3.143", isCorrect: false },
                        { id: uuid(), option: "3.140", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is the sum of the angles in a quadrilateral?",
                    options: [
                        { id: uuid(), option: "180 degrees", isCorrect: false },
                        { id: uuid(), option: "360 degrees", isCorrect: true },
                        { id: uuid(), option: "270 degrees", isCorrect: false },
                        { id: uuid(), option: "450 degrees", isCorrect: false }
                    ]
                },
            ]
        },
            ]
        
};
export default qz;
