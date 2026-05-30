<template>
  <section class="py-12 scroll-mt-20 bg-gray-50" id="products">
    <main class="container mx-auto px-4">

      <header class="flex flex-col gap-4 mb-8">
        <h2 class="md:text-3xl text-2xl font-bold text-amber-950">
          Featured Products
        </h2>
        
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="cat in ['All', 'Food', 'Drink', 'Dessert']" 
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-200',
              selectedCategory === cat 
                ? 'bg-pink-950 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </header>

      <section>
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <li
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-100 flex flex-col justify-between"
          >
            <article class="h-full flex flex-col justify-between">

              <figure class="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-full object-cover"
                />

                <figcaption
                  v-if="product.discount > 0"
                  class="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm"
                >
                  {{ product.discount }}% OFF
                </figcaption>

                <button
                  @click="toggleWishlist(product)"
                  class="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:bg-pink-50 transition-colors"
                >
                  <Icon
                    :icon="isInWishlist(product.id) ? 'mdi:heart' : 'mdi:heart-outline'"
                    width="18"
                    height="18"
                    :class="isInWishlist(product.id) ? 'text-pink-600' : 'text-gray-400'"
                  />
                </button>
              </figure>

              <section class="p-4 flex-1 flex flex-col justify-between">
                
                <div>
                  <div class="flex items-center mb-1">
                    <div class="flex mr-1">
                      <Icon
                        v-for="i in 5"
                        :key="i"
                        icon="line-md:star-alt-filled"
                        width="14"
                        height="14"
                        :class="i <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-200'"
                      />
                    </div>
                    <span class="text-xs font-semibold text-gray-400">
                      {{ product.rating }}
                    </span>
                  </div>

                  <h3 class="text-base font-bold text-slate-800 mb-3 tracking-wide">
                    {{ product.name }}
                  </h3>
                </div>

                <footer class="flex items-center justify-between mt-2">
                  <div class="flex flex-col">
                    <span class="text-lg font-black text-pink-600">
                      ${{ (product.price * (1 - product.discount / 100)).toFixed(2) }}
                    </span>
                    <span
                      v-if="product.discount > 0"
                      class="text-xs text-gray-300 font-medium line-through"
                    >
                      ${{ product.price.toFixed(2) }}
                    </span>
                  </div>
                  <button
                    @click="emit('add-to-cart', product)"
                    class="p-2.5 bg-pink-950 rounded-full text-white hover:bg-pink-900 transition-colors shadow-sm active:scale-95"
                    >
                    <Icon
                      icon="icon-park-solid:shopping"
                      width="16"
                      height="16"
                    />
                  </button>
                </footer>

              </section>

            </article>
          </li>

        </ul>
      </section>

    </main>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref, computed, defineEmits } from 'vue';

// ==================== 1. Import Images (Paths) ====================
import imgPrahokKtis from '../assets/prahok ktis.webp';
import imgKdamChaa from '../assets/kdam chaa.webp';
import imgAngMek from '../assets/ang dtray-meuk.webp';
import imgKhorSachChrouk from '../assets/khor sach chrouk.webp';
import imgLapKhmer from '../assets/lap khmer.webp';
import imgPongTiaKon from '../assets/pong tia kon.webp';
import imgKhmerFood from '../assets/Khmer food.jpg';

import MilkTea from '../assets/MilkTea.jpg';
import LemongrassTea from '../assets/LemongrassTea.jpg';
import FreshCoconutJuice from '../assets/CoconutJuice.jpg';
import IcedCoffee from '../assets/ice_coffee.jpg';

import MangoStickyRice from '../assets/MangoStickyRice.jpg';
import ChocolateCake from '../assets/ChocolateCake.jpg';
import Donut from '../assets/Donut.jpg';
import FruitJelly from '../assets/FruitJelly.jpg';


// Emits សម្រាប់បាញ់ទៅ App.vue
const emit = defineEmits([
  'add-to-cart',
  'update-wishlist'
]);

// State សម្រាប់ Filter Category
const selectedCategory = ref('All');

// ==================== 2. Products Data Setup ====================
const products = [
  { id: 1, name: "Prahok Ktis", price: 3.99, rating: 4.5, image: imgPrahokKtis, discount: 20, category: "Food" },
  { id: 2, name: "Kdam Chaa", price: 4.99, rating: 4.8, image: imgKdamChaa, discount: 10, category: "Food" },
  { id: 3, name: "Ang Dtray Meuk", price: 5.99, rating: 4.2, image: imgAngMek, discount: 15, category: "Food" },
  { id: 4, name: "Khor Sach Chrouk", price: 4.50, rating: 4.0, image: imgKhorSachChrouk, discount: 25, category: "Food" },

  { id: 5, name: "Khmer Milk Tea", price: 2.99, rating: 4.6, image: MilkTea, discount: 18, category: "Drink" },
  { id: 6, name: "Lemongrass Tea", price: 1.99, rating: 4.4, image: LemongrassTea, discount: 10, category: "Drink" },
  { id: 7, name: "Fresh Coconut Juice", price: 3.50, rating: 4.7, image: FreshCoconutJuice, discount: 12, category: "Drink" },
  { id: 8, name: "Iced Coffee", price: 2.50, rating: 4.3, image: IcedCoffee, discount: 5, category: "Drink" },

  { id: 9, name: "Mango Sticky Rice", price: 4.99, rating: 4.9, image: MangoStickyRice, discount: 20, category: "Dessert" },
  { id: 10, name: "Chocolate Cake", price: 5.99, rating: 4.6, image: ChocolateCake, discount: 15, category: "Dessert" },
  { id: 11, name: "Donut", price: 2.99, rating: 4.3, image: Donut, discount: 10, category: "Dessert" },
  { id: 12, name: "Fruit Jelly", price: 3.49, rating: 4.1, image: FruitJelly, discount: 8, category: "Dessert" }
];


// Computed Property សម្រាប់ធ្វើការ Filter ចម្រោះប្រភេទផលិតផល
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'All') {
    return products;
  }
  return products.filter(product => product.category === selectedCategory.value);
});

// Wishlist Logic
const wishlist = ref([]);

const toggleWishlist = (product) => {
  const exists = wishlist.value.find(item => item.id === product.id);
  if (exists) {
    wishlist.value = wishlist.value.filter(item => item.id !== product.id);
  } else {
    wishlist.value.push(product);
  }
  emit('update-wishlist', wishlist.value);
};

const isInWishlist = (id) => {
  return wishlist.value.some(item => item.id === id);
};
</script>