import axios from 'axios'
function tv () {
    function getDetails (id) {
        return axios.get(`/tv/${id}?language=en-US`)
    }
    function getContentRating (id) {
        return axios.get(`/tv/${id}/content_ratings`)
    }
    function getPopular () {
        return axios.get('/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc')
    }
    function getVideos (id) {
        return axios.get(`/tv/${id}/videos`)
    }
    function getCredits (id) {
        return axios.get(`/tv/${id}/credits`)
    }
    function getSeason (id, seasonNumber) {
        return axios.get(`/tv/${id}/season/${seasonNumber}`)
    }
    function getRecommendations (id) {
        return axios.get(`/tv/${id}/recommendations`)
    }

    return {
        getDetails, getPopular, getContentRating, getSeason, getVideos, getCredits, getRecommendations
    }
}

function movie () {
    function getPopular () {
        return axios.get('/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc')
    }
    function getNew () {
        return axios.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&primary_release_year=${new Date().getFullYear()}`)
    }
    function getDetails (id) {
        return axios.get(`/movie/${id}?language=en-US`)
    }
    function getContentRating (id) {
        return axios.get(`/movie/${id}/content_ratings`)
    }
    function getVideos (id) {
        return axios.get(`/movie/${id}/videos`)
    }
    function getCredits (id) {
        return axios.get(`/movie/${id}/credits`)
    }
    function getRecommendations (id) {
        return axios.get(`/movie/${id}/recommendations`)
    }

    return {
        getPopular, getNew, getDetails, getContentRating, getVideos, getCredits, getRecommendations
    }
}

export default {
    tv,
    movie
}
