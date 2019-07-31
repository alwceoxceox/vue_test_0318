<template>
  <div>
    <ul>
        <li>ID: {{$route.params.id}}</li>
        <li>TITLE: {{messageDetail.title}}</li>
        <li>CONTENT: {{messageDetail.content}}</li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  const messageDetails = [
    {id: 1, title: 'message001', content: 'message content001'},
    {id: 3, title: 'message003', content: 'message content003'},
    {id: 5, title: 'message005', content: 'message content005'}
  ]
  export default {
      data () {
          return {
              messageDetail: {}
          }
      },
    mounted () {
        setTimeout(() => {
            const id = this.$route.params.id * 1
            console.log(id)
            const detail = this.messageDetails.find(detail => detail.id === id)
            console.log(detail)
            this.messageDetail = detail
        }, 1000)
    },
    watch: {
        $route (value) {
            console.log('watch $route()')
            setTimeout(() => {
                const id = this.value.params.id * 1
                console.log(id)
                const detail = this.messageDetails.find(detail => detail.id === id)
                this.messageDetail = detail
            }, 1000)
        }
    }
  }
</script>
<style scoped>
</style>
