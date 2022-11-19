// Assignment code here
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variables for the alphabetical, Numerical and Special characters
var uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = uppercase.map(letter => letter.toLowerCase());
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [ "!", "@", "#", "$", "%", "&", "^", "*", "+", "-", "(", ")", ";", ":" ];


function getRandomInt(max){
return Math.ceil(Math.random() * (max))
}



function generatePassword() {
// Step 1 Ask how many characters the user want the password to be
var passwordLength = prompt( "How long would you like to make your password(8-128)?", "12" );
console.log(passwordLength);
// Step 2 Ask if the user wants uppercase
var useUpperCase = confirm("Would you like to include uppercase letters in your password?")
console.log(useUpperCase)
// Step 3 Ask if the user wants lowercase
var useLowerCase = confirm("Would you like to include lowercase letters in your password?")
console.log(useLowerCase)
// Step 4 Ask if the user wants numbers
var useNumbers = confirm("Would you like to include numbers letters in your password?")
console.log(useNumbers)
// Step 5 Ask if the user wants special characters
var useSpecialCharacters = confirm("Would you like to include special letters in your password?")
console.log(useSpecialCharacters)
// This creates the structure of the potential characters
var potentialChars = [];

if (useUpperCase) {
potentialChars = potentialChars.concat(uppercase)
}

if (useLowerCase) {
 potentialChars = potentialChars.concat(lowercase)
}

if (useNumbers) {
  potentialChars = potentialChars.concat(numbers)
}

if (useSpecialCharacters) {
 potentialChars = potentialChars.concat(special)
}

// Creating the password of "PassWordLength" length
var password = ''
for (var i = 0; i < passwordLength; i++) {
password = password + potentialChars[getRandomInt(potentialChars.length)]
}
return password
}