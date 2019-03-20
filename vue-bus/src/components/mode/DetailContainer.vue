<template>
<div class="app-DatailContaner">
    		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"  @click="$router.back(-1)"></a>
            <a class="active gw"><span class="mui-icon-extra mui-icon-extra-cart"></span></a>
			<h1 class="mui-title">购物车</h1>
		</header>
<div class="goods-item" :key="subpage1.id">
      <img :src="subpage1.img_url">
      <div class="pri">
      <p class="price1">
           <span class="now1 now1_1">全新</span>
           <span class="old1">COACH 卡通汽车大号双肩包</span>
        </p>
      <div class="info">
        <p class="price">
           <span class="now">￥1995</span>
           <span class="old">￥9999</span>
           <span class="now4">全新</span>
        </p>
        </div>
        </div>
    </div>
     <div class="kuai">
      <li class="mui-table-view-cell mui-media">
     <span class="mui-icon mui-icon-plus pl">100%正品</span>
      </li> 
      <li class="mui-table-view-cell mui-media">
      <span class="mui-icon mui-icon-plus pl">专业鉴定</span>
      </li> 
      <li class="mui-table-view-cell mui-media">
      <span class="mui-icon mui-icon-plus pl">假一赔三</span>
      </li> 
      </div>
      <div class="noe">
        领券: <span class="now5">满600可用</span>
      </div>
      <div class="sjpl">
      <p class="spl_1">卖家说</p>
      
      <div class="sptu"><img class="sjpl_1" src="../img/152939680965490204.jpg"><p class="spl_2">心上首饰街</p></div>
      <p class="spjw">marc by marc jscobs 马克雅可不总长18厘米</p>
      </div>

      <div class="spxq" >
        <p class="spbt">商品详情</p>
        <ul class="spf" v-for="item in Desc"
     :key="item.id">
          <li class="spfl">{{item.classify}}</li>
          <li class="spf2">{{item.kind}}</li>
          </ul>
      </div>

      <div>
        图文详情
      </div>
      <div>
        心上承诺

      </div>

      <nav class="mui-bar mui-bar-tab hong">
			<router-link class="mui-tab-item mui-active" to="/subpage">
				<span class="mui-icon mui-icon-chatboxes"></span>
				<span class="mui-tab-label">联系卖家</span>
			</router-link>
			<router-link class="mui-tab-item" to="/zhai">
			<span class="mui-icon-extra mui-icon-extra-heart"></span>
				<span class="mui-tab-label">收藏</span>
			</router-link>
			<a class="mui-tab-item gou" >
				<span class="mui-tab-label" @click="addCartTo()">加入购物车</span>
			</a>
            <router-link class="mui-tab-item gou_2" to="/goods">
				<span class="mui-tab-label">立即购买</span>
			</router-link>
		</nav>
</div>
</template>
<script>
    export default {
        data(){

            return{subpage1:[
                {
                   img_url:"" 
                }
            ],Desc:[],courseSubList:[]}
        },
        methods:{
            addCartTo(){
                var carList = this.$store.id.title
                var idExist = carList.find(item =>{
                    return 
                })
            },
            page1Comtainer(){
        //发送ajax请求并且获取图片列表并且显示
        //var url = 
        var id=this.$route.params.id    
        this.$http.get("http://127.0.0.1:3000/subpage1?id="+id).then(result=>{
          //获取返回数据，保存 list属性中
          this.subpage1 = result.body;
          console.log(this.subpage1)
        })
      },
      Description(){
        //发送ajax请求并且获取图片列表并且显示
        var url = "http://127.0.0.1:3000/Description";
        this.$http.get(url).then(result=>{
          //获取返回数据，保存 list属性中
          this.Desc = result.body;
        })
      }
     },
     created() {
         this.page1Comtainer();
         this.Description();
         console.log(this.$route.params.id)
         console.log(this.subpage1.img_url)
     },
   }
</script>
<style>
.app-DatailContaner header.mui-bar.mui-bar-nav{
    position:relative;
}
.app-DatailContaner a.active.gw {
    position: absolute;
    right: 3rem;
    top: 0.5rem;
}
      .app-DatailContaner .mint-swipe{
    height:300px;
    transform: translate3d(0,0,0);
    overflow: hidden;
  }
  .app-DatailContaner .mint-swipe img{
    width:100%;
  }
  .app-DatailContaner .now1{
          padding: 0.1rem 0.5rem 0 0.5rem;
              background-color: #F42B13;
              color: #fff;
  }
 .app-DatailContaner  .old1{
         color: #000;
 }
 .app-DatailContaner .now{
     font-size: 18px;
 }
  .app-DatailContaner .pri {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .app-DatailContaner span.now4{
       float: right;
    padding: 0 0.8rem 0 0.8rem;
    border: 1px solid #6C6C6C;
    border-radius: 0.4rem;
}
.app-DatailContaner .kuai{
     text-align: center;
     height:1.5rem;
}
.app-DatailContaner span.mui-icon.mui-icon-plus{
  width:100%;
  height:0;
  color: #F3A9A0;
      font-size: 13px;
}
.app-DatailContaner .mui-table-view-cell{
  background-color:#EFEFF4;
  padding:0;
  list-style: none;
  float:left;
  width: 25%;
}
.app-DatailContaner span.mui-icon.mui-icon-plus.pu {
    font-size: 1.5rem;
    color: #929292;
}
.app-DatailContaner .noe {
    margin-top: 1rem;
    height: 100%;
    width: 100%;
        line-height: 3rem;
        margin-bottom: 2rem;
}
.app-DatailContaner span.now5 {
        padding: 0.5rem;
    background: #F42B13;
    color: #fff;
    font-size: 14px;
}
.app-DatailContaner span.mui-tab-label {
    font-size: 14px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.app-DatailContaner .mui-icon-extra{
      position: relative;
    top: 4px;
}
.app-DatailContaner .mui-bar-tab .mui-tab-item.mui-active{
  color:#F42B13;
} 
.app-DatailContaner a.mui-tab-item.gou{
      width: 1.5%;
      color:#F42B13;
}
.app-DatailContaner a.mui-tab-item.gou_2{
      width: 1.5%;
      background:#F42B13;
      color:#fff;
}
.app-DatailContaner .sjpl {
    margin-left: 0.5rem;
        margin-bottom: 2rem;
}
.app-DatailContaner p.spl_1 {
    font-size: 22px;
    font-weight: bold;
    color: #000;
}
.app-DatailContaner .sptu {
    width: 100%;
    height: 100%;
    position: relative;
    color: #AAADAF;
}
.app-DatailContaner p.spl_2 {
    position: absolute;
    top: 1.5rem;
    left: 5rem;
}
.app-DatailContaner img.sjpl_1{
      width: 20%;
}
.spxq {
    margin-left: 0.5rem;
}
ul.spf {
    padding: 0;
    /* width: 100%; */
    list-style: none;
    display: flex;
}
li.spfl{
      margin-right: 2rem;
      width:4rem;
}
</style>