const quizData = [
    {
        question: "What's Harry's full name?",
        a: "Harold Edward Styles",
        b: "Harry Edward Styles",
        c: "Harry Ethan Styles",
        d: "Harold Ethan Styles",
        correct: "b",
    },
    {
        question: "What day was he born?",
        a: "January 1st 1994",
        b: "December 14th 1992",
        c: "February 1st 1994",
        d: "February 1st 1995",
        correct: "c",
    },
    {
        question: "What was the name of Harry's band before 1D?",
        a: "White Clouds",
        b: "Purple Clouds",
        c: "White Eskimo",
        d: "Memories",
        correct: "c",
    },
    {
        question: "What was Harry planning to study before X Factor?",
        a: "Law",
        b: "History",
        c: "English Literature",
        d: "Computer science",
        correct: "a",
    },

    {
        question: "Which song was his first solo release to go #1?",
        a: "Sign of the Times",
        b: "Adore You",
        c: "Golden",
        d: "Watermelon Sugar",
        correct: "d",
    },
    {
        question: "Which of these foreign languages can Harry speak?",
        a: "French",
        b: "Spanish",
        c: "German",
        d: "Italian",
        correct: "a",
    },
    {
        question: "Which of these films has he been in?",
        a: "A star is born",
        b: "Dune",
        c: "Dunkirk",
        d: "After we collided",
        correct: "c",
    },
    {
        question: "What is his zodiac sign?",
        a: "Capricorn",
        b: "Pisces",
        c: "Aries",
        d: "Aquarius",
        correct: "d",
    },
    {
        question: "In X Factor, what song did Harry sing for his audition?",
        a: "Isn't she lovely",
        b: "Beggin",
        c: "Torn",
        d: "Paint it black",
        correct: "a",
    },
    {
        question: "In the music video for 'As It Was', what colour are Harry's nails?",
        a: "Blue",
        b: "White",
        c: "Red",
        d: "Orange",
        correct: "c",
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
        }
    }
})

const myTimeout = setTimeout(myTest, 5000);
function myTest() {
    document.getElementById("wait").remove()
    const startTest = document.createElement("p");
    startTest.innerText = "Good Luck!";
    document.getElementById("startTest").appendChild(startTest)
    document.getElementById("quiz").style.visibility = "visible"
    document.getElementById("box").style.visibility = "visible"
}

const box = document.getElementById("box")
const restart = document.getElementById("restart")
box.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#f27979"
})
box.addEventListener('mouseout', function () {
    this.style.backgroundColor = " #E7D8C3"
})
restart.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    restart.style.backgroundColor = " #f27979"
})

restart.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    restart.style.backgroundColor = "black"
})
