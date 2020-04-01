<template>
  <form @submit.prevent="addTask">
    <input
      class="todo-input"
      type="text"
      placeholder="Add a new task"
      v-model="task"
    />
  </form>
</template>

<script>
export default {
  name: "NewTaskForm",
  data() {
    return {
      task: ""
    };
  },
  methods: {
    addTask() {
      if (this.task) {
        this.$store.dispatch("addTask", this.task);
        this.task = "";
      }
    }
  }
};
</script>

<style>
.todo-input {
  font-family: "Open Sans", sans-serif;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  border-radius: 0.25rem;
  border-style: none;
  border: solid 1px lightgray;
  box-sizing: border-box;
}
</style>
