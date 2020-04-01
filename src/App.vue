<template>
  <div class="container">
    <h1>To-Do List Example</h1>
    <div id="app">
      <NewTaskForm />
      <TaskList />
    </div>
  </div>
</template>

<script>
import NewTaskForm from "@/components/NewTaskForm.vue";
import TaskList from "@/components/TaskList.vue";

export default {
  name: "App",
  components: {
    NewTaskForm,
    TaskList
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

html {
  font-family: "Open Sans", sans-serif;
  background: linear-gradient(45deg, #5189c1 25%, #41b883);
  height: 100%;
  color: #333;
}

body {
  display: flex;
  height: 100%;
  margin: 0;
}

.container {
  width: 35rem;
  margin: auto;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}

h1 {
  text-align: center;
}
</style>
