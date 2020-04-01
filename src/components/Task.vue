<template>
  <li class="task" :class="{ completed: task.completed }">
    {{ task.title }}
    <span class="delete" @click="removeTask(task.id)">Delete</span>
    <span v-if="task.completed" class="mark" @click="toggleTaskStatus(task.id)"
      >Unmark</span
    >
    <span v-else class="mark" @click="toggleTaskStatus(task.id)">Mark</span>
  </li>
</template>

<script>
export default {
  name: "Task",
  props: ["task"],
  methods: {
    toggleTaskStatus(id) {
      this.$store.dispatch("toggleTaskStatus", id);
    },
    removeTask(id) {
      this.$store.dispatch("removeTask", id);
    }
  }
};
</script>

<style scoped>
.task {
  padding: 10px;
  margin-bottom: 0.5rem;
  border: 0.5px solid #999;
  border-radius: 5px;
  color: #34495e;
  font-weight: bold;
}

.task:before {
  content: "\2002";
}

.task:hover {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: #41b883;
}

.completed:before {
  content: "\2714";
}

.mark {
  display: block;
  float: right;
  color: #41b883;
  width: 4.25rem;
  height: 1.25rem;
  text-align: center;
}

.delete {
  display: block;
  float: right;
  color: #d22;
  width: 4.25rem;
  height: 1.25rem;
  text-align: center;
}
</style>
