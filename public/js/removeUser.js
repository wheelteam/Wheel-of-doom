import {currentPlayers} from "./addUserToList.js"

function removeUser(user) {
  removeUserFromUserList(user);
  // removeUserFromPlayground(user);
  removeUserFromArray(user);
  console.log(currentPlayers);
}

function removeUserFromArray(user){
  let currentPlayers = currentPlayers.filter(currentUser => {
    return currentUser !== user;
  });
}

function removeUserFromUserList(user) {
  const userLiElement = document.getElementById(`user${user}`);
  userLiElement.remove();
}

function removeUserFromPlayground(user) {
  const player = document.getElementById(`player${user}`);
  player.remove();
}




export {removeUser};