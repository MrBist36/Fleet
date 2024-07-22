//LOG IN BUTTON
let logbutton=document.getElementById('loginbutton');
console.log(logbutton)
logbutton.addEventListener('click',logIn)
function logIn() {
    window.location='app/login.html'
}

//SIGN IN BUTTON
let signinbutton=document.getElementById('registerbutton');
console.log(signinbutton)
signinbutton.addEventListener('click', signIn)
function signIn() {
    window.location='app/register.html'
}