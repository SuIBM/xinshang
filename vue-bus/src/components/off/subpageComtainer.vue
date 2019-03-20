<template>
<div class="subpageComtainer">
<router-link to="/img"><span class="mui-icon-extra mui-icon-extra-class icn"></span></router-link>
    		  <div class="mui-input-row mui-search">
          <router-link to="/gets">
				  	<input type="search" class="mui-input-clear" placeholder="">
          </router-link>
				  </div>
<a><span class="mui-icon-extra mui-icon-extra-comment ti2"></span></a>
	<mt-navbar v-model="selected">
	<mt-tab-item id="1">推荐</mt-tab-item>
	<mt-tab-item id="2">箱包</mt-tab-item>
	<mt-tab-item id="3">首饰</mt-tab-item>
	<mt-tab-item id="4">手表</mt-tab-item>
	<mt-tab-item id="5">配饰</mt-tab-item>
	</mt-navbar>

	<!-- tab-container -->
	<mt-tab-container v-model="selected">
	<mt-tab-container-item id="1">
        <div class="app-homecontai">
        <mt-swipe  :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">
           <img :src="item.img_url" />
        </mt-swipe-item>
      </mt-swipe>
      <div class="kuai">
      <li class="mui-table-view-cell mui-media">
     <span class="mui-icon mui-icon-plus">100%正品</span>
      </li> 
      <li class="mui-table-view-cell mui-media">
      <span class="mui-icon mui-icon-plus">专家鉴定</span>
      </li> 
      <li class="mui-table-view-cell mui-media">
      <span class="mui-icon mui-icon-plus">假一赔十</span>
      </li> 
      <li class="mui-table-view-cell mui-media">
      <span class="mui-icon mui-icon-plus">急速售卖</span>
      </li> 
      </div>
      <div class="bg">
        <div class="bg-1">
 <span class="mui-icon-extra mui-icon-extra-gift">
      <span class="mui-badge">1元租</span>
      <a class="ty">租赁</a></span>
      <span class="mui-icon-extra mui-icon-extra-gift "><a class="ty">社区</a></span>
      <span class="mui-icon-extra mui-icon-extra-gift"><a class="ty">拿趣</a></span>

        </div>
     <div class="bg-2">
        <span class="mui-icon-extra mui-icon-extra-gift">
       <span class="mui-badge2">赚</span>
      <a class="ty">佣金</a></span>
      <span class="mui-icon-extra mui-icon-extra-gift"><a class="ty">领券</a></span>
      <span class="mui-icon-extra mui-icon-extra-gift"><a class="ty">估价</a></span>
     </div>
     
      </div>
         
      <div class="th">
      <div class="th_1">买货高手</div>
      <div class="th_2">Shopping Master</div>
      </div>
		                <ul class="mui-table-view mui-grid-view">
		                    <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in home" :key="item.id">
                        <a href="#">
                        <img class="mui-media-object mui-pull-left" :src="item.img_url">
                        <div class="mui-media-body">{{item.name}}</div>
		                    </a></li>
		                </ul>
      <div class="th">
      <div class="th_1">时尚大牌</div>
      <div class="th_2">Fashion Brands</div>
      </div>
      <ul class="mui-table-view mui-grid-view ti">
		    <li class="mui-table-view-cell mui-media mui-col-xs-6 ti1" v-for="item in home_1" :key="item.id">
            <a href="#">
            <img class="mui-media-object mui-pull-left ti2" :src="item.img_url">
		    </a></li>
		</ul>
    <div class="th">
      <div class="th_1">猜你喜欢</div>
      <div class="th_2">You May Also Like</div>
      </div>
    
      <subpage1></subpage1>
        </div>
	</mt-tab-container-item>
	<mt-tab-container-item id="2">
    <sub2></sub2>
	</mt-tab-container-item>
	<mt-tab-container-item id="3">
		<sub3></sub3>
	</mt-tab-container-item>
	<mt-tab-container-item id="4">
	<sub4></sub4>
	</mt-tab-container-item>
	<mt-tab-container-item id="5">
		<sub5></sub5>
	</mt-tab-container-item>
	</mt-tab-container>

  <ft></ft>
