var startButton = document.getElementById("start-button")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById('question')
// reach into the html to grab the group of buttons
var answerButtonsElement = document.getElementById('answer-buttons') // grabed the html el (div)
// grab the buttons in the group of buttons
var choiceButtons = answerButtonsElement.children; // return an array of html el
// add an event listener for each button

var starterContainerEl = document.getElementById('starter-container')
var currentQuestionIndex;


var timerElement = document.querySelector(".timer")
var timerCount

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hide')
    starterContainerEl.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    currentQuestionIndex = 0;
    timerCount = 60
    startTimer()
    nextQuestion()

}

function nextQuestion() {
    // if we're on the 2nd question
    if (currentQuestionIndex > 0) {
        // ** eval if the question was correct
        // grab the correct answer 
        var lastQuestionIndex = currentQuestionIndex - 1;
        var lastQuestion = questions[lastQuestionIndex];
        var lastQuestionAnswer = lastQuestion.answer;
    }
    // if we're one the last question
    if (currentQuestionIndex >= 4) {
        return;
    }
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question
    // console.log(choiceButtons)
    // for each choice in choices
    for (index = 0; index < currentQuestion.choices.length; index++) {
        choiceButtons[index].textContent = currentQuestion.choices[index]
        choiceButtons[index].value = currentQuestion.choices[index]
    }
}

for (index = 0; index < choiceButtons.length; index++) {
    choiceButtons[index].addEventListener('click', checkAnswer)
}

function checkAnswer(event) {
    var userChoice = event.target.textContent;
    var correctAnswer = questions[currentQuestionIndex].answer


    if (userChoice != correctAnswer) {
        timerCount -= 10
    }
    // go next question after we check
    currentQuestionIndex = currentQuestionIndex + 1;
    if (currentQuestionIndex < questions.length) {
        nextQuestion()
    }
}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            timerElement.textContent = timerCount + '';
        }
        if (timerCount <= 0 || currentQuestionIndex >= questions.length) {
            //timerElement.textContent = 'Out of Time!';
            clearInterval(timer);
            endQuiz();
        }
    }, 1000)
}

function endQuiz() {
    questionContainerElement.classList.add('hide')
    document.getElementById("end-container").classList.remove('hide')
    document.getElementById("scoreText").textContent = timerCount
}

var questions = [
    {
        question: 'Arrays in JavaScript can be used to store ___.',
        answer: 'all of the above',
        choices: ['Numbers and Strings', 'other Arrays', 'Booleans', 'all of the above']
    },
    {
        question: 'Commonly used data types do NOT include ___.',
        answer: 'Alerts',
        choices: ['Strings', 'Booleans', 'Alerts', 'numbers']
    },
    {
        question: 'You can adjust how your application appears on various screens by using ___.',
        answer: 'Media Queries',
        choices: ['for loops', 'Media Queries', 'HTML', 'JavaScript']
    },
    {
        question: 'JavaScript goes in which HTML element?',
        answer: '<script>',
        choices: ['<div>', '<header>', '<script>', '<footer>']
    }


]
//Storage not yet functional
//function saveScoreToLocal() {
   // var score = timerCount;
   // var userInitials = document.getElementById("initials").value

    //console.log(score, userInitials)
    //localStorage.setItem("example", "yo")
//}

//document.getElementById("saveScore").addEventListener("click", saveScoreToLocal)