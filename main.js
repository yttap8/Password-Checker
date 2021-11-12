var strength = 0;
var message = "Your Password Is:"

function checkNumber(password){
  let hasNumber = false;
  for (var i=0;i<password.length;i++){
    if (password[i] == "1"
        || password[i] == "2"
        || password[i] == "3"
        || password[i] == "4"
        || password[i] == "5"
        || password[i] == "6"
        || password[i] == "7"
        || password[i] == "8"
        || password[i] == "9"
        || password[i] == "0"){
      hasNumber = true;
    }
  }
  if (hasNumber == true){
    strength += 2;
  }
  else if (hasNumber == false){
    message += " missing number";
  }
}

function checkLetter(password){
  let hasLetter = false;
  for (var i=0;i<password.length;i++){
    if ((/[a-zA-z/]/).test(password)){
      hasLetter = true;
    }
  }
  if (hasLetter == true){
    strength += 2;
  }
  else if (hasLetter == false){
    message += " missing letter";
  }
}

function checkSymbol(password){
  let hasSpecial = false;
  for (var i=0;i<password.length;i++){
    if (password[i] == "!"
        || password[i] == "@"
        || password[i] == "#"
        || password[i] == "$"
        || password[i] == "%"
        || password[i] == "^"
        || password[i] == "&"
        || password[i] == "*"
        || password[i] == "("
        || password[i] == ")"
        || password[i] == "?"){
      hasSpecial = true;
    }
  }
    if (hasSpecial == true){
      strength +=2;
    }
    else if (hasSpecial == false){
      message += " missing special character";
    }
}

function checkCharacters(password){
  if (password.length >= 8){
    strength += 1;
  }
else message += " less than eight characters"
}

function checkCommon(password){
  let isCommon = false;
  if (password == "password"
      || password == "12345678"
      || password == "123456789"
      || password == "0123456789"
      || password == "passcode"
      ){
    isCommon = true;
    }
  if (isCommon == true){
    message += " common password";
    strength -= 2;
  }
}

function checkPassword(){
  var password = document.getElementById("Password").value;
  message = "Your Pasword Is:"
  strength = 0;
  checkNumber(password);
  checkLetter(password);
  checkSymbol(password);
  checkCharacters(password);
  checkCommon(password);
  if (strength == 0){
    message = "Please Enter a Password";
  }
  else if (strength == 2){
    message += " Very weak strength";
  }
  else if (strength == 2 || strength == 4 || strength == 6){
    message += " Weak strength";
  }
  else if (strength == 1 || strength == 3 || strength == 5){
    message += " Moderate strength";
  }
  else if (strength == 7){
    message += " Strong";
  }
  document.getElementById("Message").innerHTML = message;
}
