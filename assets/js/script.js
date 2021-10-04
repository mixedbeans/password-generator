// Assignment code here
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNum = "1234567890";
var charSpec = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var generatePassword = function() {
  var passLength = window.prompt("Please choose length of password.");
    if (passLength < 8 || passLength > 128) {
      window.alert("Please enter a number between 8 and 128.")
      return generatePassword();
    } else charType();
    
  // password character types value
  var passChar = ('');

  // character type options
  function charType() {
  var passLower = window.confirm("Would you like lowercase letters in your password?");
    if (passLower) {
      window.alert("You have added lowercase letters!");
      passChar += charLower;
    }

  var passUpper = window.confirm("Would you like uppercase letters in your password?");
    if (passUpper) {
      window.alert("You have added uppercase letters!");
      passChar += charUpper;
    }

  var passNum = window.confirm("Would you like numbers in your password?");
    if (passNum) {
      window.alert("You have added numbers!");
      passChar += charNum;
    }

  var passSpec = window.confirm("Would you like special characters in your password?");
    if (passSpec) {
      window.alert("You have added special characters!");
      passChar += charSpec;
    }
  console.log(passChar);
  }

  // if answer no to all restart
  if (passChar === 'null') {
    window.alert("You must choose at least one character type!");
    charType();
  }    

  // start final password as blank to add to it
  var finalPass = ('');

  //random number function off google
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // loop to create pass
  for (var i = 0; i < passLength; i++) {
    finalPass += passChar[randomNumber(0, passChar.length)];
  } 

  console.log(finalPass);
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);