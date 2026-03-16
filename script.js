// Fill metadata fields
document.getElementById('pc-reg').value = navigator.platform;
document.getElementById('pc-login').value = navigator.platform;
document.getElementById('time-reg').value = new Date().toLocaleString();
document.getElementById('time-login').value = new Date().toLocaleString();

// Toggle between Register and Login
function toggleForm() {
    const regBox = document.getElementById('register-box');
    const loginBox = document.getElementById('login-box');
    
    regBox.classList.toggle('hidden');
    loginBox.classList.toggle('hidden');
}

// Handle Registration Submission
document.getElementById('regForm').addEventListener('submit', function(event) {
    // Prevent the page from reloading immediately (which causes the white screen)
    event.preventDefault();
    
    // Simulate form submission delay then switch to login
    setTimeout(() => {
        toggleForm();
        alert("Registration submitted! Please login.");
    }, 500);
});

// Handle Login Submission and Notification
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const status = document.getElementById('status-message');
    // Display the specific requested message
    status.innerText = "login ad email notification sent";
});