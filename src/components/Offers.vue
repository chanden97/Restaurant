<template>
  <div id="offers" class="container scroll-mt-20 mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold text-center mb-2 text-amber-900">Special Offers</h2>
    <p class="text-center text-gray-600 mb-12">Take advantage of these limited-time offers</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="offer in currentOffers" :key="offer.id"
           :class="[offer.bgColor, 'rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105']">
        
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h3 :class="[offer.textColor, 'text-xl font-semibold']">{{ offer.title }}</h3>
            <span class="bg-white rounded-full p-3 shadow-md">
              <Icon :icon="offer.discount.includes('%') ? 'material-symbols:percent' : 'mdi:gift'"
                    :class="[offer.textColor, 'text-2xl']" />
            </span>
          </div>

          <p class="text-gray-700 mb-4">{{ offer.description }}</p>
          
          <div class="flex items-center text-gray-600 mb-6">
            <Icon icon="svg-spinners:clock" class="mr-2" />
            <span>Ends on {{ offer.endDate }}</span>
          </div>
          
          <div class="bg-white rounded-lg p-4 mb-4">
            <p class="text-sm text-gray-500 mb-1">Use code</p>
            <p class="font-bold font-mono text-lg text-gray-800">{{ offer.code }}</p>
          </div>
          
          <button :class="[
            offer.textColor,
            'w-full py-3 rounded-lg font-semibold border',
            offer.textColor.replace('text', 'border'),
            'hover:bg-white transition-colors duration-300'
          ]">
            Claim offer
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentOffers = ref([
  {
    id: 1,
    title: 'Hot Summer Sale',
    description: 'Up to 30% off on our summer perfume collection',
    discount: '30%', // កែទៅជា String វិញ
    endDate: '2026-05-31',
    code: 'SUMMER30',
    bgColor: 'bg-amber-200',
    textColor: 'text-amber-700'
  }, // ថែមសញ្ញាក្បៀស (,) នៅត្រង់នេះ
  {
    id: 2, // កែពី id: 1 ទៅ id: 2 ដើម្បកុំឱ្យស្ទួន
    title: 'Flash Deal', // ខ្ញុំបានដូរចំណងជើង និងទិន្នន័យខ្លះៗដើម្បីកុំឱ្យដូចទី១ពេក
    description: 'Get a free gift box for every purchase over $50',
    discount: 'Gift',
    endDate: '2026-05-25',
    code: 'FREEGIFT',
    bgColor: 'bg-blue-200',
    textColor: 'text-blue-700'
  }, // ថែមសញ្ញាក្បៀស (,) នៅត្រង់នេះ
  {
    id: 3,
    title: 'Now Discounted',
    description: 'Up to 30% off on our summer perfume collection',
    discount: 'Giveaway',
    endDate: '2026-06-30', // កែពីថ្ងៃ 31 ទៅ 30 (មិថុនាមានត្រឹម 30 ថ្ងៃ)
    code: 'NOW20',
    bgColor: 'bg-pink-200',
    textColor: 'text-pink-700'
  }
]);
</script>