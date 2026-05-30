<template>
  <header class="sticky top-0 transition-all duration-300 z-50">
    <section :class="['w-full', isScrolled ? 'bg-gray-100/95 backdrop-blur shadow-md py-2' : 'bg-gray-100 py-4']">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div class="flex justify-between items-center w-full md:w-auto">
            <a href="/" class="text-2xl font-bold text-pink-600">ShopEase</a>
            <button class="md:hidden text-gray-700 hover:text-pink-600" @click="isMobileMenuOpen = !isMobileMenuOpen">
              <Icon icon="mdi:menu" class="w-6 h-6" />
            </button>
          </div>

          <div class="flex items-center gap-4 w-full md:flex-1 justify-end">
            <form class="w-full max-w-sm">
              <label class="relative block">
                <input type="text" placeholder="Search..." class="w-full px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500" />
                <button class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-pink-600">
                  <Icon icon="mdi:magnify" class="w-5 h-5" />
                </button>
              </label>
            </form>

            <aside class="flex items-center space-x-4">
              <button 
                  @click="isWishlistOpen = true"
                  class="relative p-2 hover:text-pink-600"
                >
                  <Icon icon="mdi:heart-outline" class="w-6 h-6" />

                  <span
                    class="absolute -top-1 -right-1 bg-pink-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center"
                  >
                    {{ wishlistCount }}
                  </span>
              </button>

              <button @click="isCartOpen = true" class="relative p-2 hover:text-pink-600" title="Cart">
                <Icon icon="mdi:cart-outline" class="w-6 h-6 inline-block" />
                <span class="absolute -top-1 -right-1 bg-pink-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                  {{ cartCount }}
                </span>
              </button>

              <button @click="openAuthModal" class="p-2 hover:text-pink-600" title="Login/Register">
                <Icon icon="mdi:account-outline" class="w-6 h-6 inline-block" />
              </button>
            </aside>

          </div>
        </div>
      </div>
    </section>

    <nav class="bg-pink-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul class="hidden md:flex justify-center py-3 gap-6 text-sm font-medium text-white">
          <button
            v-for="item in navItems"
          :key="item.id"
          @click="navigate(item.path)"
            class="block py-2 text-sm font-medium hover:text-pink-600 "
          >
            {{ item.name }}
          </button>
        </ul>

        <section v-if="isMobileMenuOpen" class="md:hidden mt-2 bg-white rounded-lg shadow-md p-4 space-y-3 text-center">
          <button v-for="item in navItems" :key="item.id" @click="navigate(item.path)" class="block py-2 text-sm font-medium hover:text-pink-600">
            {{ item.name }}
          </button>
        </section>
      </div>
    </nav>

    <div v-if="isWishlistOpen" class="fixed inset-0 z-[150] overflow-hidden">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" @click="isWishlistOpen = false"></div>
      
      <div class="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div class="w-screen max-w-md bg-white shadow-xl flex flex-col animate-slide-in">
          
          <div class="p-6 border-b border-gray-200 flex items-center justify-between bg-pink-950 text-white">
            <h2 class="text-xl font-bold flex items-center gap-2">
              <Icon icon="mdi:heart" class="w-6 h-6 text-pink-500" />
              បញ្ជីប្រាថ្នា ({{ wishlistCount }})
            </h2>
            <button @click="isWishlistOpen = false" class="text-gray-300 hover:text-white p-1">
              <Icon icon="mdi:close" class="w-6 h-6" />
            </button>
          </div>

          <div class="flex-1 overflow-y-auto p-6 space-y-4">
            <div v-if="wishlistItems.length === 0" class="text-center py-12 text-gray-400">
              <Icon icon="mdi:heart-broken" class="w-16 h-16 mx-auto mb-2 text-gray-300" />
              <p>មិនទាន់មានទំនិញក្នុងបញ្ជីប្រាថ្នានៅឡើយទេ</p>
            </div>
            
            <div v-else class="space-y-4">
              <div v-for="item in wishlistItems" :key="item.id" class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100 relative shadow-sm">
                <img :src="item.image" :alt="item.name" class="w-16 h-16 rounded-lg object-cover border bg-gray-200" />
                
                <div class="flex-1">
                  <h4 class="font-bold text-gray-800 text-sm">{{ item.name }}</h4>
                  <p class="text-xs text-pink-600 font-bold mt-1">${{ item.price.toFixed(2) }}</p>
                </div>

                <div class="flex items-center gap-1">
                  <button @click="emit('add-to-cart-from-wishlist', item)" class="p-2 bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-lg transition-colors" title="ថែមទៅកន្ត្រក">
                    <Icon icon="mdi:cart-plus" class="w-5 h-5" />
                  </button>
                  <button @click="emit('remove-from-wishlist', item.id)" class="text-gray-400 hover:text-red-500 p-2 transition-colors" title="លុបចេញ">
                    <Icon icon="mdi:trash-can-outline" class="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div v-if="isCartOpen" class="fixed inset-0 z-[150] overflow-hidden">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" @click="isCartOpen = false"></div>
      
      <div class="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div class="w-screen max-w-md bg-white shadow-xl flex flex-col animate-slide-in">
          
          <div class="p-6 border-b border-gray-200 flex items-center justify-between bg-pink-950 text-white">
            <h2 class="text-xl font-bold flex items-center gap-2">
              <Icon icon="mdi:cart" class="w-6 h-6 text-pink-400" />
              កន្ត្រកទិញអីវ៉ាន់ ({{ cartCount }})
            </h2>
            <button @click="isCartOpen = false" class="text-gray-300 hover:text-white p-1">
              <Icon icon="mdi:close" class="w-6 h-6" />
            </button>
          </div>

          <div class="flex-1 overflow-y-auto p-6 space-y-4">
            <div v-if="cartItems.length === 0" class="text-center py-12 text-gray-400">
              <Icon icon="mdi:cart-outline" class="w-16 h-16 mx-auto mb-2 text-gray-300" />
              <p>មិនទាន់មានទំនិញនៅក្នុងកន្ត្រកឡើយ</p>
            </div>
            
            <div v-else class="space-y-4">
              <div v-for="item in cartItems" :key="item.id" class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100 relative shadow-sm">
                <img :src="item.image" :alt="item.name" class="w-16 h-16 rounded-lg object-cover border bg-gray-200" />
                
                <div class="flex-1">
                  <h4 class="font-bold text-gray-800 text-sm">{{ item.name }}</h4>
                  <p class="text-xs text-pink-600 font-bold mt-1">${{ item.price.toFixed(2) }}</p>
                  
                  <div class="flex items-center gap-2 mt-2">
                    <button @click="emit('decrease', item.id)" class="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center text-gray-700 font-bold text-xs">-</button>
                    <span class="text-xs font-bold w-6 text-center text-gray-800">{{ item.quantity }}</span>
                    <button @click="emit('increase', item.id)" class="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center text-gray-700 font-bold text-xs">+</button>
                  </div>
                </div>

                <button @click="emit('remove', item.id)" class="text-gray-400 hover:text-red-500 p-1 transition-colors" title="លុបចេញ">
                  <Icon icon="mdi:trash-can-outline" class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div v-if="cartItems.length > 0" class="p-6 border-t border-gray-200 bg-gray-50">
            <div class="flex justify-between text-base font-bold text-gray-900 mb-4">
              <span>សរុបទឹកប្រាក់៖</span>
              <span class="text-pink-600">${{ cartTotal.toFixed(2) }}</span>
            </div>
            <button @click="openCheckout" class="w-full py-3 bg-pink-950 text-white rounded-lg font-bold hover:bg-pink-900 transition-colors shadow-md text-center">
              បន្តទៅកាន់ការទូទាត់ប្រាក់
            </button>
          </div>

        </div>
      </div>
    </div>

    <div v-if="isCheckoutOpen" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[200] p-4">
      <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative animate-fade-in">
        <button @click="isCheckoutOpen = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <Icon icon="mdi:close" class="w-6 h-6" />
        </button>
        
        <h3 class="text-xl font-bold text-pink-950 mb-4 border-b pb-2 flex items-center gap-2">
          <Icon icon="mdi:credit-card-outline" class="text-pink-600" /> ព័ត៌មានទូទាត់ប្រាក់
        </h3>

        <div class="bg-gray-50 p-3 rounded-lg text-sm space-y-2 mb-4 max-h-40 overflow-y-auto">
          <div v-for="item in cartItems" :key="item.id" class="flex justify-between text-gray-600">
            <span>{{ item.name }} (x{{ item.quantity }})</span>
            <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
          </div>
          <div class="border-t pt-2 flex justify-between font-bold text-gray-900">
            <span>ទឹកប្រាក់សរុបត្រូវបង់៖</span>
            <span class="text-pink-600">${{ cartTotal.toFixed(2) }}</span>
          </div>
        </div>

        <form @submit.prevent="handleCheckoutSubmit" class="space-y-3">
          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">អាសយដ្ឋានដឹកជញ្ជូន</label>
            <input type="text" placeholder="ឧ. ផ្ទះលេខ ១២ ផ្លូវ ២៧១ ភ្នំពេញ" class="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none" required />
          </div>
          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">លេខទូរស័ព្ទ</label>
            <input type="tel" placeholder="ឧ. 012 345 678" class="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none" required />
          </div>
          
          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">វិធីសាស្ត្រទូទាត់ប្រាក់</label>
            <select v-model="selectedPaymentMethod" class="w-full px-3 py-2 border rounded-lg text-sm bg-white focus:ring-2 focus:ring-pink-500 focus:outline-none">
              <option value="cod">ទូទាត់ប្រាក់ពេលទំនិញមកដល់ (COD)</option>
              <option value="aba_khqr">ABA Bank / ស្កែន KHQR</option>
            </select>
          </div>
          
          <div v-if="selectedPaymentMethod === 'aba_khqr'" class="mt-3 p-4 border border-dashed border-gray-300 rounded-xl text-center bg-gray-50/50 animate-fade-in">
            <p class="text-xs text-gray-600 mb-2 font-medium">សូមស្កែន QR Code ដើម្បីផ្ទេរប្រាក់៖</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ABA-Bank-KHQR-Demo" 
                  alt="ABA KHQR" class="mx-auto my-1 rounded-lg shadow-sm w-44 h-44 object-cover">
            <span class="inline-block bg-blue-50 text-blue-700 text-[10px] px-2.5 py-0.5 rounded-full font-bold mt-1">
                ABA Bank • KHQR
            </span>
          </div>
          
          <button type="submit" class="w-full mt-4 py-3 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition-all shadow-md active:scale-95">
            បញ្ជាក់ការទិញ (Confirm Order)
          </button>
        </form>
      </div>
    </div>

    <div v-if="isAuthModalOpen" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[100] p-4" @click.self="isAuthModalOpen = false">
      <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative animate-fade-in">
        <button @click="isAuthModalOpen = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <Icon icon="mdi:close" class="w-6 h-6" />
        </button>

        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold text-pink-950">
            {{ isLoginMode ? 'ចូលប្រើប្រាស់' : 'ចុះឈ្មោះគណនី' }}
          </h2>
          <p class="text-sm text-gray-500 mt-2">
            {{ isLoginMode ? 'សូមបំពេញព័ត៌មានដើម្បីបន្ត' : 'បង្កើតគណនីថ្មីដើម្បីទទួលបានការផ្ដល់ជូនពិសេស' }}
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div v-if="!isLoginMode">
            <label class="block text-sm font-medium text-gray-700 mb-1">ឈ្មោះពេញ</label>
            <input type="text" placeholder="បញ្ចូលឈ្មោះរបស់អ្នក" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none text-sm" required />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">អ៊ីមែល</label>
            <input type="email" placeholder="example@gmail.com" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none text-sm" required />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">លេខសម្ងាត់</label>
            <input type="password" placeholder="••••••••" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none text-sm" required />
          </div>

          <div v-if="!isLoginMode">
            <label class="block text-sm font-medium text-gray-700 mb-1">បញ្ជាក់លេខសម្ងាត់</label>
            <input type="password" placeholder="••••••••" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none text-sm" required />
          </div>

          <div v-if="isLoginMode" class="text-right">
            <a href="#" class="text-xs text-pink-600 hover:underline">ភ្លេចលេខសម្ងាត់?</a>
          </div>

          <button type="submit" class="w-full py-3 bg-pink-950 text-white rounded-lg font-bold hover:bg-pink-900 transition-all shadow-lg active:scale-95">
            {{ isLoginMode ? 'ចូលគណនី' : 'បង្កើតគណនីឥឡូវនេះ' }}
          </button>
        </form>

        <div class="text-center mt-8 pt-6 border-t border-gray-100 text-sm text-gray-600">
          <span>{{ isLoginMode ? "មិនទាន់មានគណនីមែនទេ?" : "មានគណនីរួចហើយមែនទេ?" }}</span>
          <button @click="isLoginMode = !isLoginMode" class="text-pink-600 font-bold hover:underline ml-2">
            {{ isLoginMode ? 'ចុះឈ្មោះនៅទីនេះ' : 'ចូលប្រើប្រាស់វិញ' }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";

// 💡 ទទួលទាំងចំនួនបេះដូង និងបញ្ជី Array ផលិតផលដែលបានចុច Like ពី App.vue
const props = defineProps({
  cartCount: { type: Number, default: 0 },
  cartItems: { type: Array, default: () => [] },
  wishlistCount: { type: Number, default: 0 },
  wishlistItems: { type: Array, default: () => [] } // <--- បន្ថែមបន្ទាត់នេះ
});

const emit = defineEmits([
  'increase', 
  'decrease', 
  'remove', 
  'checkout-success', 
  'remove-from-wishlist',       // <--- បន្ថែមសម្រាប់បញ្ជូនការលុបបេះដូង
  'add-to-cart-from-wishlist'   // <--- បន្ថែមសម្រាប់ប៊ូតុងថែមទៅកន្ត្រកពី Wishlist
]);

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isCartOpen = ref(false);
const isWishlistOpen = ref(false); // 💡 State បើក/បិទ Wishlist Sidebar
const isCheckoutOpen = ref(false);
const selectedPaymentMethod = ref('cod');
const isAuthModalOpen = ref(false);
const isLoginMode = ref(true);

const cartTotal = computed(() => {
  return props.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

const openCheckout = () => {
  isCartOpen.value = false;      
  isCheckoutOpen.value = true;   
  selectedPaymentMethod.value = 'cod';
};

const handleCheckoutSubmit = () => {
  alert("🎉 ការបញ្ជាទិញរបស់លោកអ្នកទទួលបានជោគជ័យ! យើងខ្ញុំនឹងដឹកជញ្ជូនជូនក្នុងពេលឆាប់ៗនេះ។");
  isCheckoutOpen.value = false;
  emit('checkout-success');      
};

const openAuthModal = () => {
  isAuthModalOpen.value = true;
  isLoginMode.value = true;
};

const handleSubmit = () => {
  if (isLoginMode.value) {
    alert("កំពុងចូលប្រើប្រាស់...");
  } else {
    alert("ការចុះឈ្មោះជោគជ័យ!");
  }
  isAuthModalOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => { window.addEventListener("scroll", handleScroll); });
onUnmounted(() => { window.removeEventListener("scroll", handleScroll); });

import { useCounterStore } from "../Store/FavoritCount";
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
};

const counterStore = useCounterStore();
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
.animate-slide-in {
  animation: slideIn 0.3s ease-out forwards;
}
</style>