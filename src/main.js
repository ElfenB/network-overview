import { createApp } from "vue";
import App from "./App.vue";
import router from "@/../../src/router";

import "@/../../src/css/global.css"
import "@/../../src/css/variables.css"

createApp(App).use(router).mount("#app");
