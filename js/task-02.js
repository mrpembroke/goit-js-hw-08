const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');
// console.log(list);

const ingredientsEl = ingredients.map(ingredient => {
  const listItemEl = document.createElement('li');
  listItemEl.textContent = ingredient;

  return listItemEl;
});

// console.log(ingredientsEl);

list.append(...ingredientsEl);
console.log(list);
