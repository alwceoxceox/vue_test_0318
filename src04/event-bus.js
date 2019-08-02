/*
全局事件总线对象模块
*/
const eventBus = {}
// 缓存监听回调函数: listnersContainer = {eventName1: [listener1, listener2], eventName2: [listner3]}
let listenersContaniner = {}

/*
绑定自定义事件监听的方法: on(eventName, listener)
*/
eventBus.on = function (eventName, listener) {
    // 取出对应的listeners
    let listeners = listenersContaniner[eventName]
    // 如果还没存在, 创建一个空数组并保存
    if (!listeners) {
        listenersContaniner[eventName] = listeners = []
    }
    // 将新的listener保存到对应的listeners
    listeners.push(listener)
}
/*
分发自定义事件的方法: emit(eventName, data)
*/
eventBus.emit = function (eventName, data) {
    // 得到对应的listeners
    const listeners = listenersContaniner[eventName]
    // 如果有监听回调, 调用所有Listener
    if (listeners && listeners.length) {
        listeners.forEach(listener => {
            listener(data)
        })
    }
}
/*
解绑事件监听的方法: off(eventName)
*/
eventBus.off = function (eventName) {
    // 解绑所有监听
    if (eventName === undefined || eventName === null) {
        listenersContaniner = {}
    } else {
        listenersContaniner[eventName] = []
    }
}
export default eventBus
