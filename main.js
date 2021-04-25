
const userName = document.getElementById("username");
const userNameWarning = document.getElementById("username-warning");
const password = document.getElementById("password")
const passwordWarning = document.getElementById("password-warning")


userName.addEventListener("keyup", checkUserName);
password.addEventListener("keyup", checkPassword);

function checkUserName (e){
    if (e.target.value.includes("@")){
        userNameWarning.textContent = "De username mag geen @ bevatten."
    } else {
        userNameWarning.textContent = "";
    }
}

function checkPassword (e) {
    if (e.target.value.length < 6) {
        passwordWarning.textContent = "Het wachtwoord moet minimaal zes tekens bevatten."
    } else {
        passwordWarning.textContent = "";
    }
}

