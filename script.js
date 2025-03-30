document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear error message
    document.getElementById('error-message').textContent = '';

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple form validation
    if (name === '' || email === '' || password === '') {
        document.getElementById('error-message').textContent = 'Please fill out all fields.';
        return;
    }

    // Simulate successful signup
    alert(Welcome, ${name}! You have successfully signed up.);

    // Reset the form
    document.getElementById('signup-form').reset();
});

function togglePassword() {
    const passwordField = document.getElementById('password');
    const showPassword = document.getElementById('show-password');
    if (showPassword.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}
