// Assignment code here

var generatePassword = function() {

  var passLength = window.prompt("Please choose length of password.");
    
    if (passLength < 8 || passLength >= 128) {
      window.alert("You must enter a number between 8 and 128.")
      return generatePassword();
    }
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