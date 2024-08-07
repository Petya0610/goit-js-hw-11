export function renderGallery(images, gallery) {
  gallery.innerHTML = images.map(image => `
    <div class="image-card">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <p>Likes: ${image.likes}</p>
      <p>Views: ${image.views}</p>
      <p>Comments: ${image.comments}</p>
      <p>Downloads: ${image.downloads}</p>
    </div>
  `).join('');
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

