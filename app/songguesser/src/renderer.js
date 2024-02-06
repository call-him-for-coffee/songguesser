import { createApp } from 'vue';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import App from './App.vue';
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Registration from './views/Registration.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/registration',
            component: Registration
        },
    ]
})


const app = createApp(App)
app.use(router)
app.mount('#app');