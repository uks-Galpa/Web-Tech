let virtualCount = 0;
let personCount = 0;

function validateForm(event) {
    event.preventDefault();

    const uname = document.getElementById("uname").value
    const email = document.getElementById("email").value
    const company = document.getElementById("company").value
    const attend = document.querySelector("input[name='attend']:checked");

    if (uname === "" || email === "") {
        alert("Fields cannot be empty");
        return;
    }

    if (uname.length < 6) {
        alert("Username must have at least 6 characters");
        return;
    }

    if (company.length > 100) {
        alert("Company cannot exceed 100 characters");
        return;
    }

    if (!attend) {
        alert("Please select attendance type");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Invalid Email");
        return;
    }

    if (attend.value === "Virtual") {
        virtualCount++;
    }

    if (attend.value === "In Person") {
        personCount++;
    }

    updateCounts();
    alert("Registration Successful");
    event.target.reset();
}

function updateCounts() {
    document.getElementById("virtualCount").innerHTML = virtualCount;
    document.getElementById("personCount").innerHTML = personCount;
}

function Show() {
    const box = document.getElementById("Registrants");
    box.style.display = "block";
}

function Hide() {
    const box = document.getElementById("Registrants");
    box.style.display = "none";
}
