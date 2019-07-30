<template>

  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"></Header>
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"></List>
      <Footer :selectAll="selectAll" :todos="todos" :deleteCompleted="deleteCompleted"></Footer>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  import './base.css'
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
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      updateTodo (todo, complete) {
        todo.complete = complete
      },
      // 全选或全不选
      selectAll (isAll) {
        this.todos.forEach(todo => todo.complete = isAll)
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
