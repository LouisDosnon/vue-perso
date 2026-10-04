import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import router from "@/router.vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {Components, createBootstrap, Directives} from "bootstrap-vue-next";

const app = createApp(App)

app.use(router)
app.use(createBootstrap()) // Important
for (const name in Components) {
    app.component(name, Components[name])
}
for (const name in Directives) {
    app.directive(name.replace(/^v/, ''), Directives[name])
}
app.mount('#app')
