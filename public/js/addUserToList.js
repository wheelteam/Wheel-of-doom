addUserToList('MIguel');
addUserToList('SILVIA');
addUserToList('sergio');

function addUserToList(user) {
    user = capitalizeUser(user);
    const userList = document.getElementById("users");
    addUserModule(user);   
}

function addUserModule(user) {
    const userListLiElement = document.createElement('li');
    userListLiElement.id = `user${user}`;

    const userInput = document.createElement('input');
    userInput.type = 'text';
    userInput.placeholder = user;
    userInput.className = 'user-module-input';
    
    const removeUserButton = document.createElement('button');
    removeUserButton.type = 'button';
    removeUserButton.id = `remove${user}`;
    removeUserButton.innerHTML = 'x';
    removeUserButton.className = 'remove-user-button';
    removeUserButton.onclick = () => removeUserfromUserList(user);

    const userModulesList = document.getElementById('users-modules-list');
    userModulesList.appendChild(userListLiElement);
    userListLiElement.appendChild(userInput);
    userListLiElement.appendChild(removeUserButton);
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
