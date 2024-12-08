<template>
  <div class="container">
    <h2 class="text-center mt-5">My Vue Todo App</h2>

    <!-- input -->
     <div class="d-flex">
      <input type="text" placeholder="Enter task" class="form-control">
      <button @click="submitTask" class="btn btn-warning rounded-0">SUBMIT</button>
     </div>

     <!-- Task Table -->
     <table class="table table-bordered mt-5">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Status</th>
      <th scope="col" class="text-center">#</th>
      <th scope="col" class="text-center">#</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task, index) in tasks" :key="index">
      <td>{{task.name}}</td>
      <td>{{task.status}}</td>
      <td>
        <div class="text-center">
          <span class="fa fa-pen"></span>
        </div>
      </td>
      <td>
        <div class="text-center">
          <span class="fa fa-trash"></span>
        </div>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return {
      tasks: [
        {
          name: 'Steal bananas from the store',
          status: 'to-do'
        },
        {
          name: 'Eat 1kg chocolate in 1 hour',
          status: 'in-progress'
        }
      ]
    }
  },

  method

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
</style>