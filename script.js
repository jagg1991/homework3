// FUNCTION - PASSWORD GENERATOR FUNCTION STARTS HERE.
function generate ()
{
        // Variable to promt for characters 
        var caseLenght = prompt('How many characters would you like your password to be? Please choose from 8-128 characters.');

        // if statment if <8 
        if (caseLenght < 8) {
        alert("Please select a higher number!");} 
        
        // If total is greater than 128
        else if (caseLenght > 128){
        alert("Please select a lower number!");}
        
        // else statement to generate password  
        else
  {     
        // Confirm to ask if user would like capital, lower case, numbers and special char.
        var conUppCase = confirm("Would you like a capital letter?");
        var conLowCase = confirm("Would you like a lower case letter?");
        var conSymCase = confirm("Would you like a special character?");
        var conNumCase = confirm("Would you like a number?");

        // Varibles for char.
        var letterUp = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

        var letterLow = ['abcdefghijklmnopqrstuvwxyz'];
        
        var num = ['0123456789'];
        
        var special = ['!@#$%^&*()_+'];
        
        // variable adding characters together.
        var char = letterLow + letterUp + num + special;

        // For loop for password 
        for (var i = 0; i < caseLenght; i++)
      {
          // variable to randomly generate password 
          var allCharacters = char[Math.floor(Math.random() * char.length)];
          
          // If user confirms all characters 
          if(
            (conUppCase === true) || 
            (conLowCase === true) || 
            (conSymCase === true) || 
            (conNumCase === true)
            ){document.getElementById("password").innerHTML += allCharacters;} 
          
          // if user doesn't chose char. 
          else{
            alert("You didn't Choose Any Type of Characters!!!");}
      }    
        
  }
}  