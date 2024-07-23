//Return Home Button
function homeReturn() {
    location.href = '../index.html';
}
//FORM VALIDATION

function signinFormHandler(event) {
    event.preventDefault();

    const userid = document.getElementById('username').value.trim();
    const emailid = document.getElementById('email').value.trim();
    const validpassword = document.getElementById('pass').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errors = {};
    if (!userid) {
        errors.userid = "User Name is required."
    }
    if (!emailid) {
        errors.emailid = 'Email is required.';
    } else if (!emailPattern.test(emailid)) {
        errors.emailid = 'Please enter a valid email address.';
    }

    if (!validpassword) {
        errors.validpassword = 'Enter the password';
    }

    document.getElementById('username').placeholder = '';
    document.getElementById('email').placeholder = '';
    document.getElementById('pass').placeholder = '';

    if (Object.keys(errors).length > 0) {

        if (errors.userid) {
            document.getElementById('username').value = '';
            document.getElementById('username').placeholder = errors.userid;
        }

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
                username: userid,
                email: emailid,
                pass: validpassword,
            })
        );
        document.querySelector("form.signin").reset();
    }
}