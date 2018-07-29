<template>
  <div id="app">
       <!--使用router-link 组件来导航 -->
    <!--通过传入to 属性来指定链接 -->
    <!--router-link标签默认会被渲染成一个a标签 -->
    <div class="content" >
        
        <div class="main">
            <router-view></router-view>
        </div> 
        <div class="footer">
            <div></div>
            <vFfooter></vFfooter>
        </div>
        
        </div>
    </div>
</template>

<script>
    import LoginForm from './components/LoginForm'
    import Fnav from './components/all/Fnav'
    import Ffooter from './components/all/Ffooter'
    import Fhome from './components/Home'


    export default {
        name: 'App',
        components: {
            'vLoginForm': LoginForm,
            'vFnav': Fnav,
            'vFfooter':Ffooter,
            'vFhome': Fhome
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
    .footer>div{
        height: 1.5rem;
    }
    
    

    
</style>