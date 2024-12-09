<template>
  <div id="app" class="text-center">
    <nav>
    <router-link to="/HomePage" >HomePage</router-link> |
    <router-link to="/AboutPage">AboutPage</router-link> |
    <router-link to="/dashboard">DashBoard</router-link>
    </nav>
    <todo-app></todo-app>
    <router-view/>
  </div>
</template>

<script>
import TodoApp from './components/TodoApp.vue'

export default {
  name: 'App',
  components: {
    TodoApp
  }
}
</script>