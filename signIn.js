
function signIn() {
    let email = emailInput.value;
    let password = passwordInput.value;

    // Fix 1: Added 'return' to password validation
    if (!email) {
        alert('email is required');
        return;
    }
    if (!password) {
        alert('password is required');
        return; 
    }

    let getData = localStorage.getItem('users') || '[]';
    let jsonData = JSON.parse(getData);

    let requiredUser = jsonData.find((one) => {
        return one.email == email && one.password == password;
    });

    if (requiredUser) {
        localStorage.setItem('loggedInUserId', requiredUser.id);
        alert('Login successful!');
        window.location.href = './home.html';
    } else {
        alert('Invalid email or password');
        // Fix 2: Only clear if login fails
        clearInput(); 
    }
}
