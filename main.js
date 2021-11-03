var strength = 0

function checkNumber(password){
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
      return true;
    }
    else return false;
  }
}

function checkLetter(password){
  for (var i=0;i<password.length;i++){

  }
}

function checkSymbol(password){

}

function checkCharacters(password){
  if (password.length >= 8){
    return true
  }
}

function checkCommon(password){

}

function displayStrength(){
  password = document.getElementById("Password").value;
  if (checkNumber){

  };
  checkLetter;
  checkSymbol;
  checkCharacters;
  checkCommon;
}
