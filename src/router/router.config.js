import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// create and export router
export default createRouter({
    history: createWebHistory(),
    routes
})
