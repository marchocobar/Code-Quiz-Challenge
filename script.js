var startButton = document.getElementById("start-button")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var starterContainerEl = document.getElementById('starter-container')

var shuffledQuestions, randomQuestionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hide')
    starterContainerEl.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    randomQuestionIndex = Math.floor(Math.random() * 4)
    currentQuestionIndex = 0
    nextQuestion()

}

function nextQuestion() {
    showQuestion(questions[randomQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    var choiceButtons = answerButtonsElement.children
    for (index = 0; index < choiceButtons.length; index++) {
        choiceButtons[index].textContent = question.choices[index].text
        choiceButtons[index].value = question.choices[index].text
        //Click event below console logs each button value to the console.
        //choiceButtons[index].addEventListener('click', function (event) {
           // console.log(event.target.value)
       // }) 
   }
   choiceButtons.addEventListener('click', nextQuestion) 
  
}

function selectAnswer() {
nextQuestion()

}

var questions = [
    {
        question: 'Arrays in JavaScript can be used to store ___.',
        answer: 'all of the above',
        choices: [{ text: 'Numbers and Strings' }, { text: 'other Arrays' }, { text: 'Booleans' }, { text: 'all of the above' }]
    },
    {
        question: 'Commonly used data types do NOT include ___.',
        answer: 'Alerts',
        choices: [{ text: 'Strings' }, { text: 'Booleans' }, { text: 'Alerts' }, { text: 'numbers' }]
    },
    {
        question: 'You can adjust how your application appears on various screens by using ___.',
        answer: 'Media Queries',
        choices: [{ text: 'for loops' }, { text: 'Media Queries' }, { text: 'HTML' }, { text: 'JavaScript' }]
    },
    {
        question: 'JavaScript goes in which HTML element?',
        answer: '<script>',
        choices: [{ text: '<div>' }, { text: '<header>' }, { text: '<script>' }, { text: '<footer>' }]
    }


]