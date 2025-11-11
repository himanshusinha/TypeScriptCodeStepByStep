"use strict";
function getInfo() {
    const nameInput = document.getElementById("name");
    const passwordInput = document.getElementById("password");
    const emailInput = document.getElementById("email");
    const name = nameInput.value;
    const password = passwordInput.value;
    const email = emailInput.value;
    console.log("Name:", name);
    console.log("Password:", password);
    console.log("Email:", email);
}
