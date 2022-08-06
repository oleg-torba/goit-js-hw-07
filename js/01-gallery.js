import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");
const galleryList = createGalleryList(galleryItems);
galleryBox.insertAdjacentHTML("beforeend", galleryList);

function createGalleryList(galleryItems) {
  return galleryItems
  .map(({ preview, original, description }) => {
    return `
        <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  }).join("")
}
