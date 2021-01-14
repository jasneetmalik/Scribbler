var signUpModal = document.getElementById('signUpModal');
var signInModal = document.getElementById('signInModal');
var signInBtn = document.getElementById('signInBtn');
var signUpBtn = document.getElementById('signUpBtn');
var closeSignUp = document.getElementById('closeSignUp');


function showSignUpModal() {
    signUpModal.style.display = 'block';
}

function showSignInModal() {
    signInModal.style.display = 'block';
}

function hideSignUpModal() {
    signUpModal.style.display = 'none';
}

function hideSignInModal() {
    signInModal.style.display = 'none';
}

function redirect() {
    hideSignInModal();
    showSignUpModal();
}
