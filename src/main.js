import { createApp } from "vue"
import App from "./App.vue"
import { createPinia, PiniaVuePlugin } from "pinia"
import Home from "./view/Home.vue"
import Login from "./view/Login.vue"
import WaveUI from "wave-ui"

import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  next()
})

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)

new WaveUI(app, {
  // Some Wave UI options.
})
app.mount("#app")