</div>
</template>
<script>
import ft from '../ft/ftContainer.vue'
import sub1 from '../off/sub1Comtainer.vue'
import sub2 from '../off/sub2Comtainer.vue'
import sub3 from '../off/sub3Comtainer.vue'
import sub4 from '../off/sub4Comtainer.vue'
import sub5 from '../off/sub5Comtainer.vue'
import subpage1 from '../mode/subpage1Comtainer.vue'
  export default {
    data(){
      return {list:[],bus:[],wei:[],home:[],home_1:[],selected:"1"}
    },
    methods:{ 
      //jumpShop(){
      //编程跳转方式
      //this.$router.push("/home/shop?id=15");
      ///this.$router.push("/home/shop/19");
            
      //},   
      getImage(){
        //发送ajax请求并且获取图片列表并且显示
        var url = "http://127.0.0.1:3000/imagelist";
        this.$http.get(url).then(result=>{
          //获取返回数据，保存 list属性中
          this.list = result.body;
        })
      },
      imagewei(){
        //发送ajax请求并且获取图片列表并且显示
        var url = "http://127.0.0.1:3000/imagewei";
        this.$http.get(url).then(result=>{
          //获取返回数据，保存 list属性中
          this.wei = result.body;
        })
      },
       getmage(){
        //发送ajax请求并且获取图片列表并且显示
        var url = "http://127.0.0.1:3000/magebus";
        this.$http.get(url).then(result=>{
          //获取返回数据，保存 list属性中
          this.bus = result.body;
        })
      },
      gethome(){
        //发送ajax请求并且获取图片列表并且显示
        var url = "http://127.0.0.1:3000/home";
        this.$http.get(url).then(result=>{
          //获取返回数据，保存 list属性中
          this.home = result.body;
        })
      },
      gethome_1(){
        //发送ajax请求并且获取图片列表并且显示
        var url = "http://127.0.0.1:3000/home_1";
        this.$http.get(url).then(result=>{
          //获取返回数据，保存 list属性中
          this.home_1 = result.body;
        })
      }
    },
    components:{
      "ft":ft,
      "subpage1":subpage1,
      "sub1":sub1,
       "sub2":sub2,
        "sub3":sub3,
         "sub4":sub4,
          "sub5":sub5
    },
    created(){
      this.getImage();
      this.getmage();
      this.imagewei();
      this.gethome();
      this.gethome_1();
    }
  }
</script>
<style>
  .app-homecontai .mint-swipe{
    height:200px;
    transform: translate3d(0,0,0);
    overflow: hidden;
  }
  .app-homecontai .mint-swipe img{
    width:100%;
  }
  .app-homecontai .mui-icon{
    width:100%;
    font-size:8px;
  }
.mui-search input[type=search]{
  margin-bottom:0px;
}
.mui-search{
  width: 80%;
    margin: auto;
    border-radius: 22px;
}
.app-homecontai .mui-table-view-cell{
  background-color:#EFEFF4;
  padding:0;
  list-style: none;
  float:left;
  width: 25%;
}
.subpageComtainer .mint-navbar .mint-tab-item.is-selected{
  margin-bottom: 0;
}
.app-homecontai .mui-table-view-cell:after{
  background-color:#EFEFF4;
}
.app-homecontai span.mui-icon.mui-icon-plus{
  width:100%;
  height:0;
  color: #F3A9A0;
}
.kuai{
     text-align: center;
     height:1.5rem;
}
.app-homecontai .mui-icon-extra{
        padding: 3.33%;
        font-size: 22px;
            margin: 1rem;
    border-radius: 0.4rem;
        background-color: #DEE5EA;
        position: relative;
            margin-top: 1.2rem;
}
a.ty{
  font-size: 16px;
  margin-left: 0.5rem;
  color:#000;
}
.bg{
    width: 6rem;
    border-radius: 0.4rem;
   width:100%;
   text-align: center;
}
.app-homecontai .mui-badge{
      position: fixed;
      left: 4.5rem;
      top:-0.6rem;
      border-radius: 1.5rem 1.2rem 1.8rem 0;
      background-color: #E51B24;
      color:#fff;
      height:1.3rem;
          position: absolute;
              width: 50%;
}
.app-homecontai .mui-badge2{
      position: fixed;
      left: 4rem;
      top:-0.6rem;
      border-radius: 1.5rem 1.2rem 1.8rem 0;
      background-color: #E51B24;
      color:#fff;
      height:1.3rem;
          position: absolute;
              width: 35%;
                  font-size: 14px;
    padding: 3px 6px;
}
.app-homecontai .mui-fullscreen{
  position:static;
}
.gy{
  width:67%;
  height:5rem;
  margin:0 auto;
}
.gy_img{
  height:100%;
  width:100%;
  border-radius: 11rem;
}
.mui-table-view.mui-grid-view{
  float:left;
}
.th{
     margin: 2rem 0 0 0.8rem;
}
.th_1{
      float: left;
    margin-right: 1rem;
    font-size: 20px;
    font-weight: bold;
}
.th_2{
  font-size:0.9rem;
  line-height:1.4rem;
}
.mint-tab-item{
	color:#000;
}
.mint-navbar .mint-tab-item.is-selected{
margin-bottom: 0px;
    padding: 9px 0;
}
.mint-navbar .mint-tab-item.is-selected .mint-tab-item-label{
	font-size:22px;
	color:#000;
	font-weight: 900;
}
.mint-tab-item-label{
	    line-height: none;
}
.mui-table-view.mui-grid-view{
	    margin: 1.5rem 0 1.5rem 0;
		background-color:transparent;
}
.app-container .mui-table-view:after{
	background-color:transparent;
}
li.mui-table-view-cell.mui-media.mui-col-xs-6.ti1{
	width:50%
}
.app-container .subpageComtainer .icn{
      top: 0.4rem;
    left: 0.5rem;
    position: absolute;
}
.app-container span.mui-icon-extra.mui-icon-extra-comment.ti2{
      right: 0.3rem;
    top: 0.5rem;
        position: absolute;
}
</style>