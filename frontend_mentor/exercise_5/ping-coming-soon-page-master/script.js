const form = document.querySelector('form');
const email = document.getElementById('email');

const checkEmptyInput = event => {
  event.preventDefault();
  const emailValue = email.value.trim();
  if (emailValue === '') {
    setError('Email cannot be empty');
  } else if (!checkEmail(emailValue)) {
    setError('Email is not correct format');
  } else {
    setSucces('Email is correct format');
  }
};

form.addEventListener('submit', checkEmptyInput);

const checkEmail = email => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const setError = message => {
  const small = document.getElementById('small');
  small.classList.remove('hidden');
  small.classList.add('show');
  small.innerText = message;
};

const setSucces = message => {
  const small = document.getElementById('small');
  small.classList.remove('hidden');
  small.classList.add('show');
  small.innerText = message;
};
