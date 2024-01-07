import axios from 'axios'
function tv () {
    function getDetails (id) {
        return axios.get(`/tv/${id}?language=en-US&append_to_response=content_ratings`)
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
        getDetails, getPopular, getSeason, getVideos, getCredits, getRecommendations
    }
}

function movie () {
    function getPopular () {
        return axios.get('/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc')
    }
    function getNew () {
        return axios.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&primary_release_year=${new Date().getFullYear()}`)
    }
    function getDetails (id) {
        return axios.get(`/movie/${id}?language=en-US&append_to_response=release_dates,translations`)
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
