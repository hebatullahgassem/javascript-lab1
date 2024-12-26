//---------------------lab3--------------------------------------------
// you are required to, given a string, replace every letter with its position in the alphabet
// If anything in the text isn't a letter, ignore it and don't return it."a" = 1, "b" = 2, etc.
// Example: alphabet_position("The sunset sets at twelve o' clock.") Should return "20 8 5 19
// 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
//------------------solution
function alphapetPos(text){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const res = [];

  const lowerCase = text.toLowerCase();

  for(let i = 0; i < lowerCase.length; i++){
    let char = lowerCase[i];

    if(char >= 'a' && char <= 'z'){
      const position = alphabet.indexOf(char) + 1;
      res.push(position);
    }
  }

  let output = '';
  for(let i = 0; i < res.length; i++){
    output += res[i];
    if(i < res.length -1 ){
      output += " ";
    }
  }
  return output;
}

console.log(alphapetPos("The sunset sets at twelve o' clock."));



// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. 
// The words in the input String will only
// contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a" --> "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2" --> "Fo1r the2 g3ood 4of th5e pe6ople"
// "" --> ""
//--------------------solution
function orderWords(sentence){
  if(!sentence) return "";

  return sentence
  .split(" ")
  .sort((a,b) => {
    const numA = a.match(/\d/)[0];
    const numB = b.match(/\d/)[0];
    return numA - numB;
  })
  .join(" ");
}
console.log(orderWords("is2 Thi1s T4est 3a")); 
console.log(orderWords("4of Fo1r pe6ople g3ood th5e the2")); 
console.log(orderWords("")); 




// Write a function called specialMultiply which accepts two parameters. If the function is
// passed both parameters, it should return the product of the two. If the function is only
// passed one parameter - it should return a function which can later be passed another
// parameter to return the product. You will have to use closure and arguments to solve this.
// Examples:
// specialMultiply(3,4); // 12
// specialMultiply(3)(4); // 12
// specialMultiply(3); // function(){}...
function specialMultiply(a,b){
  if(b !== undefined){
    return a*b;
  }

  return function(c){
    return a*c;
  }
}
console.log(specialMultiply(3, 4));
console.log(specialMultiply(3)(4)); 
console.log(specialMultiply(3));




// Write a function called guessingGame which takes in one parameter amount. The function
// should return another function that takes in a parameter called guess. In the outer function,
// you should create a variable called answer which is the result of a random number between
// 0 and 10 as well as a variable called guesses which should be set to 0.
// In the inner function, if the guess passed in is the same as the random number (defined in
// the outer function) - you should return the string "You got it!". If the guess is too high return
// "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop
// the user from guessing if the amount of guesses they have made is greater than the initial
// amount passed to the outer function.
// You will have to make use of closure to solve this problem.
// Examples (yours might not be like this, since the answer is random every time):
// var game = guessingGame(5)
// game(1) // "You're too low!"
// game(8) // "You're too high!"
// game(5) // "You're too low!"
// game(7) // "You got it!"
// var game2 = guessingGame(3)
// game2(5) // "You're too low!"
// game2(3) // "You're too low!"
// game2(1) // "No more guesses the answer was 0"
function guessingGame(amount){
  let answer = Math.floor(Math.random() * 11);
  let guesses = 0;

  return function(guess){
    if (guesses >= amount) {
      return `No more guesses, the answer was ${answer}`;
    }
    guesses++;

      if(guess === answer){
        return "You got it!";
      } else if (guess > answer){
        return "Your guess is too high!";
      } else {
        return "Your guess is too low!";
      }
  }
}
var game = guessingGame(5);
console.log(game(1)); 
console.log(game(8)); 
console.log(game(5)); 
console.log(game(7)); 

var game2 = guessingGame(3);
console.log(game2(5)); 
console.log(game2(3));
console.log(game2(1)); 





























//---------------------lab1--------------------------------------------
// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
// Sample numbers: 3, -7, 2
// Output: 3, 2, -7 
//-------------------------------------solution
// let num1 = 3, num2 = -7, num3 = 2;
// if(num1 >= num2 && num1 >=num3){
//     if(num2 >= num3){
//         result = `${num1}, ${num2}, ${num3}`;
//     } else {
//         result = `${num1}, ${num3}, ${num2}`;
//     }
// } else if(num2 >= num1 && num2 >= num3){
//     if(num1 >= num3){
//         result = `${num2}, ${num1}, ${num3}`;
//     } else {
//         result = `${num2}, ${num3}, ${num1}`;
//     }
// } else {
//     if(num1 >= num2){
//         result = `${num3}, ${num1}, ${num2}`;
//     } else {
//         result = `${num3}, ${num2}, ${num1}`;
//     }
// }
// alert(`Sorted nums: ${result}`);





// Write a JavaScript program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".
//------------------------------------solution

// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     } else if(i % 3 === 0){
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }





// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
//---------------------------------solution
// let sum = 0;
// for(let i = 1; i < 1000; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         sum += i;
//     }
// }
// console.log(`sum: ${sum}`);





// Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number. If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message ‘ wrong guess, want to try again?’ if confirmed continue up to 3 times, 
// if not stop the code, after 3 failed times, display message ‘game over’.
//--------------------------------------solution
/*
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
let attempts = 0;
let maxAttempts = 3;

while (attempts < maxAttempts) {
  let userGuess = parseInt(prompt(`Attempt ${attempts + 1}: Guess a number between 1 and 10`), 10);
console.log(userGuess);
  if (userGuess === randomNum) {
    alert("Good Work! You guessed the correct number.");
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
*/










//---------------------lab2--------------------------------------------
/*
// 1. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8 
//------------------solution
var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var sorted = arr1.sort((a,b) => a-b);
console.log(sorted);

// 2. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Sample Data and output:
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
//--------------------------solution--------------------
let string = 'Web Development Tutorial';

function longest(str){
  let words = str.split(' ');
  let longestWord = "";

  for(let i=0; i<str.length; i++){
    for(let i=0; i<words.length; i++){
      if(words[i].length > longestWord.length){
        longestWord = words[i];
      }
    }
  }
  return longestWord;
}

console.log(longest(string));


// 3. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
let prime = 17;

function primeOrNot(num){
  if(num <= 1){
    return false;
  }
  
  for(let i=2; i<=num.length; i++){
    if(num%i===0){
      return false;
    }
  }

  return true;
}

console.log(primeOrNot(prime));

// 4. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1 
//-----------solution-------
function amountTocoins(amount, coins){
let res = [];

for(let i=0; i<coins.length; i++){
  while(amount >= coins[i]){
    amount -= coins[i];
    res.push(coins[i]);
  }
}

return res;
}

let am = 46;
let coi = [25, 10, 5, 2, 1];
console.log(amountTocoins(am, coi));
*/