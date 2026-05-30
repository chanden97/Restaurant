<template>
  <footer class="bg-gray-950 text-gray-300 pt-12 pb-6">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        
        <div>
          <h3 class="text-xl font-bold text-white mb-4">Scent Haven</h3>
          <p class="mb-4">Your premier destination for luxury fragrances from around the world.</p>
          <div class="flex space-x-4">
            <a v-for="(social, index) in socialLinks"
               :href="social.url"
               :key="index"
               class="text-gray-400 hover:text-white transition">
              <Icon :icon="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="(link, index) in quickLinks" :key="index" class="mb-2">
              <a href="#" class="hover:text-white transition">{{ link }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul class="space-y-2">
            <li v-for="(link, index) in customerService" :key="index" class="mb-2">
              <a href="#" class="hover:text-white transition">{{ link }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p class="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
          <form class="flex">
            <input
              type="email" 
              placeholder="Your email address"
              class="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900"
            />
            <button
              type="submit"
              class="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r-lg transition"
            >
              Subscribe
            </button>
          </form>
          <div class="mt-4 flex items-center">
            <Icon icon="fa6-solid:envelope" class="w-5 h-5 mr-2" />
            <span>Subscribe@scenthaven.com</span>
          </div>
        </div>

      </div>

      <div class="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p class="text-center text-gray-500">
          &copy; {{ new Date().getFullYear() }} Scent Haven. All rights reserved.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <Icon v-for="(icon, index) in paymentIcons" 
                :key="index" 
                :icon="icon" 
                class="w-6 h-6" />
        </div>
      </div>
    </div>
  </footer>
</template> 

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

// ទិន្នន័យសម្រាប់ Link ផ្សេងៗ
const quickLinks = ref(['Home', 'Shop', 'New Arrivals', 'Best Sellers', 'Gift Cards']);
const customerService = ref(['Contact Us', 'Shipping & Returns', 'Privacy Policy', 'Terms of Service']);    

// ខ្ញុំបានប្តូរអត្ថបទ 'Our Story' ... ទៅជា Iconify Names សម្រាប់ទូទាត់ប្រាក់វិញ ដើម្បីឱ្យត្រូវនឹងឈ្មោះ variable
const paymentIcons = ref([
  'fa6-brands:cc-visa', 
  'fa6-brands:cc-mastercard', 
  'fa6-brands:cc-paypal', 
  'fa6-brands:cc-apple-pay'
]);

const socialLinks = ref([
  { icon: 'fa-brands:instagram', url: '#' },
  { icon: 'fa-brands:facebook-f', url: '#' },
  { icon: 'fa-brands:twitter', url: '#' }
]);
</script>