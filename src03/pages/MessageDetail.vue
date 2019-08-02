<template>
  <div>
    <ul>
        <li>ID: {{id}}</li>
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
    props: {
      id: Number
    },
    data () {
          return {
              messageDetail: {}
          }
      },
    mounted () {
        setTimeout(() => {
            // 得到当前的id
            const id = this.id
            const detail = messageDetails.find(detail => detail.id === id)
            this.messageDetail = detail
        }, 1000)
    },
    watch: {
        id (value) {
            console.log('watch $route()')
            setTimeout(() => {
                const detail = messageDetails.find(detail => detail.id === value)
                this.messageDetail = detail
            }, 1000)
        }
    }
  }
</script>
<style scoped>
</style>
