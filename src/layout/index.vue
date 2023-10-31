<script setup lang="ts">
import { RouteRecordNormalized } from 'vue-router';
import { reactive, onMounted } from 'vue';
import router from '@/router/index.ts';
type route = { path: string; label: string };
let currentRoutes: RouteRecordNormalized[] = reactive(router.getRoutes());

onMounted(() => {
    currentRoutes.length = 0;
    currentRoutes = router.getRoutes().filter((route: RouteRecordNormalized) => route.path !== '/');
    console.log(currentRoutes, 'onMounted');
});
let routes: route[] = reactive([
    {
        path: '/a',
        label: '测试路由1'
    },
    {
        path: '/b',
        label: '测试路由2'
    },
    {
        path: '/c',
        label: '测试路由3'
    },
    {
        path: '/d',
        label: '测试路由4'
    }
]);
function changeRoute() {
    console.log('chengeRoute');
}
function closeRoute(route: route) {
    let index = routes.indexOf(route);
    routes.splice(index, 1);
}
</script>

<template>
    <el-row>
        <el-col class="bg-gray h-screen" :span="3">
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                :default-active="currentRoutes[0].path"
                text-color="#fff"
                router
            >
                <el-menu-item :index="route.path" v-for="route in currentRoutes" :key="route.path">
                    <span>{{ route.meta.label }}</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="21">
            <el-card>
                <template #header>
                    <div class="w-full text-2xl">周师的后台管理系统</div>
                </template>
                <el-row>
                    <el-col :span="24">
                        <el-tag
                            v-for="tag in routes"
                            :key="tag.path"
                            @click="changeRoute"
                            @close="closeRoute(tag)"
                            class="mx-1"
                            closable
                        >
                            {{ tag.label }}
                        </el-tag>
                    </el-col>
                </el-row>
            </el-card>
            <router-view></router-view>
        </el-col>
    </el-row>
</template>

<style scoped></style>
