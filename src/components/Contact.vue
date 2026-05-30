<template>
  <div
    id="Contact"
    class="min-h-screen scroll-mt-20 bg-pink-950 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        <div class="bg-white p-8 rounded-lg shadow-xl border border-gray-100 flex flex-col justify-between">
          <div>
            <h2 class="text-3xl font-serif font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form class="space-y-5">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-800 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="mt-1 block w-full border border-gray-200 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-800 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  class="mt-1 block w-full border border-gray-200 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Your@email.com"
                  required
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-800 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  class="mt-1 block w-full border border-gray-200 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Tell us about your fragrance needs ..."
                  required
                ></textarea>
              </div>
            </form>
          </div>

          <div class="mt-6">
            <button
              type="submit"
              class="w-full bg-pink-700 text-white font-medium py-3 rounded-lg hover:bg-pink-800 transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </div>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-xl border border-gray-100 flex flex-col justify-between">
          <div>
            <h2 class="text-3xl font-serif font-semibold text-gray-900 mb-8">
              Contact Information
            </h2>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-pink-200 p-3 rounded-full mr-4 flex items-center justify-center w-12 h-12 flex-shrink-0">
                  <Icon icon="fa-solid:phone" class="text-pink-950 text-lg" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900">Phone</h3>
                  <p class="text-gray-800 font-medium">+1 (234) 567-8900</p>
                  <p class="text-gray-500 text-sm">Mon-Fri: 9am-6pm</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-pink-200 p-3 rounded-full mr-4 flex items-center justify-center w-12 h-12 flex-shrink-0">
                  <Icon icon="fa-solid:envelope" class="text-pink-950 text-lg" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900">Email</h3>
                  <p class="text-gray-800 font-medium">contact@perfumelux.com</p>
                  <p class="text-gray-800 font-medium">support@perfumelux.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-pink-200 p-3 rounded-full mr-4 flex items-center justify-center w-12 h-12 flex-shrink-0">
                  <Icon icon="fa-solid:map-marker-alt" class="text-pink-950 text-lg" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900">Our Boutique</h3>
                  <p class="text-gray-800 font-medium">123 Perfume Street</p>
                  <p class="text-gray-600">Paris, France 75001</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 border-t border-gray-100 pt-6">
            <h3 class="text-sm font-semibold text-gray-900 mb-3">Follow Us</h3>
            <div class="flex space-x-3">
              <a href="#" class="bg-pink-200 hover:bg-pink-300 p-3 rounded-full transition duration-300 flex items-center justify-center w-10 h-10">
                <Icon icon="fa-brands:instagram" class="text-pink-950" />
              </a>
              <a href="#" class="bg-pink-200 hover:bg-pink-300 p-3 rounded-full transition duration-300 flex items-center justify-center w-10 h-10">
                <Icon icon="fa-brands:facebook-f" class="text-pink-950" />
              </a>
              <a href="#" class="bg-pink-200 hover:bg-pink-300 p-3 rounded-full transition duration-300 flex items-center justify-center w-10 h-10">
                <Icon icon="fa-brands:twitter" class="text-pink-950" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>