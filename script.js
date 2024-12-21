// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
// Sample numbers: 3, -7, 2
// Output: 3, 2, -7 
//-------------------------------------solution
/*
let num1 = 3, num2 = -7, num3 = 2;
if(num1 >= num2 && num1 >=num3){
    if(num2 >= num3){
        result = `${num1}, ${num2}, ${num3}`;
    } else {
        result = `${num1}, ${num3}, ${num2}`;
    }
} else if(num2 >= num1 && num2 >= num3){
    if(num1 >= num3){
        result = `${num2}, ${num1}, ${num3}`;
    } else {
        result = `${num2}, ${num3}, ${num1}`;
    }
} else {
    if(num1 >= num2){
        result = `${num3}, ${num1}, ${num2}`;
    } else {
        result = `${num3}, ${num2}, ${num1}`;
    }
}
alert(`Sorted nums: ${result}`);
*/





// Write a JavaScript program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".
//------------------------------------solution
/*
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if(i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
*/




// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
//---------------------------------solution
/*
let sum = 0;
for(let i = 1; i < 1000; i++){
    if(i % 3 === 0 || i % 5 === 0){
        sum += i;
    }
}
console.log(`sum: ${sum}`);
*/




// Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number. If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message ‘ wrong guess, want to try again?’ if confirmed continue up to 3 times, 
// if not stop the code, after 3 failed times, display message ‘game over’.
//--------------------------------------solution
// Generate a random number between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let maxAttempts = 3;

while (attempts < maxAttempts) {
  let userGuess = parseInt(prompt(`Attempt ${attempts + 1}: Guess a number between 1 and 10`), 10);

  if (userGuess === randomNum) {
    alert("Good Work.");
    break;
  } else {
    attempts++;
    if (attempts < maxAttempts) {
      let tryAgain = confirm("Wrong guess, want to try again?");
      if (!tryAgain) {
        alert("Thanks for playing!");
        break;
      }
    }
  }

  // If maximum attempts reached, display "Game Over"
  if (attempts === maxAttempts) {
    alert(`Game Over! The correct number was ${randomNum}.`);
  }
}
