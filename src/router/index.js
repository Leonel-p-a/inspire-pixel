import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Gallery from "../pages/Gallery.vue";
import Favorites from "../pages/Favorites.vue";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/gallery",
        component: Gallery
    },
    {
        path: "/favorites",
        component: Favorites
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;