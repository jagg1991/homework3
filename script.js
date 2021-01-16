// FUNCTION - PASSWORD GENERATOR FUNCTION STARTS HERE.
function generate() {
  // Variable to promt for characters 
  var caseLenght = prompt('How many characters would you like your password to be? Please choose from 8-128 characters.');

  // if statment if <8 
  if (caseLenght < 8) {
    alert("Please select a higher number!");
    //added retun(generate)
    return generate()

  }

  // If total is greater than 128
  else if (caseLenght > 128) {
    alert("Please select a lower number!");
    //added retun(generate) 
    return generate()
  }

  // else statement to generate password  
  else {
    // Confirm to ask if user would like capital, lower case, numbers and special char.
    var conUppCase = confirm("Would you like a capital letter?");
    var conLowCase = confirm("Would you like a lower case letter?");
    var conSymCase = confirm("Would you like a special character?");
    var conNumCase = confirm("Would you like a number?");

    //added console.log 
    console.log(conUppCase, conLowCase, conSymCase, conNumCase);


    // Varibles for char.
    var letterUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var letterLow = 'abcdefghijklmnopqrstuvwxyz';

    var num = '0123456789';

    var special = '!@#$%^&*()_+';

    // added an array for char
    var char = [];
    // variable adding characters together.
    if (conUppCase) {
      char.push(letterUp)
    }
    if (conLowCase === true) {
      char.push(letterLow);

    }
    if (conNumCase === true) {
      char.push(num)
    }
    if (conSymCase === true) {
      char.push(special)
    }

    console.log(char)
    // added if statement 
    if (
      (conUppCase === true) ||
      (conLowCase === true) ||
      (conSymCase === true) ||
      (conNumCase === true)) {
      var j = 0
      // For loop for password 
      for (var i = 0; i < caseLenght; i++) {
        if (j >= char.length) {
          j = 0;
        }
        var randomIndex = Math.floor(Math.random() * char[j].length);
        //added var that equals char[j] to get radom index of array

        var allCharacters = char[j][randomIndex]
        // variable to randomly generate password 
        // var allCharacters = char[Math.floor(Math.random() * char.length)];
        document.getElementById("password").innerHTML += allCharacters;
        j++
      }

      // if user doesn't chose char. 
    }
    else {
      alert("You didn't Choose Any Type of Characters!!!");
    }
  }

}
