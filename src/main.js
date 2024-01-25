import { createApp } from 'vue'
import './style.css'
import { router } from './router.js'
import App from './App.vue'

import { onHandle } from './stores/auth.js'
onHandle()

createApp(App).use(router).mount('#app')
