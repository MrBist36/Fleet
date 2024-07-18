function formHandler(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneno').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/; 

    let errors = {};

    if (!name) {
        errors.name = 'Name is required.';
    }

    if (!email) {
        errors.email = 'Email is required.';
    } else if (!emailPattern.test(email)) {
        errors.email = 'Please enter a valid email address.';
    }

    if (!phoneNumber) {
        errors.phoneNumber = 'Phone Number is required.';
    } else if (!phonePattern.test(phoneNumber)) {
        errors.phoneNumber = 'Please enter a valid 10-digit phone number.';
    }

    if (!message) {
        errors.message = 'Message is required.';
    }

    
    document.getElementById('name').placeholder = '';
    document.getElementById('email').placeholder = '';
    document.getElementById('phoneno').placeholder = '';
    document.getElementById('message').placeholder = '';

    if (Object.keys(errors).length > 0) {
        
        if (errors.name) {
            document.getElementById('name').value = '';
            document.getElementById('name').placeholder = errors.name;
        }
        if (errors.email) {
            document.getElementById('email').value = '';
            document.getElementById('email').placeholder = errors.email;
        }
        if (errors.phoneNumber) {
            document.getElementById('phoneno').value = '';
            document.getElementById('phoneno').placeholder = errors.phoneNumber;
        }
        if (errors.message) {
            document.getElementById('message').value = '';
            document.getElementById('message').placeholder = errors.message;
        }
    } else {
       alert(
        JSON.stringify({
            name:name,
            email:email,
            phoneNumber:phoneno,
            message:message,
        })
       )
       document.getElementById("myform").reset();
    }
   
}
