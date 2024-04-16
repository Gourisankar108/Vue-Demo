<template>
    <div class="card product-card" >
        <div class="profile-card">
            <img class="img-fluid" :src="props.productBox.thumbnail">
            <button class="btn btn-sm btn-info staticleft">{{ props.productBox.brand }}</button>
            <button class="btn btn-sm btn-primary staticright">{{ props.productBox.category }}</button>
            <div class="card-block">
                <h5 class="text-center text-elliple">{{ props.productBox.title }}</h5>
                <small class="text-elliple p-1">{{ props.productBox.description }}</small>
            </div>
        </div>
        <div class="card-footer bg-inverse">
            <div class="row text-center">
                <div class="col-sm-4">
                    <h6>Rs {{ formatNumber(props.productBox.price) }}</h6>
                    <small>Price</small>
                </div>
                <div class="col-sm-4">
                    <h6>{{ props.productBox.rating }}</h6>
                    <small>Rating</small>
                </div>
                <div class="col-sm-4">
                    <h6>{{ props.productBox.discountPercentage }}%</h6>
                    <small>Discount</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ 'productBox': Object });

function formatNumber(number) {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number,);
}
</script>


<style scoped>
.text-elliple {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
}

.img-fluid {
    height: 200px;
    margin: auto;
    display: block;
}

.staticleft {
    position: absolute;
    top: 10px;
    left: 10px;
}

.staticright {
    position: absolute;
    top: 10px;
    right: 10px;
}

.product-card {
    cursor: pointer !important;
}

.product-card:hover {
    transform: scale(1.05);
}</style>