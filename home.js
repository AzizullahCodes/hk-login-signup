window.onload = function(){
    let currentId = localStorage.getItem('loggedInUserId');
    if(!currentId){
        alert('Access denied,plz signup first');
        window.location.href = './index.html'
    }
}


let btn = document.getElementById('btn');
function logouting(){
    let currentId = localStorage.getItem('loggedInUserId');
    console.log(currentId)
    let getData = JSON.parse(localStorage.getItem('users')) || '[]';
    console.log(getData);
    let activeUser = getData.find((user)=> user.id == currentId);
    console.log(activeUser);
    console.log(activeUser.id);
    
    
    if(activeUser){
        console.log(activeUser);
        let updateUsers = getData.filter((use)=> use.id != currentId);
        // store updated list in local storage 
        localStorage.setItem('users',JSON.stringify(updateUsers))
        document.getElementById('heading').innerHTML = `welcome ${activeUser.userName}`
    }
    // remove current loggedInUser
    localStorage.removeItem('loggedInUserId');
    alert(`${activeUser.userName}, you have been logged out`);

    // delete user
    
    // send user to signup page 
    window.location.href = 'signIn.html'
}

btn.addEventListener('click',logouting)