import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store.js';
import ViewUI from 'view-design';
import "view-design/dist/styles/iview.css";
import "./assets/css/publicClass.less";
import "./modules"
import { i18n } from './common/i18n/i18n.js';
Vue.use(ViewUI);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
