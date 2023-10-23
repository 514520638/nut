<template>
    <div class="layout">
        <!-- 上面导航栏 -->
        <div class="header">
            <Header></Header>
        </div>
        <!-- 左侧目录 -->
        <div class="menu">
            <Menu></Menu>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import  Header  from "./header/header.vue";
import  Menu  from "./menu/menu.vue";

export default {
    components: {
        Header,
        Menu
    },
}
</script>

<style scope lang="less">
.layout {
    .header {
        background-color: aqua;
        height: 6vh;
    }

    .menu {
        background-color: aquamarine;
        position: fixed;
        top: 6vh;
        left: 0;
        bottom: 0;
        width: 10vw;
    }



}
</style>