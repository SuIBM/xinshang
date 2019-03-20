<template>
<div class="app-sub1Container">
    <mt-swipe  :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">
           <img :src="item.img_url" />
        </mt-swipe-item>
      </mt-swipe>
    <ul class="mui-table-view mui-grid-view ti">
		    <li class="mui-table-view-cell mui-media mui-col-xs-2 ti1" v-for="item in cond" :key="item.id">
            <a href="#">
                <img class="mui-media-object mui-pull-left ti2" :src="item.img_url">
                <div class="th">
      <div class="th_1">{{item.middlename}}</div>
      </div>
		    </a></li>
		</ul>
    
		                <ul class="mui-table-view mui-grid-view">
		                    <li class="mui-table-view-cell mui-media mui-col-xs-6 ti4" v-for="item in home" :key="item.id">
                        <a href="#">
                        <img class="mui-media-object mui-pull-left" :src="item.img_url">
                        <div class="mui-media-body">{{item.tit}}</div>
		                    </a>
                            <p class="price">
                            <span class="now">￥{{item.now}}</span>
                            </p>
                            </li>
		                </ul>
                            <div class="ou">
                                <div class="ou">箱包潮牌</div>
                             </div>
                             <div class="bg">
     
        <span class="mui-icon-extra"><a class="ty">
        <span class="mui-badge">1元租</span>
        复古LV</a></span>
         <span class="mui-icon-extra yt "><a class="ty ">CHANEL</a></span>
        <span class="mui-icon-extra  "><a class="ty">CHANEL</a></span>
        <span class="mui-icon-extra  yt "><a class="ty ">Hermes</a></span>
      
      
        <span class="mui-icon-extra  "><a class="ty">
         <span class="mui-badge">1元租</span>
        Dior</a></span>
        <span class="mui-icon-extra  "><a class="ty">
        Guccl</a></span>
        <span class="mui-icon-extra yt "><a class="ty ">
         <span class="mui-badge">1元租</span>
        Ferragamo</a></span>
         <span class="mui-icon-extra  "><a class="ty">
          COACH</a></span>
          <span class="mui-icon-extra  "><a class="ty">ALL</a></span>
        <HomeContainer></HomeContainer>
      </div>
</div>
</template>
<script>
import HomeContainer from '../mode/HomeContainer.vue'
    export default{
        data(){
            return{
                list:[],cond:[],home:[]
            }
        },
        methods:{ 
                getImage_1(){
                //发送ajax请求并且获取图片列表并且显示
                var url = "http://127.0.0.1:3000/imagelist_1";
                this.$http.get(url).then(result=>{
                //获取返回数据，保存 list属性中
                this.list = result.body;
                })
            },
             second(){
                //发送ajax请求并且获取图片列表并且显示
                var url = "http://127.0.0.1:3000/second";
                this.$http.get(url).then(result=>{
                //获取返回数据，保存 list属性中
                this.cond = result.body;
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
        },
        components:{
      "HomeContainer":HomeContainer
    },
        created(){
      this.getImage_1();
      this.second();
      this.gethome();
        }
    }
</script>
<style>
      .app-sub1Container .mint-swipe{
    height:200px;
    transform: translate3d(0,0,0);
    overflow: hidden;
  }
  .app-sub1Container .mint-swipe img{
    width:100%;
  }
 .app-sub1Container .mui-table-view.mui-grid-view{
      padding:0;
          background: transparent;
  }
.app-sub1Container .mui-table-view.mui-grid-view .mui-table-view-cell{
      margin:0.39rem;
      padding:0;
  }
 .app-sub1Container  .mui-table-view.mui-grid-view .mui-table-view-cell>a:not(.mui-btn){
      margin:0;
      padding:0;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object{
      margin:0;
  }
   .app-sub1Container .th{
      margin:0;
  }
  .app-sub1Container .th_1{
          font-size: 12px;
          width:100%;
        font-weight: normal;
  }
  li.mui-table-view-cell.mui-media.mui-col-xs-6.ti4{
	width:21%
}
  .app-sub1Container .price{
        margin: 0.5rem 0.5rem 0.5rem 0;
}
 .app-sub1Container .now{
        font-size: 17px;
            text-align: center;
}
.app-sub1Container .ou {
    font-size: 20px;
    font-weight: bold;
    float:left;
    margin-left: 0.3rem;
    width:100%;
}
.app-sub1Container .bg{
    float:left;
}
.app-sub1Container .mui-icon-extra{
        position: relative;
            width: 33.33%;
    margin: 1rem 0 1rem 0;
    border-left:1px solid #C2C2C2;
}
.app-sub1Container .mui-badge{
    position:absolute;
    right: 0rem;
    top: -0.9rem;
    border-radius: 3rem 2rem 2rem 0;
    color:#fff;
    background-color: #D8352B;
}
.app-sub1Container .yt{
    border-left:0;
}
</style>