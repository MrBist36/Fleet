import { request } from './apiHandler.js'; // Ensure the path and extension are correct

// Define the functions before adding event listeners
function homeReturn() {
    location.href = '../index.html';
}

async function loginFormHandler(event) {
    event.preventDefault();
    const LOGIN_URL = "https://reqres.in/api/login";

    const emailid = document.getElementById('email').value.trim();
    const validpassword = document.getElementById('pass').value.trim();

    console.log('Email:', emailid); // Debugging log
    console.log('Password:', validpassword); // Debugging log

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
        try {
            let response = await request(LOGIN_URL, "POST", { email: emailid, password: validpassword });

            console.log('Response:', response); // Debugging log

            if (response.error) {
                throw new Error(response.message);
            }

            // Check if the response has a token, indicating a successful login
            if (response.data && response.data.token) {
                localStorage.setItem("loginToken", response.data.token);
                location.href = "../index.html";
            } else {
                throw new Error("Invalid login credentials");
            }
        } catch (error) {
            alert(error.message);
        }
    }
}

// Add event listeners after the function definitions
document.getElementById('redirecthome').addEventListener('click', homeReturn);
document.getElementById('loginForm').addEventListener('submit', loginFormHandler);
