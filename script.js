var startButton = document.getElementById("start-button")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var starterContainerEl = document.getElementById('starter-container')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hide')
    starterContainerEl.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    nextQuestion()

}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.choices.forEach(choices => {
        var button = document.createElement('button')
        button.innerText = questions.choices.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = questions.answer
            
        }
       button.addEventListener('click', selectAnswer)
       answerButtonsElement.appendChild('button')  
    });
      

}

function selectAnswer(e) {

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