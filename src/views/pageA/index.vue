<script setup lang="ts">
import { ref, Ref, defineOptions } from 'vue';
defineOptions({
    name: 'pageA',
    menuLabel: '菜单一'
});

let test: Ref<string> = ref('test');
</script>

<template>
    <div>pageA-{{ test }}</div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
