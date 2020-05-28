import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Log from './common/log.ts'

Vue.prototype.$Log = Log;
Vue.use(VueI18n)