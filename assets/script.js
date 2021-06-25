// Assignment Code
var buttonInteract = document.querySelector("#generate");
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberPass = "0123456789";
var symbols = "!@#$%^&*_-+=";

// Write password to the #password input
function writePassword() {
  var windowReady = window.confirm("Ready?");
  var windowLength = window.prompt("How many Characters? (8-128)");
  var windowUpper = window.confirm("Want Uppercase letters in the password?");
  var windowLower = window.confirm("Want Lowercase letters in the password?");
  var windowNumbers = window.confirm("Numbers?");
  var windowSpecial = window.confirm("Special Characters?");
  
    var password = {
      generatePassword() {
         {

        }
      }
    };
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
buttonInteract.addEventListener("click", writePassword);
