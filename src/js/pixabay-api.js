// import apiKey from "./apiKey";
// const { KEY, BASE_URL } = apiKey;
// import refs from "./refs";
// const { loader } = refs;
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { loader } from "../main";

const KEY = '45785559-b0577f06fb94f4ced9a4d3280';
const BASE_URL = 'https://pixabay.com/api/';

export function getSearch(searchText) {
    const LINK = `${BASE_URL}?key=${KEY}&q=${searchText}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(LINK).then(resp => { return resp.json() }).then(data => {
        loader.style.display = 'none';
        if (!data.hits.length) {
            throw new Error(
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                })
            );
        }

        return data;

    });

}