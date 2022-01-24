const timerEl = document.getElementById("timer-el");
var questionCounter;
var correctQuestions;
var timeRemaining;
var score;
function pageLoad(){
    timerEl.innerText ="";
    questionCounter = 0;
    correctQuestions = 0;
    score = 0;
    timeRemaining = 75;
}
pageLoad();
//beginning quiz
function beginQuiz(){
    document.getElementById("timer-el").innerText = `Time Remaining: ${timeRemaining}`;
    startTimer();
    questionCounter = 0;
    renderQuestion(questions[questionCounter]);
}
function timer(){}
var time = 75;


var x = setInterval(function(){
time = time - 1;
console.log(time)

if (time <= 0) {
    clearInterval(x);
}
}, 1000);
function renderQuestions(questions){
    for(i = 0; i < questions.answers.length; i++){
        let btn = document.createElement("button");
        btn.className = "hoverable-button answers-choice";
        btn.onclick= captureAnswer;
        document.getElementById("answers-container-el").appendChild(btn);
    }
}
const questions = [
    {
        text: "Commonly used data types DO Not Include:",
        answers: [
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers",
        ],
        correct: "3",
    },
    {
        text: "The condition of an if/else statement is enclosed with_______",
        answers: [
            "1. quotes",
            "2. curly brackets",
            "3. parenthesis",
            "4. square brackets",
        ],
        correct: "3",

    },
    {
        text: "Arrays in JavaScript can be used to store______.",
        answers: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ],
        correct: "4",
    },
    {
        text:"String values must enclosed within _______ when being assigned to variables.",
        answers:[
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. parenthesis",
        ],
        corrects: "3",
    },
    {
        text: "A very useful tool used in development and debugging for printing content to the debugger is: ",
        answers: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ],
    },
    
];


function displayQuestion(){

}
function evaluateAndIncrement(event){

}
//adding fade out effect css
//creating submission form to enter high score