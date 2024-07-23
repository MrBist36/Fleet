//FOR HIDING THE LOGIN AND REGISTER AFTER THE TOKEN IS RECEIVED
if (localStorage.getItem("loginToken")) {
    document.querySelector("#loginbutton").style.display = "none";
    document.querySelector("#registerbutton").style.display = "none";
    document.querySelector(".blog").style.display = "block";
    document.querySelector(".logout").style.display = "block";
} else {
    document.querySelector("#loginbutton").style.display = "block";
    document.querySelector("#registerbutton").style.display = "block";
    document.querySelector(".blog").style.display = "none";
    document.querySelector(".logout").style.display = "none";
}

//FOR HIDING THE LOGOUT AND BLOG BUTTON
document.querySelector('.logout').addEventListener('click', function () {
    localStorage.clear();
    location.reload()
});

//LOG IN BUTTON
let logbutton = document.getElementById('loginbutton');
console.log(logbutton)
logbutton.addEventListener('click', logIn)
function logIn() {
    console.log("click")
    window.location = 'app/login.html'
}

//SIGN IN BUTTON
let signinbutton = document.getElementById('registerbutton');
console.log(signinbutton)
signinbutton.addEventListener('click', signIn)
function signIn() {
    window.location = 'app/register.html'
}
