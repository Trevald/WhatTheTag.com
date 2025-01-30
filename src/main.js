import { createApp } from "vue"
import { createWebHistory, createRouter } from "vue-router"
import "./assets/main.css"

import App from "./App.vue"
import AppQuestion from "./components/AppQuestion.vue"

const routes = [
    { name: "home", path: "/", component: AppQuestion },
    { name: "question", path: "/what/:id", component: AppQuestion }
]

// Router
const router = new createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount("#app")
