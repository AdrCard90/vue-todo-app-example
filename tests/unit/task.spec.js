import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Task from "@/components/Task";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Task.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Task, {
      propsData: {
        task: { id: 1, title: "Do Homework", completed: false }
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should be a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("should print the task title", () => {
    const title = "Do Homework";
    expect(wrapper.text()).toContain(title);
  });

  it("should call toggleTaskStatus method when Mark or Unmark text is clicked", () => {});
});
