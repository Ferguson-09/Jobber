'use strict';

// Store login credentials in localStorage
localStorage.setItem("username", "ivan");
localStorage.setItem("password", "1234");

// Get form elements
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

// Login form submit event
loginForm.addEventListener("submit", function (event) {
    // Prevent page refresh
    event.preventDefault();

    // Get stored credentials
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Get input values
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Check credentials
    if (
        enteredUsername === storedUsername &&
        enteredPassword === storedPassword
    ) {
        // Redirect to home page
        window.location.href = "home.html";
    } else {
        // Show error message
        errorMessage.textContent = "Incorrect username or password";
    }
});