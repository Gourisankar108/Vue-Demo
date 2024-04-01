<template>
    <div style="border: 1px solid;padding: 15px;width: 50%;margin: auto;">
        <h1>Product Page Data Transfer</h1>
    {{ auth }}

    </div>
</template>

<script setup>
import {defineProps} from 'vue'

const auth = defineProps({ 'authorData': Object });

</script>
