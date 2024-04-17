import {createWebHistory,createRouter} from 'vue-router'
import AddStudent from '@/components/Student/AddStudent.vue'
import productListData from '@/components/product/productListData.vue'
import Product from '@/components/ProductList.vue'
import HelloWorldPage from '@/components/HelloWorld.vue'
import { useAuthStore } from '@/stores/auth.store'


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
        meta: { authreq: true }
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
        meta: { authreq: true }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const auth = authStore.isAuthenticated;
    if ((to.meta.authreq)) {
      if (!auth) {
        return next({ name: 'login' });
      }
      else {
        return next();
      }
    }
    else if (to.name == 'login' && auth) {
      return next({ path: '/product' });
    }
    return next();
  });

export default router;