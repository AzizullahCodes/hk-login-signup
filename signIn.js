let btn = document.getElementById('btn');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');


function signIn(){
   let email = emailInput.value;
   let password = passwordInput.value;
//    basic validation 
if(!email){
    alert('email is required');
    return;
}
if(!password){
    alert('password is required')
}
// check whether user has an account 
let getData = localStorage.getItem('users') || '[]';
console.log(getData);
let jsonData = JSON.parse(getData);
let requiredUser = jsonData.find((one)=>{
    return one.email == email && one.password == password
})

if(requiredUser){
    console.log(requiredUser.id)
    // store only the id of the person who jsut loggedIn
    localStorage.setItem('loggedInUserId', requiredUser.id)
    alert('login successfull');
    
    window.location.href = './home.html'
    
}
else {
    alert('Invalid email or password')
}
// calling clearInput funciton 
clearInput()
}

btn.addEventListener('click',signIn);

// clearInput function 
function clearInput(){
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}