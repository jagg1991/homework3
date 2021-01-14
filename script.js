// Assignment Code
var letterUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var letterLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', '{', ']', '}', ':', ';', '"', '<', '>', '.', '?', '~', '|'];

var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  

  passwordText.value = password;
}

function generatePassword(password) 
{
  var passwordText = parseInt(prompt('How many characters would you like your password to be? Please choose from 8-128 characters.'));
  {
    for (var i=0; i > password; i++){
    var lowLet = letterLow[Math.floor(Math.random() * letterLow.length)];

    var uplet = letterUp[Math.floor(Math.random() * letterUp.length)];

    var number = num[Math.floor(Math.random() * num.length)];
    }
    {
      if(num < 8);{
        prompt("Please select a higher number!");
      }
      if(num > 128);{
        prompt("Please select a lower number!")}
        
     }

    var choice = prompt("Please choose the next character in your new password. c for a capital letter, l for a lowercase letter, n for a number or s for a special character.");{
      if(choice === "c"){
      document.getElementById("#password").innerHTML += uplet;
       }
       else if(choice === "l"){
      document.getElementById("#password").innerHTML += lowLet;
       }
       else if(choice === "n"){
      document.getElementById("#password").innerHTML += number;
       }
       else if(choice === "s"){
      document.getElementById("#password").innerHTML += spec;
      }
      else prompt("That is not a valid choice") 
  }
  }
 }

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
