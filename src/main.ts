import { createApp } from 'vue'
import router from "./router/index.ts"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'


console.log(router.getRoutes(),'router');
const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
