
function setUserData(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password); 
    console.log('User data stored:', { username, password }); 
}

function getUserData() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    console.log('User data retrieved:', { username, password }); 
    return { username, password };
}

document.getElementById('show-signup').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-form-container').style.display = 'none';
    document.getElementById('signup-form-container').style.display = 'block';
    console.log('Switched to signup form'); 
});


document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signup-form-container').style.display = 'none';
    document.getElementById('login-form-container').style.display = 'block';
    console.log('Switched to login form'); 
});


document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    console.log('Login attempt:', { username, password }); 

    const userData = getUserData();

    if (username === userData.username && password === userData.password) {
       
        window.location.href = 'index.html';
        console.log('Login successful'); 
    } else {
       
        alert('Invalid username or password. Please try again.');
        console.log('Login failed: Invalid credentials'); 
    }
});


document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    const errorDiv = document.getElementById('signup-error');

    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match. Please try again.';
        console.log('Signup failed: Passwords do not match'); 
        return;
    }

    if (username && email && password) {
        setUserData(username, password);
        alert('Signup successful! You can now log in.');
        document.getElementById('signup-form-container').style.display = 'none';
        document.getElementById('login-form-container').style.display = 'block';
        errorDiv.textContent = ''; 
        console.log('Signup successful'); 
    } else {
        errorDiv.textContent = 'Please fill in all fields.';
        console.log('Signup failed: Incomplete fields'); 
    }
});
