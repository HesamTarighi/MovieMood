import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjAzZGM1NjBhNDdjYTVmOGE2NTE0MThkNmEyZDgwOCIsInN1YiI6IjY1Mzk4NzUwOGEwZTliMDBlYWZhZTgwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g8uUijst4H6iVoZg8c1kbSdnLgBaVkpzFNBYWhDjZwI';
axios.defaults.baseURL = 'https://api.themoviedb.org/3'
