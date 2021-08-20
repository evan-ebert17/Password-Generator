// Assignment Code
var buttonInteract = document.querySelector("#generate");
let passArr = [];
let randomFinalArr = [];
var numberOfCharMin = 8;
var numberOfCharMax = 74;

buttonInteract.addEventListener('click', function generateMessages() {
  var charLengthPrompt = prompt("How long do you want the password to be?", "8-74");
  if (charLengthPrompt < numberOfCharMin) {
    alert('Password must be atleast 8 characters!');
    return;
  } else if (charLengthPrompt > numberOfCharMax) {
    alert('Password must be only 74 characters or smaller!');
    return;
  }

  var lowerPrompt = confirm('Lower Case letters included?');
  var upperPrompt = confirm('Upper Case letters included?');
  var numberPrompt = confirm('Numbers included?');
  var specialPrompt = confirm('Special characters (!@#$%^&*) included?');

  function generatePassword() {
    if (lowerPrompt === true) {
      passArr.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }

    if (upperPrompt == true) {
      passArr.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    }

    if (numberPrompt == true) {
      passArr.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }

    if (specialPrompt == true) {
      passArr.push("!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+");
    }
    if(specialPrompt == false && numberPrompt == false && upperPrompt == false && lowerPrompt == false) {
      return alert('...you answered no to everything');
    }
    for (let i = 0; i < passArr.length; i++) {
      var item = passArr[Math.floor(Math.random() * passArr.length)];
      randomFinalArr.push(item)
    }
    randomFinalArr.length = charLengthPrompt;
  }
  function writePassword() {
    generatePassword();
    var passwordText = document.querySelector("#password");
    const endArr = randomFinalArr.join('');
    passwordText.value = endArr;
  }
  writePassword();
})
