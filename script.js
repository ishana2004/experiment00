const quizData = [
    {
        question: "Which shape has four equal sides and right angles?",
        options: ["Square", "Rectangle", "Rhombus", "Parallelogram", "Trapezium"],
        answer: "Square"
    },
    {
        question: "Which shape has two pairs of parallel sides?",
        options: ["Triangle", "Parallelogram", "Circle", "Hexagon", "Pentagon"],
        answer: "Parallelogram"
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["4", "5", "6", "7", "8"],
        answer: "6"
    },
    {
        question: "What is the sum of the angles in a triangle?",
        options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees", "450 degrees"],
        answer: "180 degrees"
    }
];

const quizContainer = document.getElementById('quiz');
const questionEl = document.querySelector('.question');
const optionsEl = document.querySelector('.options');
const checkBtn = document.querySelector('.check-btn');
const feedbackEl = document.querySelector('.feedback');

let currentQuiz = 0;
let selectedOption = null;

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    optionsEl.innerHTML = '';
    currentQuizData.options.forEach(optionText => {
        const button = document.createElement('button');
        button.innerText = optionText;
        button.classList.add('option');
        button.addEventListener('click', () => {
            selectedOption = optionText;
            document.querySelectorAll('.option').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
        optionsEl.appendChild(button);
    });
    feedbackEl.innerText = '';
    checkBtn.innerText = "Check Answer";
    selectedOption = null;
}

checkBtn.addEventListener('click', () => {
    if (checkBtn.innerText === 'Next Question') {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = `<h2>You have completed the quiz!</h2>`;
        }
        return;
    }

    if (selectedOption) {
        const currentQuizData = quizData[currentQuiz];
        if (selectedOption === currentQuizData.answer) {
            feedbackEl.innerText = "Correct!";
            feedbackEl.classList.add('correct');
            feedbackEl.classList.remove('incorrect');
        } else {
            feedbackEl.innerText = `Incorrect! The correct answer is ${currentQuizData.answer}.`;
            feedbackEl.classList.add('incorrect');
            feedbackEl.classList.remove('correct');
        }
        checkBtn.innerText = 'Next Question';
    }
});

loadQuiz();
