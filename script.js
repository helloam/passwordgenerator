// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return;
}

var charSpecial = "!@#$%^&*()_+";
var charNumber = "1234567890";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var password = "";

function generatePassword () {
  var length = prompt("Please choose between 8-128 characters for your passcode.");
  if(length < 8 || length > 128) {
    alert("Please choose a length between 8-128 characters.");
  } else {
var special = confirm("Would you like to use special characters?");
var number = confirm("Would you like to incorporate numbers?");
var upper = confirm("Would you like to use upper case letters?");
var lower = confirm("Would you like to use lower case letters?");
  };

if(special == true) {
  specialSplit = special.split("");
} else {special = [];
};

if(number == true) {
  numberSplit = number.split("");
} else {
  numberSplit = [];
};

if(upper == true) {
  upperSplit = upper.split("");
} else {
  upperSplit = [];
};

if(lower == true) {
  lowerSplit = lower.split("");
} else {
  lowerSplit = [];
};

var password = []

var allCharacters = specialsplit.concat(numberSplit, upperSplit, lowerSplit);
for (i = 0; i <length; i++){
  var num = Math.floor(Math.random()* allCharacters.length);
  sum += allCharacters[num];
};
return generatePassword;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
