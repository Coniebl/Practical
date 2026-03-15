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