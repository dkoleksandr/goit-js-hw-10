import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delay = event.target[0].value;
  form.reset();
  
  if (event.target.elements.state.value === 'rejected') {
    return Promise.reject(
      iziToast.show({
        timeout: delay,
        message: `❌ Rejected promise in ${delay}ms`,
        color: 'red',
        position: 'topRight',
      })
    );
  }

  return Promise.resolve(
    iziToast.show({
      timeout: delay,
      message: `✅ Fulfilled promise in ${delay}ms`,
      color: 'green',
      position: 'topRight',
    })
  );

}
