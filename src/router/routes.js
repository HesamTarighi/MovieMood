// import components
import Index from '../views/index.vue'
import Movie from '../views/movie/_id.vue'
import Tv from '../views/tv/_id.vue'

// export routes
export default [
    {
        path: '/',
        component: Index
    },
    {
        path: '/movie/:id',
        component: Movie
    },
    {
        path: '/tv/:id',
        component: Tv
    },
]
