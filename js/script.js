
// Get btn and add event listener
document.getElementById('submit-btn').addEventListener('click', function () {
    // get email input field
    const userEmail = document.getElementById('email');
    // get email field value
    const email = userEmail.value;
    // get password input field
    const userPassword = document.getElementById('password');
    // get password field value
    const password = userPassword.value;

    if (email === 'user@email.com' && password === 'user') {
        window.location.href = 'bank.html';
    } else {
        alert('Invalid User!');
    }

});