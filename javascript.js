const submitButton = document.querySelector('button[type="submit"]');
const password = document.querySelector('input#password');
const confirmPassword = document.querySelector('input#confirmPassword');
const matchError = document.querySelector('input#password+p')

console.log(password.value);
console.log(confirmPassword.value);

function checkPasswordsMatch(){
    if(confirmPassword.value !== password.value){
        matchError.textContent = '*Passwords do not match';
        console.log(password.value);
        console.log(confirmPassword.value);
        return false;
    }
    else{
        matchError.textContent = '';
        console.log(password.value);
        console.log(confirmPassword.value);
        return true;
    }
}