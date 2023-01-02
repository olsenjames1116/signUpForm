const submitButton = document.querySelector('button[type="submit"]');
const password = document.querySelector('input#password');
const confirmPassword = document.querySelector('input#confirmPassword');
const matchError = document.querySelector('input#password+p')

function checkPasswordsMatch(){
    if(confirmPassword.value !== password.value){
        matchError.textContent = '*Passwords do not match';
        confirmPassword.setAttribute('style','background-color: rgb(229, 155, 155);');
        password.setAttribute('style','background-color: rgb(229, 155, 155);');
        return false;
    }
    else{
        matchError.textContent = '';
        return true;
    }
}