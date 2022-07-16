import { createApp } from "vue"
import App from "./App.vue"
import { createPinia, PiniaVuePlugin } from "pinia"
import Home from "./view/Home.vue"
import Login from "./view/Login.vue"
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createRouter, createWebHashHistory } from "vue-router"
import { Row, Column, Hidden } from 'vue-grid-responsive';

const routes = [
  { path: "/login", component: Login },
  { path: "/", component: Home },
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
app.component('row', Row);
app.component('column', Column);
app.component('hidden', Hidden);
app.config.globalProperties.axios=axios
app.use(pinia)
app.use(VueAxios, axios)
app.use(router)


new WaveUI(app, {
  // Some Wave UI options.
})
app.mount("#app")
