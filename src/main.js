import { createApp } from 'vue'
import Product from '@/components/ProductList.vue'
import HelloWorldPage from '@/components/HelloWorld.vue'
import {createWebHistory,createRouter} from 'vue-router'
import AddStudent from '@/components/Student/AddStudent.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
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
    {
        path: "/addstudent",
        component: AddStudent,
        name: 'AddStudent',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(App)
app.use(router);
app.mount('#app')


