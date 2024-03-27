import { createApp } from 'vue'
import Product from '@/components/ProductList.vue'
import HelloWorldPage from '@/components/HelloWorld.vue'
import {createWebHistory,createRouter} from 'vue-router'

import App from './App.vue'

const routes = [
    {
        path: "/hello",
        component: HelloWorldPage,
        name: 'HelloWorldPage',
    },
    {
        path: "/product",
        component: Product,
        name: 'Product',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(App)
app.use(router);
app.mount('#app')


