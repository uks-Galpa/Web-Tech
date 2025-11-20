function validateForm(event) {
    event.preventDefault();

    const pass = event.target.pass.value;
    const uname = event.target.uname.value;
    const email = event.target.email.value;

    if (pass === "" || uname === "" || email === "") {
        alert("Fields Can no be empty!");
        return false;
    }

    if (pass.length < 6) {
        alert("Password must have at least 6 characters!");
        return false;
    }
    

    if (!email.includes('@') || !email.includes('.')) {
        alert("Invalid Email!");
        return false;
    }

    return true;
}
