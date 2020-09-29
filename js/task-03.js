const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// console.log(images);

const gallery = document.querySelector('#gallery');
gallery.classList.add('gallery');

const imagesList = images.map(image => {
  const galleryItemEl = document.createElement('li');

  galleryItemEl.insertAdjacentHTML(
    'beforeend',
    `<img class='gallery-img' src="${image.url}" alt="${image.alt}">`,
  );

  galleryItemEl.classList.add('gallery-item');
  return galleryItemEl;
});

gallery.append(...imagesList);
console.log(gallery);
