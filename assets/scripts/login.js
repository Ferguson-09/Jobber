'use strict';

// Store login credentials in localStorage
localStorage.setItem("email", "ivan@gmail.com");
localStorage.setItem("password", "1234");

// Get form elements
const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

// Login form submit event
loginForm.addEventListener("submit", function (event) {
    // Prevent page refresh
    event.preventDefault();

    // Get stored credentials
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Get input values
    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    // Check credentials
    if (
        enteredEmail === storedEmail &&
        enteredPassword === storedPassword
    ) {
        // Redirect to home page
        window.location.href = "main.html";
    } else {
        // Show error message
        errorMessage.textContent = "Incorrect email or password";
    }
});