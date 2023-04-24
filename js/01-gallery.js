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

function onImageClick(evt) {
  evt.preventDefault();
  //if (!evt.target.classList.contains("gallery__image")) return;
  if (evt.target.nodeName !== "IMG") return;
  const bigImage = evt.target.dataset.source;
  const bigImageShow = basicLightbox.create(
    `
     <img src="${bigImage}" width="800" height="600">
  `,
    {
      onShow: () => {
        document.addEventListener("keydown", onImageEscClose);
      },
      onClose: () => {
        document.removeEventListener("keydown", onImageEscClose);
      },
    }
  );
  bigImageShow.show();
  console.log(bigImageShow.element());

  function onImageEscClose(e) {
    console.log(`Працює!!!`);
    if (e.code === "Escape") {
      bigImageShow.close();
    }
  }
}
