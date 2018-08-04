<template>
    <div class="content">
        <div class="shopHeader">
            <div></div>
            <div>购物车</div>
            <div>
                <span>领券</span>
                <span>编辑</span>    
            </div>   
            
        </div>
        <div class="shopHint">
            <ul>
                <li>30天无忧退换货</li>
                <li>48小时快速退款</li>
                <li>满88元免邮费</li>
            </ul>
        </div> 
        <div class="addPrice">
            <div>全场加价购</div>
            <div class="changePrice">
                再购<span>130</span>元立享满130元可超值换购
            </div>
             <div>
                 <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                 <span style="background-color:grey;height:0.5rem;width:0.02rem" >&nbsp;</span>
                 <span>查看换购</span>
             </div>
             
               <!-- Example of check-circle-o -->
        </div>
        <div class="space"></div>
        <div class="shopProduct">
            <div v-for="items in shopCartBuyItem">
                <div class="shopProductItem" >
                    <span ><i v-bind:class="shopCartCount[items.id].check" v-on:click="changeCheck(items.id)"></i></span>
                    <img src="" alt="" height="90rem" width="90rem" v-bind:src="items.img">
                    <div class="shopProductNamePrice">
                        <div class="shopProductName">
                        <span>{{items.name}}</span>
                        <span>{{items.hint}}</span>
                        </div>
                        <div class="shopProductPrice">
                            <span>￥<span>{{items.price}}</span> </span>
                            <div class="addSub">
                                <table >
                                    <tr>
                                        <td v-on:click="allShopProductSub(items.id)">-</td>
                                        <td><input type="number" value="1" v-bind:value="shopCartCount[items.id].count" v-on:change="changePrice(items.id)"></td>
                                        <td v-on:click="allShopProductAdd(items.id)">+</td>
                                    </tr>
                                </table>
                                
                            </div>

                        </div>
                    </div>
                </div>
            <hr>
            </div>
            
        </div>
        <div class="space"></div>
        <div class="shopElse">
            <div class="shopElseHeader" >
                <img src="static/image/shopelse1.png" alt="" width="40rem" height="40rem">
                <span>看了该商品的还买了</span>
            </div>
            <div class="shopElseProduct">
                <div class="shopElseProductItem" v-for="items in shopCartItem">
                    <div class="shopElseProductImg">
                        <img src="" alt="" width="170rem" v-bind:src='items.img'>
                        <div>{{items.hint}}</div>
                    </div>
                    
                    <div>{{items.name}}</div>
                    <div>{{items.price}}</div>
                </div>
            </div>
        </div>
        <div class="shopFooter1">
            <div></div>
            <div class="shopFooter2">
                <span><i v-bind:class="allCheckClass" v-on:click="changeAllCheck">&nbsp;&nbsp;全选</i></span>
                <span> 合计:￥ <span>{{allMoney}}</span></span>
                <span>下单</span>
       
            </div>
            
        </div>
    <div class="outfooter">
        <div></div>
    <vFfooter></vFfooter>
    </div>   
    </div>
</template>

<script>

