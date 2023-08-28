import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filter.js'
import $httpMessageState from './methods/pushMessageState.js'

const app = createApp(App)
// filter 為自定義變數名稱，前面加上 $ 可避免與區域元件的變數產生衝突
app.config.globalProperties.$filter = { currency, date }
app.config.globalProperties.$httpMessageState = $httpMessageState
app.use(VueAxios, axios)
app.use(router)
app.component('LoadingView', Loading) // 全域註冊該元件，因為在所有地方都會用到
app.mount('#app')
