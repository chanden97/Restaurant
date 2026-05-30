<template>
  

</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref, computed, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
import product from '../assets/Amok.jpg'
import product2 from '../assets/Curray.jpg'
import product1 from '../assets/khor sach chrouk.webp'
import product3 from '../assets/Lok_lak.jpg'
import product4 from '../assets/nhom_pong_krongg.jpg'
import product5 from '../assets/Plea_sach_kor.jpeg'
import product6 from '../assets/Tuk_Kreung.jpg'
import product7 from '../assets/kdam chaa.webp'

import Banner from './Banner.vue';
import Categories from './Categories.vue';
import Offers from './Offers.vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

import { useRouter } from 'vue-router';

const router = useRouter();

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Menu", path: "/menu" },
  { id: 3, name: "About", path: "/about" },
  { id: 4, name: "Contact", path: "/contact" },
];

function navigate(path) {
  router.push(path)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Products data

const products = [
  { id: 1, name: "Floral", price: 99.99, rating: 4.5, image: product, discount: 20 },
  { id: 3, name: "Woody", price: 149.99, rating: 4.8, image: product2, discount: 10 },
  { id: 2, name: "Oriental", price: 199.99, rating: 4.2, image: product1, discount: 15 },
  { id: 4, name: "Fresh", price: 79.99, rating: 4.0, image: product3, discount: 25 },
  { id: 5, name: "Citrus", price: 89.99, rating: 4.3, image: product4, discount: 30 },
  { id: 6, name: "Musk", price: 129.99, rating: 4.6, image: product5, discount: 18 },
  { id: 7, name: "Amber", price: 109.99, rating: 4.7, image: product6, discount: 22 },
  { id: 8, name: "Vanilla", price: 119.99, rating: 4.4, image: product7, discount: 12 }
];

const productsPerPage = ref(4);

// Track the raw index of the primary active item instead of page numbers
const currentItemIndex = ref(0);

// Compute current slide strictly based on where the active item sits
const currentSlide = computed({
  get: () => Math.floor(currentItemIndex.value / productsPerPage.value),
  set: (newPage) => {
    currentItemIndex.value = newPage * productsPerPage.value;
  }
});

const totalSlides = computed(() => Math.ceil(products.length / productsPerPage.value));

const visibleProducts = computed(() => {
  // Always slice using the normalized grid page multiplier 
  const start = currentSlide.value * productsPerPage.value;
  return products.slice(start, start + productsPerPage.value);
});

const nextSlide = () => {
  currentSlide.value = currentSlide.value === totalSlides.value - 1 ? 0 : currentSlide.value + 1;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? totalSlides.value - 1 : currentSlide.value - 1;
};

const handleResize = () => {
  if (window.innerWidth < 640) {
    productsPerPage.value = 1;
  } else if (window.innerWidth < 768) {
    productsPerPage.value = 2;
  } else if (window.innerWidth < 1024) {
    productsPerPage.value = 3;
  } else {
    productsPerPage.value = 4;
  }

  // Ensure item index references a valid boundary post-resize layout calculation
  if (currentItemIndex.value >= products.length) {
    currentItemIndex.value = Math.max(0, products.length - productsPerPage.value);
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

// Pinia Store
import { useCounterStore } from '../Store/FavoritCount.js';

    const counterStore = useCounterStore();

</script>