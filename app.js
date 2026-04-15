

let btn = document.getElementById('btn');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirmPassword');
function signUp(){
    let userName = nameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;
    // basic validation 
    if(!userName || !email || !password || !confirmPassword){
        alert('plz fill in all fields');
        return
    }
    // password comparison 
    if(password !== confirmPassword){
        alert('password does not match');
        return
    }
    // get users from local storage 
    let users = JSON.parse(localStorage.getItem('users')) || [];

    let isEmailExisted = users.some((require)=>{
        return require.email == email
    })
    // check if email already exists 
    if(isEmailExisted){
        alert('Account already exists with this email');
        return
    }
    // if accont already not exist than create newUser 
    // we can use here enhanced object literals also
    let newUser = {
       userName,
       email,
       password,
       confirmPassword
    };
    users.push(newUser);
    users = JSON.stringify(users);
    localStorage.setItem('users',users);

    alert('Accont created successfully');

    // calling clearInput function 
    clearInput()
}

btn.addEventListener('click',signUp)
// clearInput function 
function clearInput(){
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
}