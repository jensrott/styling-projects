// Show error message if input is empty and email is not correct formatted

const form = document.querySelector('form');
const first_name = document.getElementById('first-name');
const last_name = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', checkEmptyInput);

function checkEmptyInput(e) {
  e.preventDefault();
  const firstnameValue = first_name.value.trim();
	const lastnameValue = last_name.value.trim();
	const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  
  if(firstnameValue === '') {
    setError(first_name, "First name cannot be empty");
  } else {
    setSuccess(first_name);
  }

  if(lastnameValue === '') {
    setError(last_name, "Last name cannot be empty");
  } else {
    setSuccess(last_name);
  }

  if(emailValue === '') {
		setError(email, 'Email cannot be blank');
	} else if (!checkEmail(emailValue)) {
		setError(email, 'Not a valid email');
	} else {
		setSuccess(email);
  }
  
  if(passwordValue === '') {
		setError(password, 'Password cannot be blank');
	} else {
		setSuccess(password);
	}
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
	formControl.className = 'error';
	small.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
	formControl.className = 'success';
}
