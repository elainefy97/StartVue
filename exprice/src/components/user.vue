<template>
  <div class="user">
    <div class="head">
      <img src="static/image/head.jpg" alt="" height="80rem" width="80rem">
      <div class="headRight">
        <div class="phone">
          <span>77777777</span>
          <span>每日签到 ></span>
        </div>
        <div class="try">
          <span>
            <i class="fa fa-tint" aria-hidden="true"></i>
          </span>
          <div>
            <span>超级会员&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>立即试用&nbsp;&nbsp;
              <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="order">
      <div>
      <span>我的订单</span>  
      <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
      </div>
      <hr>
      <div class="orderSec">
        <div class="orderSecItem">
          <span>
            <i class="fa fa-cny (alias)" aria-hidden="true"></i>
          </span>
          <span>待付款</span>
        </div>
        <div class="orderSecItem">
          <span>
            <i class="fa fa-pie-chart" aria-hidden="true"></i>
          </span>
          <span>待发货</span>
        </div>
        <div class="orderSecItem">
          <span>
            <i class="fa fa-truck" aria-hidden="true"></i>
          </span>
          <span>已发货</span>
        </div>
        <div class="orderSecItem">
          <span>
            <i class="fa fa-commenting-o" aria-hidden="true"></i>
          </span>
          <span>待评价</span>
        </div>
        <div class="orderSecItem">
          <span>
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </span>
          <span>退换/售后</span>
        </div>
      </div>
      <hr>
    </div>
    <div class="space"></div>
    <div class="partner">
      <div>
      <span>网易严选合伙人</span>  
      <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
      </div>
      <hr>
      <img src="static/image/partner.png" alt="" height="97rem">
    </div>
    <div class="space"></div>
    <div class="server">
      <p>我的服务</p>
      <hr>
      <div class="serverSec">
          <div class="serverSecGroup">  
        <div class="serverItem">
          <span>
            <i class="fa fa-file-text-o" aria-hidden="true" style="color:#fd865c"></i>
          </span>
          <span>拼团订单</span>
        </div>
        <div class="serverItem">
          <span>
            <i class="fa fa-ticket" aria-hidden="true" style="color:#f5b754"></i>
          </span>
          <span>众筹订单</span>
        </div>
        <div class="serverItem">
          <span>
            <i class="fa fa-smile-o" aria-hidden="true" style="color:#f5b754"></i>
          </span>
          <span>邀请好友</span>
        </div>
        <div class="serverItem">
          <span>
            <i class="fa fa-hdd-o" aria-hidden="true" style="color:#f5b754"></i>
          </span>
          <span>优惠券</span>
        </div>
        </div>  
        <hr>
        <div class="serverSecGroup">
        <div class="serverItem">
          <span>
            <i class="fa fa-flag-o" aria-hidden="true" style="color:#fd865c"></i>
          </span>
          <span>红包</span>
        </div>
        <div class="serverItem">
          <span>
            <i class="fa fa-gavel" aria-hidden="true"  style="color:#fd865c"></i>
          </span>
          <span>优先购</span>
        </div>
        <div class="serverItem">
          <span>
            <i class="fa fa-drivers-license-o (alias)" aria-hidden="true" style="color:#fd865c"></i>
          </span>
          <span>礼品卡</span>
        </div>
        <div class="serverItem">
          <span>
            <i class="fa fa-send-o (alias)" aria-hidden="true" style="color:#f5b754"></i>
          </span>
          <span>会员俱乐部</span>
        </div>
        </div>
        <hr>
        <div class="serverSecGroup">
        <div class="serverItem">
          <span>
            <i class="fa fa-film" aria-hidden="true"  style="color:#fd865c"></i>
          </span>
          <span>积分中心</span>
        </div>
        <div class="serverItem">
          <span>
            <i class="fa fa-life-buoy (alias)" aria-hidden="true"  style="color:#fd865c"></i>
          </span>
          <span>我的甄选家</span>
        </div>   
        <div class="serverItem">
          <span>
            <i class="fa fa-moon-o" aria-hidden="true" style="color:#fd865c"></i>
          </span>
          <span>足迹</span>
        </div>
        <div class="serverItem">
          <span>
            <i class="fa fa-heart-o" aria-hidden="true" style="color:#f5b754"></i>
          </span>
          <span>收藏</span>
        </div>
        </div>
        <hr>
         <div class="serverSecGroup">
        <div class="serverItem">
          <span>
            <i class="fa fa-key" aria-hidden="true" style="color:#6565ff"></i>
          </span>
          <span>地址</span>
        </div>
        <div class="serverItem">
          <span>
            <i class="fa fa-headphones" aria-hidden="true" style="color:#6565ff"></i>
          </span>
          <span>客服</span>
        </div>
        <div class="serverItem">
          <span>
            <i class="fa fa-question" aria-hidden="true" style="color:#6565ff"></i>
          </span>
          <span>帮助</span>
        </div>
        <div class="serverItem">
          <span>
            <i class="fa fa-user-plus" aria-hidden="true" style="color:#6565ff"></i>
          </span>
          <span>商务合作</span>
        </div>
        </div>
        <hr>
         <div class="serverSecGroup">
        <div class="serverItem">
          <span>
            <i class="fa fa-cog" aria-hidden="true" style="color:#6565ff"></i>
          </span>
          <span>设置</span>
        </div>
        </div>
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
    name: 'User',
    components: {
      'vFfooter':Ffooter

    },
    data() {
      return {
        isCollapsed: false
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user .head {
    background-color: #c6ab74;
    display: flex;
    padding: 1rem 0rem 1rem 0rem;
    align-items: flex-start;
    justify-content: space-between;
  }

  .user .head img {
    flex: 0 0 20%;
    border-radius: 50%;
    margin-left: 0.5rem;
    
  }

  .user .head .headRight {
    display: flex;
    flex: 0 0 68%;
  
    margin-top: 0.25rem;
    flex-direction: row;
   
    justify-content: space-between;
     
  }

  .user .head .headRight .phone span:first-of-type {
    align-self: flex-start;
    color: #ffffff;
    font-size: 0.5rem;
  }

  .user .head .headRight .phone span:last-of-type {
    background-color: #b39e69;
    padding: 0.06rem;
    color: #ffffff;
    font-size: 0.3rem;
   
  }

  .user .head .headRight .phone {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .user .head .headRight .try {
    background-color: #444444;
    border-radius: 1rem 0 0 1rem;
    display: flex;
    flex: 0 0 58%;
    flex-direction: row;
    padding: 0.3rem;
    
    
  }

  .user .head .headRight .try>span {
    border-radius: 50%;
    font-size: 0.5rem;
    background-color: #575757;
    width: 0.7rem;
    height: 0.7rem;
    color: #dfc69e;
  }

  .user .head .headRight .try>div {
    margin-left: 0.15rem;
    display: flex;
    flex-direction: column;
    color: #f0e7c8;
  }

  .user p {
    text-align: left;
    padding: 0.4rem 0 0.4rem 0.3rem;
    font-size: 0.4rem;
  }

  .space {
    background-color: #f4f4f4;
    height: 0.2rem;
  }
    .user .order >div:first-of-type,.user .partner >div:first-of-type {
    padding: 0.3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.4rem;
  }
  .user .order .orderSec {
    padding: 0.3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.4rem;
  }

  .user .order .orderSec .orderSecItem {
    display: flex;
    flex-direction: column;
  }

  .user .partner img {
    padding: 0.2rem;
  }

  .user .server .serverSec {
    display: flex;
    flex-direction: column;
    font-size: 0.4rem;
  }

  .user .server .serverSec .serverSecGroup {
    display: flex;
    flex-direction: row;
    padding: 0.3rem;
  }

  .user .server .serverSec .serverSecGroup .serverItem {
    display: flex;
    flex-direction: column;
    flex: 0 0 25%;
  }
  .outfooter>div{
        height: 1.4rem;
    }
</style>
