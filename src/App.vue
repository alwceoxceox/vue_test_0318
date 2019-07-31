<template>

  <div class="todo-container">
    <div class="todo-wrap">
      <Header ref="header"></Header>
      <List :todos="todos"></List>
      <!--<Footer :selectAll="selectAll" :todos="todos" :deleteCompleted="deleteCompleted"/>-->
      <Footer>
        <input type="checkbox" v-model="checkAll" slot="left"/>
        <button class="btn btn-danger" v-if="completedCount>0" @click="deleteCompleted" slot="right">清除已完成任务</button>
      </Footer>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  import PubSub from 'pubsub-js'
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  export default {
    data () {
      return {
        todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
      }
    },
    components: {
      Header,
      List,
      Footer
    },
    mounted () {
      this.$refs.header.$on('addTodo', this.addTodo)
      this.$bus.$on('deleteTodo', this.deleteTodo)
      this.token = PubSub.subscribe('updateTodo', (msg, {todo, complete}) => {
        this.updateTodo(todo, complete)
      })
    },
    beforeDestroy () {
      this.$refs.header.$off('addtodo')
      this.$bus.$off('deleteTodo')
      PubSub.unsubscribe(this.token)
    },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      // 全选或全不选
      selectAll (isAll) {
        this.todos.forEach(todo => (todo.complete = isAll))
      },
      // 删除已完成的
      deleteCompleted () {
        this.todos = this.todos.filter(todo => !todo.complete)
      }
    },
    watch: {
      todos: {
        deep: true,
        handler: function (value) {
          localStorage.setItem('todos_key', JSON.stringify(value))
        }
      }
    }
  }
</script>
<style scoped>
   /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
