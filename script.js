// Set variables for elements
var startButton = document.getElementById("startbtn");
var startDiv = document.getElementById("start")


//Event starts quiz
startButton.addEventListener("click",generateQuiz)




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

// Function to generate quiz questions/answers
function generateQuiz(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[index];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.answerA;
    buttonB.innerHTML = currentQuestion.answerB;
    buttonC.innerHTML = currentQuestion.answerC;
    buttonD.innerHTML = currentQuestion.answerD;
};

// function hides start div and begins quiz
function startQuiz(){
    gameoverDiv.style.display = "none";
    startDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;

        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
    }