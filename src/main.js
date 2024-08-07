import { fetchImages } from './pixabay-api.js';
import { renderGallery, clearGallery } from './render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const loader = document.getElementById('loader');
const gallery = document.getElementById('gallery');

let lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = input.value.trim();
  
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
    });
    return;
  }

  clearGallery(gallery);
  loader.style.display = 'block';

  fetchImages(query)
    .then((data) => {
      loader.style.display = 'none';
      
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderGallery(data.hits, gallery);
        lightbox.refresh();
      }
    })
    .catch((error) => {
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
    });
});
