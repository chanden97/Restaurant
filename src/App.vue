<template>
  <div>
    <Header 
      :cart-count="totalCartItems" 
      :cart-items="cart"
      :wishlist-count="wishlistCount"
      :wishlist-items="wishlist"
      @increase="increaseQuantity"
      @decrease="decreaseQuantity"
      @remove="removeFromCart"
      @checkout-success="clearCart"
      @remove-from-wishlist="removeFromWishlist"
      @add-to-cart-from-wishlist="addToCart"
    />
    
    <router-view @add-to-cart="addToCart" 
      @update-wishlist="handleUpdateWishlist"/>

    <Footer />
    
    <!-- <About /> -->
    <!-- <Contact /> -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Products from './components/Products.vue';
import Categories from './components/Categories.vue';
import Offers from './components/Offers.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import HomePage from './Views/HomePage.vue';


const cart = ref([]);

// 💡 បង្កើត Array សម្រាប់រក្សាទុកទិន្នន័យផលិតផលដែលបានចុចបេះដូង Like
const wishlist = ref([]);

// 💡 គណនាចំនួនលេខបេះដូងសរុបផ្អែកលើចំនួន Item នៅក្នុង Array wishlist
const wishlistCount = computed(() => wishlist.value.length);

// 💡 មុខងារទទួលយក Array ផលិតផលដែលបាន Like ពី Products.vue
const handleUpdateWishlist = (updatedWishlist) => {
  wishlist.value = updatedWishlist;
};

// 💡 មុខងារលុបផលិតផលចេញពី Wishlist ពេលចុចប៊ូតុងធុងសំរាមក្នុង Sidebar
const removeFromWishlist = (productId) => {
  wishlist.value = wishlist.value.filter(item => item.id !== productId);
};

const totalCartItems = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0);
});

const addToCart = (product) => {
  const finalPrice = product.discount > 0 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  const existingItem = cart.value.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.value.push({
      id: product.id,
      name: product.name,
      price: finalPrice, 
      image: product.image,
      quantity: 1
    });
  }
};

const increaseQuantity = (itemId) => {
  const item = cart.value.find(item => item.id === itemId);
  if (item) item.quantity += 1;
};

const decreaseQuantity = (itemId) => {
  const item = cart.value.find(item => item.id === itemId);
  if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      removeFromCart(itemId);
    }
  }
};

const removeFromCart = (itemId) => {
  cart.value = cart.value.filter(item => item.id !== itemId);
};

const clearCart = () => {
  cart.value = [];
};
</script>

<style>
/* ស្ទីលទូទៅ */
</style>