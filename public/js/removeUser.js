

function removeUser(user) {
  removeUserFromUserList(user);
  removeUserFromPlayground(user);
  removeUserFromArray(user);
  
}

function removeUserFromArray(user){
   currentPlayers = currentPlayers.filter(currentUser => {
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