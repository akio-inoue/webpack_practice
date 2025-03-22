import "./reactApp.jsx";
import my from "./my.js";
import "../stylesheets/main.scss";

import { createApp } from "vue";
import VueApp from "./VueApp.vue";

const app = createApp(VueApp);
app.mount("#vue-root");

console.log("This is index.js");
my();
