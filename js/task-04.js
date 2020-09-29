const value = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrValue = () => (value.textContent = counterValue -= 1);
const incrValue = () => (value.textContent = counterValue += 1);

decrement.addEventListener('click', decrValue);
increment.addEventListener('click', incrValue);
