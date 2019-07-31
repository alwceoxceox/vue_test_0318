<template>
  <div>
    <div class="container">
        <Search></Search>
        <Main></Main>
  </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Search from './components/Search.vue'
import Main from './components/Main.vue'
  export default {
      components:{
          Search,
          Main
      }
  }
</script>
<style scoped>
</style>
