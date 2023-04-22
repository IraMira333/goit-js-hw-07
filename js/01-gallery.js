import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//<li><img src="" alt=""></li>

const containerGalleryImages = document.querySelector(".gallery");
const imagesMarkup = creatFotoCardsMurkup(galleryItems);

containerGalleryImages.insertAdjacentHTML("beforeend", imagesMarkup);

containerGalleryImages.addEventListener("click", onImageClick);

function creatFotoCardsMurkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
      `;
    })
    .join("");
}
//console.log(creatFotoCardsMurkup(galleryItems));
function onImageClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) return;
  const bigImage = evt.target.dataset.source;
  const bigImageShow = basicLightbox.create(
    `<img src="${bigImage}" width="800" height="600">`
  );
  bigImageShow.show();
  console.log(bigImageShow.element());
  bigImageShow.element().addEventListener("keydown", onImageEscClose);
}

function onImageEscClose(e) {
  console.log(`Hf,jnftn`);
  if (e.code === "Escape") {
    bigImageShow.close();
    bigImageShow.element().removeEventListener("keydown", onImageEscClose);
  }
}
//bigImageShow.element().addEventListener("keydown", onImageEscClose);
