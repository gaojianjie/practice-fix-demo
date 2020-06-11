import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import { i18n } from "@/common/i18n/i18nconfig";

Vue.use(ViewUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
