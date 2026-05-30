import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Icon } from "@iconify/vue";
import { router } from "./routes/index.js";
import { createPinia } from 'pinia';

createApp(App)
.use(router)
.use(createPinia())
.component('Icon', Icon)
.mount('#app')
