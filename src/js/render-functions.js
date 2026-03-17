// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



function imageTemplate(image) {
  return `<li class="gallery-item">
    <a href="${image.largeImageURL}" class="gallery-link">
        <div class="gallery-img-wrapper">
          <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
        </div>
        <div class="gallery-info">
          <div class="gallery-stat">
            <span class="gallery-stat-label">Likes</span>
            <p class="gallery-stat-value">${image.likes}</p>
          </div>
          <div class="gallery-stat">
            <span class="gallery-stat-label">Views</span>
            <p class="gallery-stat-value">${image.views}</p>
          </div>
          <div class="gallery-stat">
            <span class="gallery-stat-label">Comments</span>
            <p class="gallery-stat-value">${image.comments}</p>
          </div>
          <div class="gallery-stat">
            <span class="gallery-stat-label">Downloads</span>
            <p class="gallery-stat-value">${image.downloads}</p>
          </div>
        </div>
    </a>
  </li>`;
}

export function imagesTemplate(images) {
  return images.map(imageTemplate).join("");
}

export function initLightbox() {
  let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
}

