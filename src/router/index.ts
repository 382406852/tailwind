import { createRouter, Router, createWebHashHistory } from 'vue-router';
let files = import.meta.glob('@/views/**/*.vue');
let routes = [
    {
        name: 'layout',
        path: '/',
        component: () => import('@/layout/index.vue'),
        children: []
    }
];
/**
 *
 * @param router router实例
 * @param files 文件列表
 */
function loadDynamic(router: Router, files: object) {
    directoryReading(router, files).then((firstRoute) => {
        setTimeout(() => {
            router.push(`/${firstRoute}`);
        }, 0);
    });
}

/**
 * 因为读取文件时异步得所以得用promise 包装下
 * @param router
 * @param files
 * @returns promise
 */
function directoryReading(router: Router, files: object) {
    return new Promise((resolve) => {
        let firstRoute: string = '';
        let keys = Object.keys(files);
        keys.forEach(async (key: any, index: number) => {
            console.log(files[key], typeof key, 'files[JSON.stringify(key)]');
            let menu = await files[key]();
            let currentModule = key.replace(/\/src\/views\/|\/index\.vue/g, '');
            if (!index) firstRoute = currentModule;
            router.addRoute('layout', {
                meta: { label: menu.default.menuLabel },
                path: `${currentModule}`,
                component: () => import(`@/views/${currentModule}/index.vue`)
            });
            if (index == keys.length - 1) {
                resolve(firstRoute);
            }
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
