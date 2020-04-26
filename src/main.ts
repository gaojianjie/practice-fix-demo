import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/store.js';
import ViewUI from 'view-design';
import "view-design/dist/styles/iview.css";
import Log from './common/log.js'
Vue.use(ViewUI);

Vue.config.productionTip = false;
Vue.prototype.$Log = Log;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
