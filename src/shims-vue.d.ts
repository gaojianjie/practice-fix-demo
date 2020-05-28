// declare module '*.vue' {
//   import Vue from 'vue';
//   export default Vue;
// }
import Log from "./common/log.js"

declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}
// 扩充
declare module 'vue/types/vue' {
  interface Vue {
    $Log: Log
  }
}