import axios from "axios"

axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = {
    key: `55067704-3401c91e7f521ffd7d90d5720`,
    q:``,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
}

const loader = document.querySelector(".loader");

export const getImagesByQuery = async (query) =>{
    axios.defaults.params.q = query;
    const res = await axios.get("");
    return res.data;
}

export function clearGallery(gallery) {
    gallery.innerHTML = "";
}

export function showLoader(gallery) {
  clearGallery(gallery);
  loader.textContent = "Loading";
  loader.classList.add("loader");
  gallery.appendChild(loader);
}

export function hideLoader(gallery) {
  const loader = gallery.querySelector(".loader");
  if (loader) {
    loader.remove();
  }
}