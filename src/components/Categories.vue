<template>
  <section id="categories" class="py-16 bg-white scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-amber-950 mb-3">
          Explore Our Food Collections
        </h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover delicious Khmer foods
        </p>
      </div>

      <!-- Categories -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div class="h-64 overflow-hidden">
            <img
              :src="category.image"
              :alt="category.alt"
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
            <div class="absolute bottom-0 left-0 p-6">
              <h3 class="text-xl font-semibold text-white">
                {{ category.title }}
              </h3>
              <p class="text-gray-200 mt-1">
                {{ category.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import LemongrassTea from '../assets/LemongrassTea.jpg';
import FruitJelly from '../assets/FruitJelly.jpg';
import FreshCoconutJuice from '../assets/CoconutJuice.jpg';
import Loklak from "../assets/Lok_lak.jpg";
import MangoStickyRice from '../assets/MangoStickyRice.jpg';
import Curray from "../assets/Curray.jpg";

const categories = [
  {
    image: LemongrassTea,
    title: "Lemongrass Tea",
    description: "Light and refreshing herbal tea",
    alt: "lemongrass tea"
  },
  {
    image: FruitJelly,
    title: "Fruit Jelly",
    description: "Delicious fruit jelly",
    alt: "Fruit Jelly"
  },
  {
    image: FreshCoconutJuice,
    title: "Fresh Coconut Juice",
    description: "Refreshing coconut juice",
    alt: "Fresh Coconut Juice"
  },
  {
    image: Loklak,
    title: "Lok Lak",
    description: "Stir-fried beef",
    alt: "Lok Lak"
  },
  {
    image: MangoStickyRice,
    title: "Mango Sticky Rice",
    description: "Delicious mango sticky rice",
    alt: "Mango Sticky Rice"
  },
  {
    image: Curray,
    title: "Khmer Red Curry",
    description: "Rich coconut curry",
    alt: "Khmer Red Curry"
  }
];
</script>