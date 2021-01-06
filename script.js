// Set variables for elements
var startButton = document.getElementById.("startbtn");


// Quis questions and answers
var quizQuestions = [{
    question: "Inside which HTML element do we put the JavaScript?",
    answerA: "<js>",
    answerB: "<scripting>",
    answerC: "<javascript>",
    answerD: "<script>",
    correctAnswer: "d"},
    {
        question: "How can you add a comment in JavaScript?",
        answerA: "//This is a comment",
        answerB: "<!--This is a comment-->",
        answerC: "'This is a comment",
        answerD: "/^/This is a comment/^/",
        correctAnswer: "a"},
    {   
        question: "In JavaScript, variables use what kind of capitalization—e.g., getElementById, startButton, etc.?",
        answerA: "Snake Case",
        answerB: "Snek Case",
        answerC: "Camel Case",
        answerD: "Camel Clutch"},

];

// Additional variables
var index = quizQuestions.length
// var 
var timeRemaining = 120;
var timeInterval;
var score = 0;
var correct;

// Fuction to generate quiz questions/answers
function generateQuiz()[]