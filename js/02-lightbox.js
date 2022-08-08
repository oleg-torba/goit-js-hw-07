import { galleryItems } from "./gallery-items.js";

const galleryBox = document.querySelector(".gallery");
const galleryList = createGalleryLightBox(galleryItems);
galleryBox.insertAdjacentHTML("beforeend", galleryList);

function createGalleryLightBox(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

const GalleryLightBox = new SimpleLightBox(".gallery a", {
  overlayOpacity: 0.5,
  captionDelay: 250,

  captionsData: "alt",
  captionPosition: "bottom",

  animationSpeed: 250,

  enableKeyboard: true,

  disableRightClick: true,
  disableScroll: false,
  alertError: true,
  alertErrorMessage: "Image not found, next image will be loaded",
  additionalHtml: false,
});
