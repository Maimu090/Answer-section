const quizData = [
    {
        question: "Compiler is used to find syntax error in?",
        a: "Executable file",
        b: "Source file",
        c: "Object file",
        d: "Directory",
        correct: "b",

    }, {
question: "Which language works in a web browser?",
a: "Java",
b: "C",
c: "Python",
d: "Javascript",
correct: "d",
    },
    {
        question: "What does HTML stands for ?",
a: "Hypertext Markup language",
b: "Hypertext Markdown",
c: "Hyperloop",
d: "Hyper Terminals",
correct: "a",
    },

    {
        question: "What year was Javascript launched",
a: "1996",
b: "1995",
c: "1994",
d: "none of the above",
correct: "b",
    },

    {
        question: "Which year did Nigeria got her independence",
a: "1968",
b: "1960",
c: "1999",
d: "1970",
correct: "b",
    },

    {
        question: "Which function does CTRL C performs?",
a: "paste",
b: "copy",
c: "undo",
d: "redo",
correct: "b",
    },

    {
        question: "which of this is use for styling",
a: "Css",
b: "html",
c: "java",
d: "react",
correct: "a",
    }, 
    {
        question: "What is the capital of Nigeria?",
a: "Kaduna",
b: "Lagos",
c: "Abuja",
d: "Kano",
correct: "c",
    },
];
const quiz = document.getElementById("quiz");
      const answerElements = document.querySelectorAll(".answer");
      const questionElement = document.getElementById("question");
      const a_text = document.getElementById("a_text");
      const b_text = document.getElementById("b_text");
      const c_text = document.getElementById("c_text");
      const d_text = document.getElementById("d_text");
      const submitButton = document.getElementById("submit");
      let currentQuiz = 0;
      let score = 0;
      const deselectAnswers = () => {
        answerElements.forEach((answer) => (answer.checked = false));
      };
      const getSelected = () => {
        let answer;
        answerElements.forEach((answerElement) => {
          if (answerElement.checked) answer = answerElement.id;
        });
        return answer;
      };
      const loadQuiz = () => {
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionElement.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
      };
      loadQuiz();
      submitButton.addEventListener("click", () => {
        const answer = getSelected();
        if (answer) {
          if (answer === quizData[currentQuiz].correct) score++;
          currentQuiz++;
          if (currentQuiz < quizData.length) loadQuiz();
          else {
            quiz.innerHTML = `
<h2>You answered ${score}/${quizData.length} questions correctly</h2>
<button onclick="history.go(0)">Play Again</button>
`; // location.reload() won't work in CodePen for security reasons;
          }
        }
      });