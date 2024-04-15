<template>
    <div style="border: 1px solid;padding: 15px;width: 50%;margin: auto;">
        <h1>Product Page Data Transfer</h1>
        {{ auth }}
    </div>

    <ul>
        <li v-for="(prod, index) in productList" :key="prod.id">
            {{ prod.title }} - {{ index }}
        </li>
    </ul>
</template>

<script setup>
import axios from 'axios';
import { defineProps, onMounted, ref } from 'vue'

const auth = defineProps({ 'authorData': Object });

const productList = ref([]);
onMounted(async () => {
    getAllProducts();
})

async function getAllProducts() {
    const url = `https://dummyjson.com/products`;
    await axios.get(url).then(response => {
        const _allProducts = JSON.parse(JSON.stringify(response.data.products));
        console.log("_allProducts", _allProducts)
        _allProducts.sort((a, b) => {
            if (a.id < b.id) {
                return -1;
            }
            if (a.id > b.id) {
                return 1;
            }
            return 0;
        });
        productList.value = _allProducts;
    })
}

</script>
