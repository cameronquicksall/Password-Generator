// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["Q", "W", "E","R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var lowerCase = ["q","w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var special = ["!", "@", "#", "$", "%", "&", "?", "+", "-", "^", "(", ")", "=", ";", ":", "/", "~"];

function generatePassword() {

    //User prompted for length of password
var length = window.prompt("Please choose a number between 8-128 characters");
console.log("A length was chosen");
    // Lowercase
var confirmLower = window.confirm("Would like to include lower case letters?");
console.log("Lowercase Letters Selected");
        // Uppercase
var confirmUpper = window.confirm("Would you like to include capital letters?");
console.log("Capital Letters Selected");
            // Numbers
var confirmNumber = window.confirm("Would you like to include numbers?");
console.log("Numbers Selected");
                    // Special Characters
var confirmSpec = window.confirm("Would you like to include special letters / symbols?");
console.log("Symbols and/or Special Character Selected");
var makepwd = [];

if (length <8) {
    window.alert("Please try again. This is too short");
} else if (length > 128) {
    window.alert("Please try again. This is too long");
} else 

if (confirmLower === true) {
    makepwd = makepwd.concat(lowerCase);
}
if (confirmUpper === true) {
    makepwd = makepwd.concat(upperCase);
}
if (confirmNumber === true) {
    makepwd = makepwd.concat(numbers);
}
if (confirmSpec === true) {
    makepwd = makepwd.concat(special);
    }

if (confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSpec === false) {
        window.alert("You must confirm whether or not you want to include the selections above");
    }
        console.log(makepwd);

var generateRandom = [];
for(var i = 0; i < length; i++) {
    var random = makepwd[Math.floor(Math.random() * makepwd.length)];
    console.log();
    generateRandom.push(random);
}
        return generateRandom.join('');
}


// Write password to the #password input
    function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);