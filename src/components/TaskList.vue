<template>
  <ul class="tasks">
    <Task v-for="task in tasks" :key="task.id" :task="task" />
  </ul>
</template>

<script>
import { mapState } from "vuex";
import Task from "@/components/Task.vue";

export default {
  name: "TaskList",
  components: {
    Task
  },
  computed: mapState(["tasks"])
};
</script>

<style scoped>
.tasks {
  padding: 0;
  list-style-type: none;
}
</style>
