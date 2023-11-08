import { createApp } from 'vue';
import router from './router/index.ts';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { useRouteStore } from '@/store/index.ts';
import './style.css';
import App from './App.vue';
// Vue3的引入方法
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(ElementPlus);
app.use(router);
const RouteStore = useRouteStore();
router.beforeEach((to, from, next) => {
    if (to.meta.label) {
        //need add pinia
        RouteStore.addRoute(to);
        console.log(to.meta.label, 'beforeEach');
    }
    next();
});

setTimeout(() => {
    app.mount('#app');
}, 0);
