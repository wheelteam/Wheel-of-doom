const btn = document.getElementById('addPlayer');

btn.addEventListener('click', function handleClick(event) {
  
  event.preventDefault();

  const firstNameInput = document.getElementById('writeNewPlayer').value;
  
  addUserToList(firstNameInput);

  
  firstNameInput.value = '';
});

