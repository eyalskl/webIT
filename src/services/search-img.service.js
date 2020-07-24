import axios from 'axios';

export const searchImgService = {
    getImages
}

function getImages(keyword) {
    return axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=10&query=${keyword}&client_id=UOPxjdImF0T9IJdy6aZaXgFAfI2MsB5K9Q6zNCt-5YE`)
        .then(res => {
            console.log('res', res.data);
            return res.data.results
        })
}