<template>


  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ name }}
    {{ product.name }}
    {{ product.price }}


    v-If & dynamic Class
    <button type="button" @click="displayProduct()" :class="[showImage ? 'hideclass' : 'showclass', 'defaultclass']">
      {{ showImage ? 'Hide' : 'Show' }}
    </button>
    <br>

    <img :src="imgUrl" style="width: 250px;height: auto;" v-if="showImage" /> {{ showImage }}
    <br>

    <button type="button" @click="Increament()">Increament</button>
    <h2>Count : {{ count }}</h2>
    computed Value {{ Count5X }}

    <h1 v-if="showImage">Image is Visible</h1>
    <h1 v-else>Oh no 😢</h1>


    <h3>reactive and v-for</h3>
    {{ author.name }}

    <li v-for="(book, index) in author.books" :key="book">
      {{ book }} - {{ index }}
    </li>

  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const product = {
  name: "Book",
  price: 50
};
const count = ref(0);

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})


const imgUrl = "https://www.mapsofindia.com/images2/india-map-2019.jpg";
const showImage = ref(true);


const Count5X = computed(() => {
  return count.value * 5;
})


function displayProduct() {
  // alert("Product " + product.name)
  showImage.value = !showImage.value;
}

function Increament() {
  count.value = count.value + 1
}
</script>


<style scoped>
.showclass {
  background: cyan;
}

.hideclass {
  background: yellow;
}

.defaultclass {
  padding: 15px;
}
</style>
