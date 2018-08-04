<template>
  <div class="Home"  >
    <vFnav></vFnav>
    <div class="tarbar">
            <ul>
                <li @click="homeIndex">推荐</li>
                <li><router-link to="/Home/xinpin">新品</router-link></li>
                <li  @click="zhongchou">众筹</li>
                <li><router-link to="/">福利社</router-link></li>
                <li><router-link to="/">限时购</router-link></li>
                <li><router-link to="/">家居</router-link></li>
                <li><router-link to="/">服装</router-link></li>
            </ul>
        </div>
        <router-view></router-view>
    <vFfooter></vFfooter>

  </div> 
</template>
<script>
import Fnav from '../components/all/Fnav'
import Ffooter from '../components/all/Ffooter'
 export default {
   name: 'HelloWorld',
   data() {
     return {    
     }
   },
  components: {
    'vFnav': Fnav,
    'vFfooter': Ffooter
  },
     methods: {
         homeIndex:function(){
            this.$router.push({name:'homeIndex'});
            },error(msg){
            this.$Message.error(msg);
        },
        zhongchou:function(){

            this.$router.push('/Home/zhongchou');
            },error(msg){
            this.$Message.error(msg);
        }
    }

   }
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
       
        .tarbar {
            display: flex;
        }

        .tarbar ul {
            flex: 1;
            display: flex;
            height: 1rem;
            overflow: hidden;
            background-color: #f9f9f9;
            text-align: center;
        }
        .tarbar ul li {
            justify-content: space-between;
            text-align: center;
            flex-wrap: wrap;
            flex: 1;
            list-style: none;
            line-height: 1rem;
        }
        .tarbar ul li a{
            color: #999;
        }
        .tarbar ul li a:hover{
            color: red;
        }
        .tarbar ul li:hover {
            border-bottom: red solid 0.06rem;
        }

      
        
  
</style>