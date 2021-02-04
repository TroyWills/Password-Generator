// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables - characters to be used in password 
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var upperCaseAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var lowerCaseAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// Function that captures user input upon selecting button 
function getuserinput(){

  // ASK the user how long they want password to be - make user start over if the password is > 8, > 128, or is not a number 
  var passwordLength = prompt("How long do you want your password to be?");
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
   // CONFIRM if special characters are needed or not  
   var needSpecialCharacters = confirm("Does your password need special characters?"); 

   // CONFIRM if numeric characters needed 
   var needNumericCharacters = confirm("Does your password require numbers?");
   
   // CONFIRM if uppercase 
   var needUppercaseLetters = confirm("Does your password require uppercase characters?");
   
   // OBJECT stores the length of the password to be generated, and if special characters, numbers, and uppercase letters are required
   var userInput = {length: passwordLength, specCharacters: needSpecialCharacters, numericCharacters: needNumericCharacters, upperCase: needUppercaseLetters};
   return userInput
}

// function that will grab random characters from Array - *used "array" for knowledge*
function getRandomCharacter(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomCharacter = array[randomIndex];
  return randomCharacter;
}

// write a function that creates a password > 8 < 128 characters 
function generatePassword() {
  // stores the inputs from above
  var userInputFromObject = getuserinput();
  // RETURN a password 
  var generatedPassword = []
  
  // Array that stores password requirments  
  var inputTypeReq = lowerCaseAlpha

  // conditional statement that adds special characters if the user says they need them ()
  if (userInputFromObject.specCharacters) {
    inputTypeReq = inputTypeReq.concat(specialCharacters); //*setting the value**
  } 

  // conditional statement that adds uperrcase characters if the user says they need them
  if (userInputFromObject.upperCase) {
    inputTypeReq = inputTypeReq.concat(upperCaseAlpha);
  } 

  // conditional statement that adds numbers if the user says they need them
  if (userInputFromObject.numericCharacters) {
    inputTypeReq = inputTypeReq.concat(numbers);
  } 
  
  // for loop - 
  for (i = 0; i < userInputFromObject.length; i++) {
   // run get random function on 'userInputFromObject'
   var anycharacter = getRandomCharacter(inputTypeReq)
   // push the result to 'var generatedpassword'
   generatedPassword.push(anycharacter);
  }
   return generatedPassword.join('')
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












