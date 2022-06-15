const btn = document.getElementById('addPlayer');

btn.addEventListener('click', function handleClick(event) {
  
  event.preventDefault();

  const firstNameInput = document.getElementById('writeNewPlayer');
  let name = firstNameInput.value;
  //addUserToList(name);
  firstNameInput.value = '';
  console.log(firstNameInput);
});




