// 入口文件
import Vue from 'vue'
import App from './App.vue'
import Item from './components/Item.vue'
import './base.css'
// 注册全局组件
Vue.component('Item', Item)
// 登入一个vm对象作为
Vue.prototype.$bus = new Vue()
/* 只能当前文件有效 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
