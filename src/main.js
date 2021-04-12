import Vue from 'vue'
import App from './App.vue'
import VueQrcodeReader from "vue-qrcode-reader";
import VueRouter from 'vue-router';
import routes from './routes';
import VModal from 'vue-js-modal';
import Simplert from 'vue2-simplert-plugin';
require('vue2-simplert-plugin/dist/vue2-simplert-plugin.css')
import store from "./store";

Vue.config.productionTip = false

Vue.use(VueQrcodeReader);
Vue.use(VueRouter);
Vue.use(Simplert);
Vue.use(VModal, { dialog: true })

const router = new VueRouter({routes});
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
