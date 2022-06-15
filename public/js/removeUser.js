function removeUser(user) {
  removeUserfromUserList(user);
  //removeUserfromPlayground(user);
}

function removeUserfromUserList(user) {
  const userLiElement = document.getElementById(`user${user}`);
  userLiElement.remove();
}

function removeUserfromPlayground(user) {
  //TO-DO
}

export {removeUser};