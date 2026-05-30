<template>
    <Products
        @add-to-cart="$emit('add-to-cart', $event)"
        @update-wishlist="$emit('update-wishlist', $event)"
    />

</template>

<script setup> 
import Products from '../components/Products.vue';

const emit = defineEmits([
    'add-to-cart',
    'update-wishlist'
])

</script>
