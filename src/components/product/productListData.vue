<template>
    <div class="row">
        <div class="col-md-8">
            <h2>Products</h2>
        </div>
        <div class="col-md-1">Categories</div>
        <div class="col-md-2 float-end">
            <select class="form-control" v-model="selectedCategory" @change="changeCategory()">
                <option v-for="item in allCategories" :key="item" :value="item">{{ item }}</option>
            </select>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-3 p-2" v-for="prod in allProducts" :key="prod.id">
                <ProductBlock :productBox="prod" data-toggle="modal" />
            </div>
        </div>
    </div>

    <nav class="float-end p-2" v-if="pages != 1">
        <ul class="pagination">
            <li class="page-item" v-if="currentPage > 1">
                <span class="page-link" @click="changePage(currentPage - 1)">Previous</span>
            </li>
            <li class="page-item" v-for="page in pages" :key="page" @click="changePage(page)">
                <span class="page-link">{{ page }}</span>
            </li>
            <li class="page-item" v-if="pages > currentPage">
                <span class="page-link" @click="changePage(currentPage - 1)">Next</span>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/stores/product.store';
import ProductBlock from '@/components/product/productBlock.vue'

const productStore = useProductStore();
const { allCategories, allProducts, totalProductCount } = storeToRefs(productStore);
const selectedCategory = ref('all');
const pages = computed(() => (totalProductCount.value > 8) ? parseInt(totalProductCount.value / 8) : 1);
const currentPage = ref(1);




onMounted(async () => {
    await productStore.getAllCategories();
    await productStore.getAllProducts(8, currentPage.value, '');
})

async function changePage(pageNumber) {
    currentPage.value = pageNumber;
    await productStore.getAllProducts(8, currentPage.value, selectedCategory.value);
}

async function changeCategory() {
    currentPage.value = 1;
    await productStore.getAllProducts(8, currentPage.value, selectedCategory.value);
}

</script>

<style scoped>
.page-item {
    cursor: pointer;
}
</style>
