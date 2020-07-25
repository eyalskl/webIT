const axios = require('axios');

export const searchImgService = {
    getImages
}

function getImages(keyword) {
    return fetch(`https://api.unsplash.com/search/photos?page=1&per_page=30&query=${keyword}&client_id=UOPxjdImF0T9IJdy6aZaXgFAfI2MsB5K9Q6zNCt-5YE`)
        .then(res => res.json())
}