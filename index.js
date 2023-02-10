import { createApp, Vue } from "https://mavue.mavo.io/mavue.js";

let app = createApp({
	data: {
		tasks: [
			{
				done: false,
				task: "",
				active: true,
			}
		]
	},

	methods: {
		addItem() {
			this.tasks.push({});
			this.tasks.at(-1).active = true;
		},

		deleteItem(i) {
			this.tasks.splice(i, 1);

			if (this.tasks[i-1]) {
				this.tasks[i-1].active = true;
			}
		},

		deleteItemIfEmpty(i) {
			if (this.tasks[i].title === "") {
				this.deleteItem(i);
			}
		},

		clearCompleted () {
			this.tasks = this.tasks.filter(task => !task.done);
		}
	}
}, "#app");

// For debugging
globalThis.app = app;