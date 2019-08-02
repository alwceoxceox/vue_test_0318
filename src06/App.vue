<template>
  <div>
    <h1>click {{$store.state.count}} times, count is {{$store.getters.evenOrOdd}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    methods: {
        increment () {
            this.$store.dispatch('increment')
        },
        decrement () {
            this.$store.dispatch('decrement')
        },
        incrementIfOdd () {
            this.$store.dispatch('incrementIfOdd')
        },
        incrementAsync () {
            this.$store.dispatch('incrementAsync')
        }
    }
  }
</script>
<style scoped>
</style>
