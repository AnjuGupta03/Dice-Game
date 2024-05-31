document.getElementById("dice-btn").addEventListener("click", function() {
  // Generate random numbers for both dice
  var player1Roll = Math.floor(Math.random() * 6) + 1;
  var player2Roll = Math.floor(Math.random() * 6) + 1;

  // Update the images based on the dice rolls
  document.getElementById("dice1").src = "dice" + player1Roll + ".png";
  document.getElementById("dice2").src = "dice" + player2Roll + ".png";

  // Determine the winner
  var resultText;
  if (player1Roll > player2Roll) {
    resultText = "Player 1 Wins!";
  } else if (player1Roll < player2Roll) {
    resultText = "Player 2 Wins!";
  } else {
    resultText = "It's a Draw!";
  }

  // Display the result
  document.getElementById("result").textContent = resultText;
});
