import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import "@/assets/main.css";

Vue.use(VueRouter)
Vue.config.productionTip = false


import MainView from "./components/MainView";


const routes = [
    { name: "main", path: '*', component: MainView },
];

// Router
const router = new VueRouter({
    routes
  })

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
