import { defineStore } from 'pinia';
import { ref } from 'vue'
import axios from 'axios'

export const useProductStore = defineStore('productStore', () => {
    const allProducts = ref([]);
    const allCategories = ref([]);
    const totalProductCount = ref(0);

    async function getAllProducts(limit, skip, category) {
        const categoryUrl = (!category || category == 'all') ? '' : '/category/' + category;
        const url = `https://dummyjson.com/products${categoryUrl}?limit=${limit}&skip=${skip}`;
        await axios.get(url).then(response => {
            const _allProducts = JSON.parse(JSON.stringify(response.data.products));
            totalProductCount.value = response.data.total;
            _allProducts.sort((a, b) => {
                if (a.id < b.id) {
                    return -1;
                }
                if (a.id > b.id) {
                    return 1;
                }
                return 0;
            });
            allProducts.value = _allProducts;
        })
        return allProducts.value;
    }

    async function getAllCategories() {
        if (allCategories.value.length == 0) {
            await axios.get('https://dummyjson.com/products/categories').then(response => {
                const _allCategories = JSON.parse(JSON.stringify(response.data));
                _allCategories.push('all');
                _allCategories.sort((a, b) => {
                    if (a < b) {
                        return -1;
                    }
                    if (a > b) {
                        return 1;
                    }
                    return 0;
                });
                allCategories.value = _allCategories;
            })
        }
        return allCategories.value;
    }

    return {
        allProducts,
        totalProductCount,
        allCategories,
        getAllProducts,
        getAllCategories
    };
})