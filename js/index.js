const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('registerError');

    if (users.find(user => user.email === email)) {
        errorElement.textContent = 'Email already exists, please use a different one.';
        return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = 'login.html';
});
