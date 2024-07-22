//Return Home Button
function homeReturn(){
    location.href='../index.html';
}

async function loginFormHandler(event) {
    event.preventDefault();

    const emailid = document.getElementById('email').value.trim();
    const validpassword = document.getElementById('pass').value.trim();
    let data = {email: emailid, password: validpassword}
    console.log(data)

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errors = {};

    if (!emailid) {
        errors.emailid = 'Email is required.';
    } else if (!emailPattern.test(emailid)) {
        errors.emailid = 'Please enter a valid email address.';
    }

    if (!validpassword) {
        errors.validpassword = 'Enter the password';
    }

    document.getElementById('email').placeholder = '';
    document.getElementById('pass').placeholder = '';

    if (Object.keys(errors).length > 0) {
        if (errors.emailid) {
            document.getElementById('email').value = '';
            document.getElementById('email').placeholder = errors.emailid;
        }
        if (errors.validpassword) {
            document.getElementById('pass').value = '';
            document.getElementById('pass').placeholder = errors.validpassword;
        }
    } else {
        alert(
            JSON.stringify({
                email: emailid,
                pass: validpassword,
            })
        );
        document.querySelector("form.login").reset();
    }
//POST API
    let response = await fetch("https://reqres.in/api/login", {
        method: "post", 
        headers: {
          "Content-Type": "application/json"  
        },
        body: JSON.stringify(data)
    })
    let loginData = await response.json();
    console.log(loginData.token);

}