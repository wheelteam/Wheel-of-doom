function addUsersToList(user){
    const userList = document.getElementById("users");
    userList.appendChild(addUserModule());
}

function addUserModule(user){
    const module = "<li><input type='text'><button type='submit'></button></li>";
}