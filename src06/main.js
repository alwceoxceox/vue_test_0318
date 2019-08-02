// 入口文件
import Vue from 'vue'
import store from './vuex/store.js'
import App from './App.vue'
/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
    store
})
