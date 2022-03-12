// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// PASWORD LENGTH FUNCTION
function passwordLength() {
    var length = "";
  
    while (length === "" || length === null) {
      length = prompt("Choose length of password between 8 and 128");
    }
  
    console.log("Your password length is " + length);
// var promptLength = window.prompt('Choose length of password');

    if (length < 8 || length > 128 || isNaN(length)) {
        window.alert("You need to provide a valid answer! Please try again.");
        return passwordLength();
    }
    return length;
}


// PASSWORD LOWERCASE VALUES
function passwordLowercase() {
    var lwrcase = "";

    lwrcase = prompt("Add lowercase? Type 'yes' or 'no'")
    lwrcase = lwrcase.toLowerCase();
  
    // if player picks "yes" confirm then stop the loop
    if (lwrcase === "yes") {
        return true
    }

    // if no (true)
    else if (lwrcase === "no") {
        return false;
    }

    else {
        window.alert("You need to provide a valid answer! Please try again.");
        return passwordLowercase();
    }
}


// PASSWORD UPPERCASE VALUES
function passwordUppercase() {
    var uprcase = "";

    uprcase = prompt("Add uppercase? Type 'yes' or 'no'")
    uprcase = uprcase.toLowerCase();
  
    // if player picks "yes" confirm then stop the loop
    if (uprcase === "yes") {
        return true
    }

    // if no (true)
    else if (uprcase === "no") {
        return false;
    }

    else {
        window.alert("You need to provide a valid answer! Please try again.");
        return passwordUppercase();
    }
}

// PASSWORD NUMBER VALUES
function passwordNumbers() {
    var numbers = "";

    numbers = prompt("Add numbers? Type 'yes' or 'no'")
    numbers = numbers.toLowerCase();
  
    // if player picks "yes" confirm then stop the loop
    if (numbers === "yes") {
        return true
    }

    // if no (true)
    else if (numbers === "no") {
        return false;
    }

    else {
        window.alert("You need to provide a valid answer! Please try again.");
        return passwordNumbers();
    }
}

// PASSWORD SYMBOL VALUES
function passwordSymbols() {
    var symbols = "";

    symbols = prompt("Add symbols? Type 'yes' or 'no'")
    symbols = symbols.toLowerCase();
  
    // if player picks "yes" confirm then stop the loop
    if (symbols === "yes") {
        return true
    }

    // if no (true)
    else if (symbols === "no") {
        return false;
    }

    else {
        window.alert("You need to provide a valid answer! Please try again.");
        return passwordSymbols();
    }
}


// PASSWORD GENERATOR FUNCTION
function generatePassword() {
    var chars = "";
    var pwdLength = passwordLength();
    var password = "";

    var containLowercase = passwordLowercase();
    var containUppercase = passwordUppercase();
    var containNumber = passwordNumbers();
    var containSymbol = passwordSymbols();

    if (containLowercase) {
        var lwrchars = "abcdefghijklmnopqrstuvwxyz";
        chars = chars + lwrchars;
    }

    if (containUppercase) {
        var uprchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        chars = chars + uprchars;
    }

    if (containNumber) {
        var nmrchars = "0123456789"
        chars = chars + nmrchars;
    }

    if (containSymbol) {
        var smbchars = "!#$%&'()*+,-./:;<=>?@^_`{|}~";
        chars = chars + smbchars;
    }

    if (containLowercase || containUppercase || containNumber || containSymbol) {
        for (var i = 0; i <= pwdLength; i++) {
            var rdmNbr = Math.floor(Math.random() * chars.length);
            password = password + chars.substring(rdmNbr, rdmNbr + 1);
        }
    return password;
    }

    else {
        window.alert("You need to select at least one character option! Try again.");
        return generatePassword();
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);