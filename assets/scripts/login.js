'use strict';

// Store login credentials in localStorage
localStorage.setItem("email", "jobber@gmail.com");
localStorage.setItem("password", "1234");

// Get form elements
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");
const submitBtn = document.querySelector('.login-btn')

// Login form submit event
loginForm.addEventListener("submit", function (a) {
    // Prevent page refresh
    a.preventDefault();

    // Get stored credentials
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Get input values
    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    // Check credentials
    if(enteredEmail !== storedEmail){
        errorMessage.textContent = "Incorrect email";
    } else if(passwordInput.value !== storedPassword){
        errorMessage.textContent = "Incorrect password";
    } else {
    window.location.href = "main.html";
    }
});