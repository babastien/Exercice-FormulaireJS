// dans le champ nom il aimerai qu'ont demande a l'utilisateur de rentrer la premiere lettre de son nom en majuscule,
// s'il ne le fait pas faudra l'avertir
// dans le champs mot de passe , il faudra au minimum 8 caractère, une majuscule, et un chiffre , sinon il faudra l'avertire
// dans le champs adresse email il faut verifier si l'adresse email a 1 "@" et un "." , s'il en a pas il faudra l'avertir
// Si tout les champs son bon le client aimerai que vous afficher le message 'Bienvenue l'artiste'


// ---------- 1ERE METHODE ----------

// document.querySelector(".form").addEventListener("submit", function(create) {
//     create.preventDefault();

//     let nameValue = document.querySelector(".name").value;
//     let passwordValue = document.querySelector(".password").value;
//     let emailValue = document.querySelector(".email").value;

//     let divError = document.querySelector(".error");
//     let divWelcome = document.querySelector(".welcome");

//     if (nameValue == "" && passwordValue == "" && emailValue == "") {
//         divError.innerHTML = "Veuillez entrer vos informations";
//         return;

//     } else if (nameValue.charAt(0) !== nameValue.charAt(0).toUpperCase()) {
//         divError.innerHTML = "Veuillez inscrire la première lettre de votre nom en majuscule";
//         return;

//     } else if (passwordValue.length < 8 || !/[0-9]/.test(passwordValue) || !/[A-Z]/.test(passwordValue)) {
//         divError.innerHTML = "Votre mot de passe doit contenir 8 caractères minimum, une majuscule et un chiffre";
//         return;

//     } else if (emailValue.indexOf('.') === -1 || emailValue.indexOf('@') === -1) {
//         divError.innerHTML = "Vérifiez que votre email contient bien un point et un @";
//         return;

//     } else {
//         divError.innerHTML = "";
//         divWelcome.innerHTML = "Bienvenue l'artiste !";
// }});

// ---------- SUITE ----------

let registerForm = document.querySelector(".register-form");
let loginForm = document.querySelector(".login-form");

document.querySelector(".sign-in").addEventListener("click", () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
})

document.querySelector(".create-an-account").addEventListener("click", () => {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
})

// ---------- 2EME METHODE ---------- EVENTLISTENER CHANGE

document.querySelector(".form").addEventListener("submit", function(create) {
    create.preventDefault();
    if (nameInput.value == "" && passwordInput.value == "" && emailInput.value == "") {
        divError.innerHTML = "Veuillez entrer vos informations";
        return;
    } else if (nameValide === true && passwordValide === true && emailValide === true) {
        divError.innerHTML = "";
        divWelcome.innerHTML = "Bienvenue l'artiste !";
    }
});

let nameInput = document.querySelector(".name");
let passwordInput = document.querySelector(".password");
let emailInput = document.querySelector(".email");

let divError = document.querySelector(".error");
let divWelcome = document.querySelector(".welcome");

let nameError = document.querySelector(".name-error");
let passwordError = document.querySelector(".password-error");
let emailError = document.querySelector(".email-error");

let nameValide = false;
let passwordValide = false;
let emailValide = false;

nameInput.addEventListener("change", function () {
    console.log(nameInput.value)
    if (nameInput.value.charAt(0) !== nameInput.value.charAt(0).toUpperCase() || nameInput.value == "") {
        nameError.innerHTML = "Veuillez inscrire la première lettre de votre nom en majuscule";
        nameError.style.color = "red";
        nameInput.style.border = "1px solid red";
        nameValide = false;
        return;
    } else if (nameInput.value.charAt(0) == nameInput.value.charAt(0).toUpperCase()) {
        nameError.innerHTML = "Nom valide";
        nameError.style.color = "green";
        nameInput.style.border = "1px solid green";
        nameValide = true;
    }
});

passwordInput.addEventListener("change", function () {
    if (passwordInput.value.length < 8 || !/[0-9]/.test(passwordInput.value) || !/[A-Z]/.test(passwordInput.value) || passwordInput.value == "") {
        passwordError.innerHTML = "Votre mot de passe doit contenir 8 caractères minimum, une majuscule et un chiffre";
        passwordError.style.color = "red";
        passwordInput.style.border = "1px solid red";
        passwordValide = false;
        return;
    } else if (passwordInput.value.length >= 8 || /[0-9]/.test(passwordInput.value) || /[A-Z]/.test(passwordInput.value)) {
        passwordError.innerHTML = "Mot de passe valide";
        passwordError.style.color = "green";
        passwordInput.style.border = "1px solid green";
        passwordValide = true;
    }
});

emailInput.addEventListener("change", function () {
    if (emailInput.value.indexOf('.') === -1 || emailInput.value.indexOf('@') === -1 || emailInput.value == "") {
        emailError.innerHTML = 'Vérifiez que votre email contient un "." et un "@"';
        emailError.style.color = "red";
        emailInput.style.border = "1px solid red";
        emailValide = false;
        return;
    } else if (emailInput.value.indexOf('.') === 1 || emailInput.value.indexOf('@') === 1) {
        emailError.innerHTML = "Adresse email valide";
        emailError.style.color = "green";
        emailInput.style.border = "1px solid green";
        emailValide = true;
    }
});