import { removeUser } from "./removeUser.js";


function addUserToList(user) {
    addUserModule(user);   
}

function addUserModule(user) {
    const userListLiElement = document.createElement('li');
    userListLiElement.id = `user${user}`;

    const userInput = document.createElement('input');
    userInput.type = 'text';
    userInput.placeholder = user;
    userInput.className = 'user-module-input';
    
    let removeUserButton = document.createElement('button');
    removeUserButton.type = 'button';
    removeUserButton.id = `remove${user}`;
    removeUserButton.innerHTML = 'x';
    removeUserButton.className = 'remove-user-button';
    removeUserButton.onclick = () => removeUser(user);

    const userModulesList = document.getElementById('users-modules-list');
    userModulesList.appendChild(userListLiElement);
    userListLiElement.appendChild(userInput);
    userListLiElement.appendChild(removeUserButton);
}

export {addUserToList};