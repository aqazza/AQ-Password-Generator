// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercase = uppercase.map((letter) => letter.toLowerCase());
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!", "@", "#", "$", "%", "&", "^", "*", "+", "-", "(", ")"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Step 1 Ask how many characters the user want the password to be
// Step 2 Ask if the user wants uppercase
// Step 3 Ask if the user wants lowercase
// Step 4 Ask if the user wants numbers
// Step 5 Ask if the user wants special characters
