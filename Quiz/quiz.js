// script.js

function submitQuiz() {
  const form = document.getElementById('ts-quizForm');
  const questions = form.querySelectorAll('.ts-container');
  let score = 0;

  // Loop through each question
  questions.forEach((question, index) => {
    const selectedOption = question.querySelector(`input[name="ts-question${index + 1}"]:checked`);
    const correctAnswer = 'ts-option3'; // Replace with the correct answer value

    if (selectedOption && selectedOption.value === correctAnswer) {
      score++;
      alert(`Question ${index + 1}: Correct!`);
    } else {
      alert(`Question ${index + 1}: Incorrect. The correct answer is ${correctAnswer}.`);
    }
  });

  alert(`You scored ${score} out of ${questions.length}`);
}

// Add event listener to the submit button
const submitButton = document.querySelector('button');
submitButton.addEventListener('click', submitQuiz);

