const quizQuestions = [
  new Map([
    ["question", "What is the result of the following expression? 2 + 2 * 3"],
    [1, "8"],
    [2, "10"],
    [3, "6"],
    [4, "12"],
    ["correct", 1],
    [true, "Correct! The result is 8."],
    [false, "Incorrect! The correct answer is 8."],
  ]),
  new Map([
    ["question", "Which of the following is not a JavaScript data type?"],
    [1, "String"],
    [2, "Boolean"],
    [3, "Float"],
    [4, "Array"],
    ["correct", 3],
    [true, "Correct! Float is not a JavaScript data type."],
    [false, "Incorrect! The correct answer is Float."],
  ]),
  new Map([
    ["question", 'What does the "typeof" operator in JavaScript return?'],
    [1, "The data type of a variable"],
    [2, "The value of a variable"],
    [3, "The length of a string"],
    [4, "The index of an array"],
    ["correct", 1],
    [true, "Correct! The typeof operator returns the data type of a variable."],
    [false, "Incorrect! The correct answer is the data type of a variable."],
  ]),
  new Map([
    [
      "question",
      "Which method is used to add an element to the end of an array?",
    ],
    [1, "push()"],
    [2, "pop()"],
    [3, "shift()"],
    [4, "unshift()"],
    ["correct", 1],
    [
      true,
      "Correct! The push() method adds an element to the end of an array.",
    ],
    [false, "Incorrect! The correct answer is push()."],
  ]),
  new Map([
    ["question", 'What is the result of the following expression? "5" + 2'],
    [1, "7"],
    [2, "52"],
    [3, "52"],
    [4, "Error"],
    ["correct", 2],
    [true, 'Correct! The result is "52" (string concatenation).'],
    [false, 'Incorrect! The correct answer is "52".'],
  ]),
];

let score = 0;
let questionNumber = 0;

const questionSelector = document.getElementById("question");
const answerSelector = document.querySelectorAll(".options label");
const inputSelector = document.querySelectorAll(".options input");

const resultSelector = document.querySelector(".result");
const submitButton = document.getElementById("submit-btn");

console.log(answerSelector);
console.log(questionSelector);
console.log(inputSelector);

function displayQuestion() {
  questionSelector.textContent = quizQuestions[questionNumber].get("question");
  for (let i = 0; i < answerSelector.length; i++) {
    answerSelector[i].textContent = quizQuestions[questionNumber].get(i + 1);
    inputSelector[i].value = i + 1;
    // console.log(inputSelector[i].value);
  }
}

function handleAnswer() {
  //   questionNumber++;
  //   console.log();
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    return;
  }

  const answer = selectedOption.value;
  const correctAnswer = quizQuestions[questionNumber].get("correct");

  resultSelector.textContent = quizQuestions[questionNumber].get();

  if (answer == correctAnswer) {
    score++;
    resultSelector.textContent = quizQuestions[questionNumber].get(true);
  } else {
    resultSelector.textContent = quizQuestions[questionNumber].get(false);
  }
  questionNumber++;
  if (questionNumber < quizQuestions.length) {
    displayQuestion();
  } else {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("result-container").textContent =
      "Quiz completed! Your score: " + score + " out of 5";
  }
}

submitButton.addEventListener("click", handleAnswer);
displayQuestion();

//trigger test for github actions