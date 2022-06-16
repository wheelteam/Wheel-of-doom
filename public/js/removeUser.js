function removeUser(user) {
  removeUserfromUserList(user);
  removeUserfromPlayground(user);
}

function removeUserfromUserList(user) {
  const userLiElement = document.getElementById(`user${user}`);
  userLiElement.remove();
}

function removeUserfromPlayground(user) {
  const player = document.getElementById(`player${user}`);
  player.remove();
}

export {removeUser};