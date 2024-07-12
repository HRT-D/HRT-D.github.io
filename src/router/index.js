import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/views/Home/index.vue";
import Instructions from "@/views/Instructions/index.vue";
import AboutUs from "@/views/AboutUs/AboutUs.vue";
import Sponsor from "@/views/Sponsor/Sponsor.vue";

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', name: "Home", component: Home},
    {path: '/Instructions', name: "Instructions", component: Instructions},
    {path: '/aboutUs', name: "About Us", component: AboutUs},
    {path: '/sponsor', name: "Sponsor", component: Sponsor}
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;
