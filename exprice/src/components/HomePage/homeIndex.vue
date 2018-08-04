<template>
    <div class="content">
         <div class="center" >
        
        <div class="lunbo" >
            <div class="lunboItem"v-for="items in lunboPicItem" v-bind:style="lunboPicItemShow[items.id].show" >
                <img src="" alt="" height="100%" v-bind:src='items.img' >
            </div>
        </div>
        <div class="hint">
            <ul>
                <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>网易自营拼盘</li>
                <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>30天无忧退换货</li>
                <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>48小时快速退款</li>
            </ul>
        </div>
        
        
    </div>
    <hr>
    <div class="underCenter">
        <p>私人订制</p>
        <div class="Pic">
            <div class="PicItem" v-for="items in homePicItem">
                <div class="PicImg"><img src="" alt="" v-bind:src='items.img' ></div>
                <div class="PicMes">{{items.name}}<span>{{items.price}}</span></div>
            </div>
         </div>
         
    </div>
    </div>
</template>
<script>
export default {
    name:'homeIndex',
    data() {
     return {
      homePicItem:[],
      lunboPicItem:[],
      lunboPicItemShow:[{"index":1,"show":'display:block'},{"index":2,"show":'display:none'},{"index":3,"show":'display:none'}]
     }
   },
     methods: {


     },
     mounted: function () {
       var _this = this;
       _this.$http.get('http://localhost:8080/static/home.json').then(function (res) {

         _this.homePicItem = res.data;

       }).catch(function (err) {
         console.log(err)
       })
       _this.$http.get('http://localhost:8080/static/lunbo.json').then(function (res) {

         _this.lunboPicItem = res.data;

       }).catch(function (err) {
         console.log(err)
       })
       clearInterval(timer);
       var index = 0;
       var timer = null;
       timer = setInterval(function () {
         for (var i = 0; i < _this.lunboPicItemShow.length; i++) {
           _this.lunboPicItemShow[i].show = 'display:none';
         }
         _this.lunboPicItemShow[index].show = 'display:block';
         index++;
         if (index == 3) {
           index = 0;
         }
         console.log('我开着额');
       }, 2000)
     }

}
</script>
<style scoped>
     
        .lunbo{
            overflow: hidden;
            height:5.7rem;
          
        }
        .lunbo .lunboItem{
            overflow: hidden;
            width: 100%;
            height: 100%;
        }
        
        .hint ul{
            display: flex;
        }
        .hint ul li{
            flex: 1;
            margin: 0.2rem 0;
            list-style: none;
        }
        .hint ul li i{
            color: red;
            margin-right: 0.3rem;
        }
        .underCenter>p{
            text-align: center;
            padding: 0.2rem 0;
        }
        .underCenter .Pic{
            display: flex;
            flex-direction:row;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 0.15rem 0.5rem;
        }
        .underCenter .Pic img{
            width: 2rem;
            height:2rem;
        }
        .underCenter .Pic .PicItem{
             width:2.5rem;
             margin-bottom: 0.3rem;
        }
        .underCenter .Pic .PicItem span{
             color: red;
        }
        
</style>


