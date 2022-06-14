addUsersToList('SUSANA');
addUsersToList('SILVIA');
addUsersToList('sergio');

function addUsersToList(user){
    user = capitalizeUser(user);
    const userList = document.getElementById("users");
    userList.innerHTML += addUserModule(user);
}

function addUserModule(user){
    const module = `<li>
                        <input type='text' placeholder='${user}'>
                        <button id='removeUserButton' type='submit'>x</button>
                    </li>`;
    return module;
}

function capitalizeUser(user) {
    user = user.toLowerCase();
    const firstLetter = user[0];
    console.log(firstLetter);
    const upperCase = firstLetter.toUpperCase();
    console.log(upperCase);
    const capitalizedUser = user.replace(firstLetter, upperCase);

    return capitalizedUser;
}