import Ffooter from '../components/all/Ffooter'
export default {
  name: 'test1',
  components: {
          'vFfooter': Ffooter
  },
  data() {
    return {
      shopCartItem: [],
      shopCartBuyItem: [],
      allShopProduct: '',
      shopCartCount: [{
        "idCount": 1,
        "count": 1,
        "check": "fa fa-circle-thin",
        "flag": false,
        "price": 699.00
      }, {
        "idCount": 2,
        "count": 1,
        "check": "fa fa-circle-thin",
        "flag": false,
        "price": 59.00
      }],
      allMoney: 0.00,
      allCheckFlag: false,
      allCheckClass: 'fa fa-circle-thin'
    }
  },
  methods: {

    //   allMoneyInit:function(){
    //        //先给总价清零
    //        var _this=this;
           
      

    //   console.log(_this.allMoney);
    //   console.log(this.shopCartCount);
    //   //每次点击+ ，都会重新计算所有被选中的allMoney
    //   for (var i = 0; i <this.shopCartCount.length; i++) {
    //     if (this.shopCartCount[i].flag == true) {
    //       this.allMoney += this.shopCartCount[i].price * this.shopCartCount[i].count;
    //     }
    //   }
    //   },
    changePrice:function(id){
       
      if (this.shopCartCount[id].count <= 0) {
        this.shopCartCount[id].count = 1;
      }
      /*若为选中状态，则更新对象中 →商品的 总价格*/
      if (this.shopCartCount[id].flag == true) {
        this.shopCartCount[id].allprice = this.shopCartCount[id].price * this.shopCartCount[id].count;
      }
      this.$options.methods.allMoneyInit();

      //先给总价清零
      this.allMoney = 0;
      //每次点击+ ，都会重新计算所有被选中的allMoney
      for (var i = 0; i < this.shopCartCount.length; i++) {
        if (this.shopCartCount[i].flag == true) {
          this.allMoney += this.shopCartCount[i].price * this.shopCartCount[i].count;
        }
      }
    },
    allShopProductSub: function (id) {
      /*最低为0 */

      this.shopCartCount[id].count--;
      if (this.shopCartCount[id].count <= 0) {
        this.shopCartCount[id].count = 1;
      }
      /*若为选中状态，则更新对象中 →商品的 总价格*/
      if (this.shopCartCount[id].flag == true) {
        this.shopCartCount[id].allprice = this.shopCartCount[id].price * this.shopCartCount[id].count;
      }


      //先给总价清零
      this.allMoney = 0;
      //每次点击+ ，都会重新计算所有被选中的allMoney
      for (var i = 0; i < this.shopCartCount.length; i++) {
        if (this.shopCartCount[i].flag == true) {
          this.allMoney += this.shopCartCount[i].price * this.shopCartCount[i].count;
        }
      }
      
    },
    allShopProductAdd: function (id) {
      this.shopCartCount[id].count++;
      /*若为选中状态，则更新对象中 →商品的 总价格*/
      if (this.shopCartCount[id].flag == true) {
        this.shopCartCount[id].allprice = this.shopCartCount[id].price * this.shopCartCount[id].count;
      }
      //先给总价清零
      this.allMoney = 0;
      //每次点击- ，都会重新计算所有被选中的allMoney
      for (var i = 0; i < this.shopCartCount.length; i++) {
        if (this.shopCartCount[i].flag == true) {
          this.allMoney += this.shopCartCount[i].price * this.shopCartCount[i].count;
        }
      }
    },
    changeCheck: function (id) {
      
      this.shopCartCount[id].flag = !this.shopCartCount[id].flag;
      if (this.shopCartCount[id].flag == true) {
        this.shopCartCount[id].check = "fa fa-check-circle-o";
        //每次不被选中 ，都会重新计算所有被选中的allMoney
        this.allMoney = 0;
        for (var i = 0; i < this.shopCartCount.length; i++) {

          if (this.shopCartCount[i].flag == true) {
            this.allMoney += this.shopCartCount[i].price * this.shopCartCount[i].count;
          }
        }
       
      } else {
        this.shopCartCount[id].check = "fa fa-circle-thin";

        console.log(this.shopCartCount[id].flag);
        //每次不被选中 ，都会重新计算所有被选中的allMoney
        this.allMoney = 0;
        for (var i = 0; i < this.shopCartCount.length; i++) {
          if (this.shopCartCount[i].flag == true) {
            this.allMoney += this.shopCartCount[i].price * this.shopCartCount[i].count;
          }
        }
        
      }
    },
    changeAllCheck: function () {
      this.allCheckFlag = !this.allCheckFlag;
      if (this.allCheckFlag == true) {
        /*全选后按钮变化*/
        this.allCheckClass = "fa fa-check-circle-o";
        for (var i = 0; i < this.shopCartCount.length; i++) {
          this.shopCartCount[i].check = "fa fa-check-circle-o";
        }
        /*数量相加 */
        /*价格相加 */
        this.allMoney=0;
        for (var i = 0; i < this.shopCartCount.length; i++) {
          this.allMoney += this.shopCartCount[i].price * this.shopCartCount[i].count;
        }
    

      } else {
        /*取消全选后按钮变化*/
        this.allCheckClass = "fa fa-circle-thin";
        for (var i = 0; i < this.shopCartCount.length; i++) {
          this.shopCartCount[i].check = "fa fa-circle-thin";
        }
        /*取消价格相加 */
        for (var i = 0; i < this.shopCartCount.length; i++) {
          this.allMoney = 0;
        }
      }
    }
  },
  mounted: function () {
    var _this = this;
    _this.$http.get('http://localhost:8080/static/shopcart.json').then(function (res) {
      console.log(res.data);
      console.log(_this.shopCartItem);
      _this.shopCartItem = res.data;
    }).catch(function (err) {
      console.log(err)
    })

    _this.$http.get('http://localhost:8080/static/shopcartBuy.json').then(function (res) {
      _this.shopCartBuyItem = res.data;
    }).catch(function (err) {
      console.log(err)
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .shopHeader{
        height: 1rem;
        background-color: #f9f9f9;
        display: flex;
        align-items: center;
    }
    .shopHeader>div{
        flex: 1;
    }
    .shopHeader>div>span{
        margin: 0 0.2rem;
    }
    .shopHeader>div>span:first-of-type{
        color: red;
    }
    .shopHint{
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
      
    }
    .shopHint ul{
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: space-between;
        align-items: center;
        height: 0.8rem;
        padding: 0 0.5rem;
        background-color: #f4f4f4;
    }
    .shopHint ul li{
        list-style-type:circle;
        list-style: inside;
    }
    .addPrice{
        display: flex;
        flex-direction: row;
        height: 1rem;
        justify-content:space-around;
        align-items: center;
        background-color: #ffffff;
        font-size: 0.30rem;
    }
    .addPrice div:nth-of-type(1){
        flex: 0 0 25%;
        border: 0.02rem solid #f5b754;
        color: #f5b754;
    }
    .addPrice div:nth-of-type(2){
        text-align: left;
        flex: 0 0 40%;
  
    }
    .addPrice div:nth-of-type(3){
        flex: 0 0 30%;
        background-color: #ffffff;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .shopProduct .shopProductItem{
        background-color: #ffffff;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 3rem;
    }
    .shopProduct .shopProductItem>span{
        flex: 0 0 10%;
         align-self: center;
    }
    .shopProduct .shopProductItem img{
        flex: 0 0 25%;
         align-self: center;
    }
    .shopProduct .shopProductItem .shopProductNamePrice{
        display: flex;
        flex-direction: column;
        flex: 0 0 60%;
    }
    .shopProduct .shopProductItem .shopProductName span{
        align-items: flex-end;
        justify-content:flex-end; 
    }
    .shopProduct .shopProductItem .shopProductNamePrice .shopProductName{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content:flex-end;
        background-color: #ffffff;
        flex: 0 0 50%;
    }
    .shopProduct .shopProductItem .shopProductNamePrice .shopProductPrice{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:space-around; 
        flex: 0 0 50%;
        background-color: #ffffff;
        
    }
    .shopProduct .shopProductItem .shopProductNamePrice .shopProductPrice table{
         border-collapse:collapse; 
    }
   
    .shopProduct .shopProductItem .shopProductNamePrice .shopProductPrice table td{
        font-size: 0.37rem;
        border: 1px solid grey;
        width: 0.5rem;
        height: 0.5rem;
    }
    .shopProduct .shopProductItem .shopProductNamePrice .shopProductPrice table td input{
        width: 0.5rem;
        height: 0.5rem;
    }
    .space {
        background-color: #f4f4f4;
        height: 0.2rem;
    }
    .shopElse .shopElseHeader{
        padding: 0.2rem 0;
        display: flex;
        background-color: #ffffff;
        justify-content: flex-start;
        align-items: center;
    }
    .shopElse .shopElseHeader img{
        flex:0 0 10%;
        margin-left: 0.3rem;
    }
    .shopElse .shopElseHeader span{
        flex:0 0 40%;
    }
    .shopElseProduct{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .shopElseProduct .shopElseProductItem{
        display: flex;
        flex-direction:column;
        align-items: flex-start;   
    }
    .shopElseProduct .shopElseProductItem .shopElseProductImg{
        display: flex;
        flex-direction:column;
        align-items: flex-start;    
    }
    .shopElseProduct .shopElseProductItem .shopElseProductImg>div{
        background-color: #ebe0c2;
        color: #d2bfa1;
        text-align: left;
        width: 100%;
        padding: 0.3rem 0 0.3rem 0.2rem;
        margin-bottom: 0.1rem;
    }
    .shopElseProduct .shopElseProductItem .shopElseProductImg+div+div{
        color: red;
        margin: 0.1rem 0 0.25rem 0;
    }
    .shopFooter1>div{
        height: 1rem;
    }
    .outfooter>div{
        height: 1.4rem;
    }
    .shopFooter2 {
            position: fixed;
            width: 100%;
            height: 1rem;
            bottom:1.4rem;
            font-size: 0.4rem;
            border-top: solid 0.03rem #ccc;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-items: center;
            background-color: #f9f9f9;
        }
      
        .shopFooter2>span:first-of-type{
            flex:0 0 50%;
            justify-content: flex-start;
            text-align: left;
            padding-left: 0.5rem;       
        }
        .shopFooter2>span:nth-of-type(2){
            flex:0 0 25%;
           color: red; 
        }
        .shopFooter2>span:nth-of-type(3){
            flex:0 0 25%;
            background-color: #cccccc;
            color: white;
            height: 100%;
            vertical-align: middle;
            line-height:1rem;
        }

    
</style>
