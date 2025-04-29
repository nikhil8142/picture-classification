document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple local storage example (not secure, just for demonstration)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Registration successful!');
    window.location.href = 'login.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check against local storage
    if (localStorage.getItem('username') === username && localStorage.getItem('password') === password) {
        alert('Login successful!');
        // Redirect to main page or dashboard
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials!');
    }
});
