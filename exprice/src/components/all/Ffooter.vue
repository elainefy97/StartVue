<template>
     <div class="footer">
         <div class="footerItem">
             <span>首页</span>
             <span><router-link to="/"><i class="fa fa-home" ></i></router-link></span>
         </div>
         <div class="footerItem">
             <span>分类</span>
             <span><router-link to="/"><i class="fa fa-folder"></i></router-link></span>
         </div>
         <div class="footerItem">
             <span>识物</span>
             <span><router-link to="/"><i class="fa fa-map" ></i></router-link></span>
         </div>
         <div class="footerItem">
             <span>购物车</span>
             <span><router-link to="/shoppingcart"><i class="fa fa-shopping-cart" ></i></router-link></span>
         </div>
         <div class="footerItem">
             <span>个人</span>
             <span><router-link to="/user"><i class="fa fa-user" ></i></router-link></span>
         </div>


    </div>



      
</template>

<script>
export default {
  name: 'Ffooter',
  data () {
    return {
       theme1: 'light'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        .footer {
          position: fixed;
          width: 100%;
          bottom: 0;
          font-size: 0.4rem;
          border-top: solid 0.03rem #ccc;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          background-color: #f9f9f9;
          align-items: center;
        }

        .footer .footerItem {
          display: flex;
          flex-direction: column;
        }

        .footer .footerItem:hover {
          color: firebrick;
        }

        .footer .footerItem a {
          color: #999999;
        }

        .footer .footerItem a:hover {
          color: firebrick;
        }

        
</style>
