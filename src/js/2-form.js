document.addEventListener('DOMContentLoaded', function () {
  const feedback = localStorage.getItem('feedback-form-state');
  if (feedback) {
    const formData = JSON.parse(feedback);

    document.querySelector('input').value = formData.email;
    document.querySelector('textarea').value = formData.message;
  }
});

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onChangeForm);
form.addEventListener('submit', onSubmitForm);

let email = '';
let message = '';

function onChangeForm(event) {
  if (event.target.nodeName === 'INPUT') {
    email = `${event.target.value}`;
    message = document.querySelector('textarea').value;
  } else if (event.target.nodeName === 'TEXTAREA') {
    email = document.querySelector('input').value;
    message = `${event.target.value}`;
  }

  const data = {
    email: email.trim(),
    message: message.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSubmitForm(event) {
  event.preventDefault();

  const emailValue = event.target.elements.email.value.trim();
  const messageValue = event.target.elements.message.value.trim();

  if (emailValue && messageValue) {
    const inputValues = {
      email: emailValue,
      message: messageValue,
    };

    console.log(inputValues);

    localStorage.removeItem('feedback-form-state');

    document.querySelector('input').value = '';
    document.querySelector('textarea').value = '';
  }
}
