import Vue from 'vue';
import ElementUI from 'element-ui';
import router from './router/index'
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'
import '@/assets/css/common.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app');