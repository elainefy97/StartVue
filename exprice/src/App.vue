<template>
  <div id="app">
       <!--使用router-link 组件来导航 -->
    <!--通过传入to 属性来指定链接 -->
    <!--router-link标签默认会被渲染成一个a标签 -->
     <router-view></router-view>
    </div>
</template>

<script>
    
    export default {
        name: 'App',
        components: {
       
        }
    }
</script>
<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
     
    }


    
</style>