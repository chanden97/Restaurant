import { createRouter, createWebHistory } from "vue-router"

import About from "../components/About.vue"
import Contact from "../components/Contact.vue"
import HomePage from "../Views/HomePage.vue"
import MenuPage from "../Views/MenuPage.vue"

const routes = [
    {
        path: '/',  
        component: HomePage
    },
    {
        path: '/menu',
        component: MenuPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    
]

export const router = createRouter({
    history: createWebHistory(), 
    routes
})