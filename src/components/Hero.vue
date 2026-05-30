<template>
  <section id="home" class="bg-amber-50 scroll-mt-20 py-16">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10"
    >
      <!-- Left Content -->
      <div class="text-center lg:text-left max-w-xl">
        <h1
          class="text-4xl sm:text-5xl font-bold text-amber-950 leading-tight mb-4"
        >
          Discover the Best Deals on Top Foods!
        </h1>

        <p class="text-gray-700 text-base sm:text-lg mb-6">
          Exclusive discounts and special offers on everything you love.
          Shop now and be the first to grab the latest trends.
        </p>

        <div class="flex justify-center lg:justify-start gap-4">
          <a
            href="/products"
            class="px-6 py-3 bg-pink-900 text-white text-sm font-semibold rounded-lg shadow hover:bg-pink-700 transition"
          >
            Shop Now
          </a>

          <a
            href="/offers"
            class="px-6 py-3 border border-pink-900 text-pink-900 text-sm font-semibold rounded-lg hover:bg-pink-100 transition"
          >
            View Offers
          </a>
        </div>
      </div>

      <!-- Right Image -->
      <div class="w-full lg:w-1/2 flex justify-center">
        <img
          src="../assets/Khmer food.jpg"
          alt="Hero Product"
          class="w-3/4 lg:w-full max-w-md mx-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>