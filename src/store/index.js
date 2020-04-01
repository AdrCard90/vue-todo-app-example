import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    ADD_TASK(state, title) {
      const newTask = {
        id: Math.floor(Math.random() * 10000000),
        title,
        completed: false
      };
      state.tasks.push(newTask);
    },
    REMOVE_TASK(state, id) {
      const index = state.tasks.findIndex(task => task.id === id);
      state.tasks.splice(index, 1);
    },
    TOGGLE_TASK_STATUS(state, id) {
      const selectedTask = state.tasks.find(task => task.id === id);
      selectedTask.completed = !selectedTask.completed;
    }
  },
  actions: {
    addTask({ commit }, title) {
      commit("ADD_TASK", title);
    },
    removeTask({ commit }, id) {
      commit("REMOVE_TASK", id);
    },
    toggleTaskStatus({ commit }, id) {
      commit("TOGGLE_TASK_STATUS", id);
    }
  }
});
