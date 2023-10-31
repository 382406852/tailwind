import { createRouter, Router, createWebHashHistory } from 'vue-router';
let files: any = import.meta.glob('@/views/**/*.vue');
let routes = [
    {
        name: 'layout',
        path: '/',
        component: () => import('@/layout/index.vue'),
        children: []
    }
];
function loadDynamic(router: Router, files: object) {
    Object.keys(files).forEach(async (key: any) => {
        //console.log(key, 'key');
        let menu = await files[key]();
        console.log(menu.default.menuLabel, 'menu.default.menuLabel');
        let currentModule = key.replace(/\/src\/views\/|\/index\.vue/g, '');
        router.addRoute('layout', {
            meta: { label: menu.default.menuLabel },
            path: `${currentModule}`,
            component: () => import(`@/views/${currentModule}/index.vue`)
        });
    });
}

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes // `routes: routes` 的缩写
});
loadDynamic(router, files);

export default router;
