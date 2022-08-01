const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What CSS stand for?",
    a: "cascading style sheet",
    b: "chennai super six",
    c: "class selector sequence",
    d: "none of the above",
    correct: "a",

},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "Who is father of java script?",
    a: "Branden Eich",
    b: "stew smith",
    c: "jason holder",
    d: "none of the above",
    correct: "a",
},
{
    question: "Why css use for?",
    a: "Beauty of webpage",
    b: "cascading style sheet",
    c: "jason object notation",
    d: "none of the above",
    correct: "a",
},
{
    question: "what does stand from AJAX?",
    a: "asynchronous javascript and xml",
    b: "cascading style sheet",
    c: "jason object notation",
    d: "none of the above",
    correct: "a",
},
{
    question: "What does npm stand for?",
    a: "hyper text markup language",
    b: "node packet maneger",
    c: "jason object notation",
    d: "none of the above",
    correct: "b",
},
{
    question: 'What does Jon stand for?',
    a: 'hyper text markup language',
    b: "cascading style sheet",
    c: "jason object notation",
    d: "none of the above",
    correct: "c",
}

];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd();
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
'click',
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Congrats, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);