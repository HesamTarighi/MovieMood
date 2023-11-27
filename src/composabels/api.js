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
    function getCredits (id) {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}/credits`)
    }
    function getSeason (id, seasonNumber) {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}`)
    }

    return {
        getDetails, getPopular, getContentRating, getSeason, getVideos, getCredits
    }
}

function movie () {
    function getPopular () {
        return axios.get('/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc')
    }
    function getNew () {
        return axios.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&primary_release_year=${new Date().getFullYear()}`)
    }

    return {
        getPopular, getNew
    }
}

function multi () {
    function search (query) {
        return axios.get(`/search/multi?query=${query}`)
    }

    return {
        search
    }
}

export default {
    tv,
    movie,
    multi
}
