// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var upperCaseAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var lowerCaseAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

//global variables above -- can be called anywhere // 
// write a function that prompts the user for length, special characters needed? //
function getuserinput(){
  // prompt the user to how long they want password to be // 
  var passwordLength = prompt("How long do you want your password to be?");

  // ALERT the user if a number is not inputted // 
  if (isNaN(passwordLength) === true) { 
    alert("Please input a number!");
    return; 
  }
  if (passwordLength < 8) {
    alert("Password must be at least 8 charcters");
    return;
  }
  if (passwordLength > 128) {
    alert("Passowrd must be 128 charters or less ")
    return;
  }
   // CONFIRM if special characters are needed or not // 
   var needSpecialCharacters = confirm("Does your password need special characters?"); 
   // confirm if numeric characters needed //
   var needNumericCharacters = confirm("Does your password require numbers?");
   // CONFIRM if uppercase 
   var needUppercaseLetters = confirm("Does your password require uppercase characters?");
   var userInput = {length: passwordLength, specCharacters: needSpecialCharacters, numericCharacters: needNumericCharacters, upperCase: needUppercaseLetters};
   return userInput
}


// write a function that creates a password length < 8 128 >
function generatePassword() {

  var userInputFromObject = getuserinput();
  // RETURN a password //
  // create a new array based on user inputs 
  var charactersWeCanUse = []
  // conditional statement that adds special characters if the user says they need them ()
  if (userInputFromObject.specCharacters) {
  // if the user does want special characters, concatenate special characters into array //
    charactersWeCanUse = charactersWeCanUse.concat(specialCharacters); 
    console.log(charactersWeCanUse)
  } 
  // conditional statement that adds uperrcase characters if the user says they need them
  // conditional statement that adds numbers if the user says they need them
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// local variables - disapear after the button is clicked, or after its ran // 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











