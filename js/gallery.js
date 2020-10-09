import galleryItems from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  lightBoxOverlay: document.querySelector('.lightbox__overlay'),
  lightBoxImg: document.querySelector('.lightbox__image'),
  btnClose: document.querySelector('[data-action="close-lightbox"]'),
};

const imagesList = galleryItems
  .map(element => {
    const { preview, original, description } = element;

    return `<li class="gallery__item">
             <a class="gallery__link" href="">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
             </a>
           </li>`;
  })
  .join('');

refs.gallery.insertAdjacentHTML('afterbegin', imagesList);

refs.gallery.addEventListener('click', onOpenModal);
refs.btnClose.addEventListener("click", onCloseModal);
refs.lightBoxOverlay.addEventListener("click", onCloseModal);

function onOpenModal(e) {
  // console.log(e);
  window.addEventListener('keydown', onEscKeyPress);
  e.preventDefault();
  
  if (e.target.nodeName !== "IMG") {
    return
  };

  refs.modal.classList.add("is-open");
  refs.lightBoxImg.src = e.target.dataset.source;
  refs.lightBoxImg.alt = e.target.alt;
}

function onCloseModal (e) {
    // console.log(e);
  window.removeEventListener('keydown', onEscKeyPress);
  refs.modal.classList.remove("is-open");
  refs.lightBoxImg.alt = '';
  refs.lightBoxImg.src = '';
}

function onEscKeyPress (e) {
  // console.log(e);
  const isEscKey = e.code === "Escape";

  if (isEscKey) {
    onCloseModal();
  }
}