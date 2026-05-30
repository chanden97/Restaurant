<template>
  <div
    id="about"
    class="min-h-screen scroll-mt-20 bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-12 mb-20">

        <!-- Image Section -->
        <div class="lg:w-1/2">
          <div class="relative rounded-2xl overflow-hidden h-96 shadow-xl">
            <img
              :src="product"
              alt="Luxury perfume"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"
            ></div>

            <div class="absolute bottom-0 left-0 p-6 text-white">
              <h3 class="text-2xl font-bold">Since 2026</h3>
              <p class="mt-2">
                Creating exceptional fragrances for over a decade
              </p>
            </div>
          </div>
        </div>

        <!-- Text Content -->
        <div class="lg:w-1/2 flex flex-col justify-center">
          <h2 class="text-4xl font-bold text-amber-900 mb-6">About Us</h2>

          <p class="text-lg text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nostrum molestias quo suscipit ex, quisquam repellendus sequi
            tenetur provident! Unde recusandae alias quaerat aspernatur
            ratione tempora ad vitae fuga soluta quibusdam.
          </p>

          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 class="font-semibold text-pink-600">500+</h4>
              <p class="text-gray-600">Unique fragrances</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 class="font-semibold text-pink-600">100K+</h4>
              <p class="text-gray-600">Satisfied customers</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 class="font-semibold text-pink-600">50+</h4>
              <p class="text-gray-600">Countries served</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 class="font-semibold text-pink-600">10+</h4>
              <p class="text-gray-600">Years of experience</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import product from "../assets/restaurant.jpg";

</script>
