function removeUser(user) {
  removeUserFromUserList(user);
  removeUserFromPlayground(user);
  //removeUserFromArray(user);
}

function removeUserFromArray(user){
  //TO DO
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