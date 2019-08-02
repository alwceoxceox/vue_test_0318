/*
vuex最核心的管理对象模块
*/
import Vue from 'vue'
import Vuex from 'vuex'
// 声明使用vue的插件
Vue.use(Vuex)
/*
包含n个状态数据的对象
*/
const state = {
    count: 0
}
/*
包含n个用来直接更新状态数据的方法对象
*/
const mutations = {
    INCREMENT (state) {
        state.count++
    },
    DECREMENT (state) {
        state.count--
    }
}
/*
包含n个用来间接更新状态数据的方法对象
*/
const actions = {
    increment (context) {
        context.commit('INCREMENT')
    },
    decrement (context) {
        context.commit('DECREMENT')
    },
    incrementIfOdd (context) {
        if (this.count % 2 === 1) {
        context.commit('INCREMENT')
        }
    },
    incrementAsync (context) {
        setTimeout(() => {
            context.commit('INCREMENT')
        }, 500)
    }
}

// 计算更新
const getters = {
    evenOrOdd (state) {
        return state.count % 2 === 1 ? '奇数' : '偶数'
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
