const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

// console.log(inputEl.value.length);

function onInputBlur(event) {
  if (inputEl.value.length === 6) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
