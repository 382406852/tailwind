// 导入定义仓库的方法
import { defineStore } from 'pinia';

// 导入枚举的所有仓库名
import { Names } from './store-name';
import { type RouteLocationNormalized } from 'vue-router';

// defineStore()定义一个仓库，第一个参数作为名称，也可看作是id
// 这个id(名称)是必要的，Pinia使用它来讲store连接DevTools，可以通过调试工具查看
export const useRouteStore = defineStore(Names.ROUTE, {
    state: () => {
        return {
            // 定义初始化的值
            routes: <RouteLocationNormalized[]>[]
        };
    },
    // 类似于computed可以帮我们修饰我们的值
    getters: {
        dynamicRoutes: (state) => {
            return state.routes;
        }
    },
    // 可以操作异步 和 同步 提交state
    actions: {
        /**
         * 添加路由和判重
         * @param route
         * @returns
         */
        addRoute(route: RouteLocationNormalized) {
            let hasEqualRoute: boolean = this.routes.some(
                (someRoute) => someRoute.fullPath === route.fullPath
            );
            if (hasEqualRoute) return;
            this.routes.push(route);
        },
        deleteRoute(route: RouteLocationNormalized) {
            debugger;
            let index: number = this.routes.findIndex((value, index, obj) => {
                return true;
            });
        }
    }
});
