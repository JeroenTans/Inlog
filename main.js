
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

/*
<div>
<h1 id="header">Registreren</h1>
<br/>
<form action="">
<label for="input-username">Gebruikersnaam:</label>
<br/>
<input type="text" id="input-username" name="username" />
<br/>
<span class="form-warning" id="username-warning"></span>

    const usernameInput = document.getElementById("input-username");
    const warningUsername = document.getElementById("username-warning");
    usernameInput.addEventListener("keyup", checkUsername);
    function checkUsername (e) {
    warningUsername.textcontent = "HALLOOOO";


    function checkUsername (e) {
    if (e.target.value.includes("@")) {
        warningUsername.textContent = "Gebruikersnaam mag geen @ bevatten";
    } else {
        warningUsername.textContent = "";
    }
}*/