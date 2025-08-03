// Function to check the answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";
  
    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
  
    // If no answer is selected, show feedback and exit
    if (!selectedOption) {
      document.getElementById('feedback').textContent = "Please select an answer!";
      return;
    }
  
    const userAnswer = selectedOption.value; // Get the value of the selected radio button
  
    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
      document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
      document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
  }
  
  // Add an event listener to the submit button
  document.getElementById('submit-answer').addEventListener('click', checkAnswer);
  
