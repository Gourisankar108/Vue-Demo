import {createWebHistory,createRouter} from 'vue-router'
import AddStudent from '@/components/Student/AddStudent.vue'
import productListData from '@/components/product/productListData.vue'
import Product from '@/components/ProductList.vue'
import HelloWorldPage from '@/components/HelloWorld.vue'


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
        path: "/productListData",
        component: productListData,
        name: 'productListData',
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

export default router;