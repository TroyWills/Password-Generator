// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var uppercasealpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var lowercasealpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
var specialcharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

//global variables above -- can be called anywhere // 
// write a function that prompts the user for length, special characters needed? //
function getuserinput(){
  // prompt the user to how long they want password to be // 
  var passwordLength = prompt("How long do you want your password to be?");

  // check to see if the user puts a number // 
  if (isNaN(passwordLength) === true) {
    // ALERT the user "not a number - please try again" // 
    return // get out of the function if true -- can put words after return <-- look this up // 
  }
   // conditional statement(2) to check password length (1 if too short, 1 if too long)
   // CONFIRM if special characters are needed or not // 
   // CONFIRM if uppercase 
}

// write a function that creates a password length < 8 128 >
function generatePassword() {

  var userInput = getuserinput();
  // RETURN a password //
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











