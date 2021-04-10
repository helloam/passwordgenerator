// Assignment Code
var generateBtn = document.querySelector("#generate")
var UPPERCASE_CHAR_CODES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var LOWERCASE_CHAR_CODES = "abcdefghijklmnopqrstuvwxyz"
var NUMBER_CHAR_CODES = "1234567890"
var SYMBOL_CHAR_CODES = "~!@#$%^&*()_+"
var password = "";
var passLength = LOWERCASE_CHAR_CODES

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//using if else statements to confirm choices in order to generate the password
function generatePassword() {
  var passwordLength = prompt("Please choose the length of your password between 8-128 characters.");
if(!passwordLength < 8 || passwordLength > 128){
}
var includeuppers = confirm("Do you want to include upper case letters?")
if(includeuppers) {
  passLength = passLength.concat(UPPERCASE_CHAR_CODES)
}

var includenumbers = confirm("Do you want to use numbers as well?")
if(includenumbers) {
  passLength = passLength.concat(NUMBER_CHAR_CODES)
}

var includesymbols = confirm("Do you want to use special characters as well?")
if(includesymbols) {
  passLength = passLength.concat(SYMBOL_CHAR_CODES)
}


for (var i = 0; i < passwordLength; i++) {
  var newSet = Math.floor(Math.random()*passLength.length)
  password = password + passLength[newSet];
}
return password;}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  







