<script setup lang="ts">
import { type RouteLocationNormalized, RouteRecordNormalized, useRouter } from 'vue-router';
import { reactive, onMounted, computed } from 'vue';
import { useRouteStore } from '@/store/index.ts';
import router from '@/router/index.ts';
const RouteStore = useRouteStore();
let currentRoutes: RouteRecordNormalized[] = reactive([]);
const routerRouter = useRouter();
const currentPath = computed(() => {
    console.log('route changed', routerRouter.currentRoute.value.path);
    return routerRouter.currentRoute.value.path;
});

onMounted(() => {
    currentRoutes.length = 0;
    currentRoutes.push(
        ...router.getRoutes().filter((route: RouteRecordNormalized) => route.path !== '/')
    );
    console.log(currentRoutes, 'onMounted');
});
function changeRoute(route: RouteLocationNormalized) {
    console.log('chengeRoute');
    routerRouter.push(route.fullPath);
}
function closeRoute(route: RouteLocationNormalized) {
    RouteStore.deleteRoute(route);
}
</script>

<template>
    <el-row>
        <el-col class="bg-gray h-screen" :span="3">
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                text-color="#fff"
                :default-active="currentPath"
                router
            >
                <el-menu-item :index="route.path" v-for="route in currentRoutes" :key="route.path">
                    <span>{{ route.meta.label }}{{ route.path }}</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="21">
            <el-card>
                <template #header>
                    <div class="w-full text-2xl">周师的后台管理系统{{ currentRoutes.length }}</div>
                </template>
                <el-row>
                    <el-col :span="24">
                        <el-tag
                            v-for="route in RouteStore.dynamicRoutes"
                            :key="route.path"
                            @click="changeRoute(route)"
                            @close="closeRoute(route)"
                            class="mx-1 cursor-pointer"
                            :effect="currentPath == route.fullPath ? 'dark' : 'light'"
                            closable
                        >
                            {{ route.meta.label }}{{ route.fullPath }}
                        </el-tag>
                    </el-col>
                </el-row>
            </el-card>
            <router-view></router-view>
        </el-col>
    </el-row>
</template>

<style scoped></style>
