
window.onload = function(){
    let currentId = localStorage.getItem('loggedInUserId');
    if(!currentId){
        alert('Access denied, plz signup first');
        window.location.href = './index.html';
    }
    
    // Page load hote hi naam dikhane ke liye yahan bhi activeUser nikalna hoga
    let getData = JSON.parse(localStorage.getItem('users')) || [];
    let activeUser = getData.find((user) => user.id == currentId);
    if(activeUser) {
        document.getElementById('heading').innerHTML = `Welcome ${activeUser.userName}`;
    }
}

let btn = document.getElementById('btn');

function logouting(){
    let currentId = localStorage.getItem('loggedInUserId');
    let getData = JSON.parse(localStorage.getItem('users')) || [];
    let activeUser = getData.find((user) => user.id == currentId);

    if(activeUser){
        // Remove from main list
        let updateUsers = getData.filter((use) => use.id != currentId);
        localStorage.setItem('users', JSON.stringify(updateUsers));
        
        // Alert pehle dikhayein kyunki bad mein data delete ho jayega
        alert(`${activeUser.userName}, your account is deleted and you are logged out`);
    }

    // Clear session
    localStorage.removeItem('loggedInUserId');
    window.location.href = 'signIn.html';
}

btn.addEventListener('click', logouting);
