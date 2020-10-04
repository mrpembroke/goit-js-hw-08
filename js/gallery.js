import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const lightBox = document.querySelector('.js-lightbox');
const lightBoxOverlay = document.querySelector('.lightbox__overlay');
const lightBoxImage = document.querySelector('.ightbox__image');
const btnClose = document.querySelector('button[data-action="close-lightbox"]');

// console.log(btnClose);

const imagesList = galleryItems
  .map(element => {
    return `<li class="gallery__item">
             <a class="gallery__link" href="">
                <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
             </a>
           </li>`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', imagesList);
