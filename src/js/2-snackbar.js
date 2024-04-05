import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delay = event.target[0].value;
  const stateValue = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(delay);
      }
      reject(delay);
    }, delay);
  });

  form.reset();

  promise
    .then(delay =>
      iziToast.show({
        timeout: delay,
        message: `✅ Fulfilled promise in ${delay}ms`,
        color: 'green',
        position: 'topRight',
      })
    )
    .catch(delay =>
      iziToast.show({
        timeout: delay,
        message: `❌ Rejected promise in ${delay}ms`,
        color: 'red',
        position: 'topRight',
      })
    );
}
