<template>
    <div class="content">
          
        <div class="lunbo" >
            <div class="lunboItem" v-for="items in lunboPicItem" v-bind:style="lunboPicItemShow[items.id].show" >
                <img src="" alt="" height="100%" v-bind:src='items.img' >
            </div>
        </div>
         <div class="underCenter">
        <p>限时尝鲜</p>
        <hr>
        <div class="Pic">
            <div v-for=" items in xinpinPicItem">
                <div class="PicItem" >
                    <div class="PicImg"><img src="" alt="" v-bind:src="items.img"></div>
                    <div class="PicMes">
                    <div class="message">
                        <span>{{items.name}}</span>
                        <span>{{items.hint}}</span>
                    </div>
                    <div class="price">
                        <div class="todayPrice">
                            <span>{{items.todayprice}}</span>
                            <span>今日价</span>
                        </div>
                        <div class="tomorrowPrice">
                            <span>{{items.tomorrowPrice}}</span>
                            <span>明日价</span>
                        </div>
                        <div class="originPrice">
                            <span>{{items.originPrice}}</span>
                            <span>原价</span>
                        </div>
                    </div>
                        <img src="../../image/buy.png" alt="">
                    </div>
                </div>
                 <hr>
            </div>
           
            
        
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'xinpin',
  data(){
      return{
          xinpinPicItem:[],
             lunboPicItem:[],
             lunboPicItemShow:[{"index":1,"show":'display:block'},{"index":2,"show":'display:none'},{"index":3,"show":'display:none'}]
      }
  },
  components: {
        
        },
     
   mounted: function () {
     var _this = this;
     _this.$http.get('http://localhost:8080/static/xinpin.json').then(function (res) {

       // console.log(res.data[0].name);
       //   this.homeImage=res.data[0].img;
       console.log(res.data);
       console.log(_this.xinpinPicItem);
       _this.xinpinPicItem = res.data;

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
        .underCenter>p{
            text-align: center;
            padding: 0.2rem 0;
        }
        .underCenter .Pic img{
            width: 3.2rem;
            height: 3.2rem;
        }
        .underCenter .Pic{
            display: flex;
            flex-direction:column;
            margin: 0.1rem 0;
        }
        .underCenter .Pic .PicItem{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0.1rem 0;
        }
       .underCenter .Pic .PicItem .PicMes img{
            width: 1.9rem;
            height: 0.5rem;
        }
        .underCenter .Pic .PicItem .PicImg{
            flex: 1;
        }
        .underCenter .Pic .PicItem .PicMes{
             flex:1;
             display: flex;
             flex-direction: column;
        }
        .underCenter .Pic .PicItem .PicMes .message{
             flex: 1;
             display: flex;
             flex-direction:column;
             align-items: flex-start;
        }
        .underCenter .Pic .PicItem .PicMes .message>span:nth-of-type(2){
             color: #999;
             font-size: 0.3rem;
        }
        .underCenter .Pic .PicItem .PicMes .price{
             flex: 1;
             display: flex;
             flex-direction:row;
   
        }
        .underCenter .Pic .PicItem .PicMes .price>div{
             flex: 1;
             display: flex;
             align-items: flex-start;
             flex-direction:column;
        }
        .underCenter .Pic .PicItem .PicMes .price .todayPrice>span:first-of-type{
            color: red;
        }
        hr{
            margin: 0.2rem 0;
        }
        
</style>


