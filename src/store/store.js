import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        theme:'light'
        //这里放全局参数

    },

    mutations: {
        SET_THEAM(state, value) {
            console.log(value)
            state.theme = value;
        },
        //这里是set方法

    },
})