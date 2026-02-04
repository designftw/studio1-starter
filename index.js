import { createApp } from "vue";

const app = createApp({
  template: "#template",

  data() {
    return {
      tasks: [
        {
          done: false,
          title: "",
          active: true,
        },
      ],
    };
  },

  methods: {
    addItem() {
      this.tasks.push({});

      this.setActive();
    },

    deleteItem(i) {
      this.tasks.splice(i, 1);
      this.setActive(i - 1);
    },

    clearCompleted() {
      this.tasks = this.tasks.filter((task) => !task.done);
    },

    setActive(i) {
      for (let task of this.tasks) {
        task.active = false;
      }

      if (i >= 0 && this.tasks[i]) {
        this.tasks[i].active = true;
      } else if (this.tasks.length > 0) {
        this.tasks.at(-1).active = true;
      }
    },
  },
})
  .directive("focus", { mounted: (e) => e.focus() })
  .mount("#app");

// so you can run app.addItem() and app.tasks[0] in the console
window.app = app;
