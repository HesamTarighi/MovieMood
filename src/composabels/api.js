import axios from 'axios'
function tv () {
    function getDetails (id) {
        return axios.get(`/tv/${id}?language=en-US`)
    }
    function getContentRating (id, iso) {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}/content_ratings`)
    }
    function getPopular () {
        return axios.get('/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc')
    }
    function getVideos (id) {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}/videos`)
    }

    function getSeason (id, seasonNumber) {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}`)
    }

    return {
        getDetails, getPopular, getContentRating, getSeason, getVideos
    }
}

function movie () {
    function getPopular () {
        return axios.get('/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc')
    }

    return {
        getPopular
    }
}

export default {
    tv,
    movie
}
