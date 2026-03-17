import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createGallery, initLightbox, clearGallery, hideLoader, showLoader } from "./js/render-functions";
import { getImagesByQuery} from "./js/pixabay-api";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit",  (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const query = formData.get("search-text");

    clearGallery(gallery);
    showLoader(gallery);

    getImagesByQuery(query).then((data) => {
        if(data.hits.length === 0 || query.trim() === "") {
        iziToast.show({
            title: "Error",
            message: "Sorry, there are no images matching your search query. Please try again!",
            color: "red",
        });
        return;
    }
    createGallery(data.hits);
    initLightbox();
    }).catch((err) => {
        console.log(`Error`);
    }).finally(() => {
        hideLoader(gallery);
    });
    
    
})

