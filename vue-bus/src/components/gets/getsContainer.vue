<template>
<div class="app-getContainer">
<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="$router.back(-1)"></a>
            <a class="right">搜索</a>
			<h1 class="mui-title"><router-link to="/gets">
            <span class="mui-icon mui-icon-search"></span>
				  	<input type="search" class="mui-input-clear" 
                      placeholder="Louis Vuiton">
          </router-link></h1>
</header>
<mt-navbar v-model="selected">
  <mt-tab-item id="1">值得买</mt-tab-item>
  <mt-tab-item id="2">租赁</mt-tab-item>
  <mt-tab-item id="3">用户</mt-tab-item>
</mt-navbar>

<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <div class="th">
      <div class="th_1">热门搜索</div>
      <a><span class="mui-icon mui-icon-loop"><a class="th_1_1">换一批</a></span></a>
      <div class="th_2">
      <div class="bg">
      <span class="mui-icon-extra ">
      <a class="ty">Louis Vuttion</a></span>
      <span class="mui-icon-extra  "><a class="ty">CHANEL</a></span>
      <span class="mui-icon-extra"><a class="ty">GUCCL</a></span>
      <span class="mui-icon-extra ">
      <a class="ty">celine包</a></span>
      <span class="mui-icon-extra "><a class="ty">手表</a></span>
      <span class="mui-icon-extra "><a class="ty">单肩包</a></span>
      </div></div>
      </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
   <div class="th">
      <div class="th_1">搜索推荐</div>
      <div class="th_2">
      <div class="bg">
      <span class="mui-icon-extra ">
      <a class="ty">Louis Vuttion</a></span>
      <span class="mui-icon-extra  "><a class="ty">CHANEL</a></span>
      <span class="mui-icon-extra"><a class="ty">GUCCL</a></span>
      <span class="mui-icon-extra ">
      <a class="ty">celine包</a></span>
      <span class="mui-icon-extra "><a class="ty">手表</a></span>
      <span class="mui-icon-extra "><a class="ty">单肩包</a></span>
      </div></div>
      </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
   <div class="th">
      <div class="th_1">优质卖家</div>
      <a><span class="mui-icon mui-icon-loop"><a class="th_1_1">换一批</a></span></a>
      <div class="th_2">
      <div class="bg">
      <span class="mui-icon-extra ">
      <a class="ty">Louis Vuttion</a></span>
      <span class="mui-icon-extra  "><a class="ty">CHANEL</a></span>
      <span class="mui-icon-extra"><a class="ty">GUCCL</a></span>
      <span class="mui-icon-extra ">
      <a class="ty">celine包</a></span>
      <span class="mui-icon-extra "><a class="ty">手表</a></span>
      <span class="mui-icon-extra "><a class="ty">单肩包</a></span>
      </div></div>
      </div>
  </mt-tab-container-item>
</mt-tab-container>

</div>
</template>
<script>
    export default{
        data(){
            return{selected:"1"}
        }
    }
</script>
<style>
.app-getContainer .mui-bar .mui-title{
        margin-right: 1rem;

}
    .app-getContainer .mui-bar input[type=search]{
                border-radius: 2rem;
                font-size: 0.85rem;
                    padding-left: 2.2rem;
                    text-align:left;
    }
    span.mui-icon.mui-icon-search {
    position: absolute;
    top: 0.8rem;
    left: 0.5rem;
}
 .app-getContainer .mui-bar-nav{
     box-shadow: none;
         position: relative;
 }
  .app-getContainer .mui-icon{
      font-size: 21px;
          margin-left: 12rem;
  }
  .app-getContainer .th_1{
          margin-top: 2rem;
  }
  .app-getContainer a.th_1_1{
      font-size: 14px;
      
  }
  .app-getContainer .mui-icon-extra{
         border-radius: 2rem;
       padding: 0.1rem 1rem 0.2rem 0rem;
    line-height: 1rem;
    background-color:#E3E3E3;
    margin: 0.5rem 0 0.5rem 1rem;
  }
    .app-getContainer .bg{
        text-align: unset;
        float:left;
        margin-top: 1.5rem;
    }
    a.right {
    position: absolute;
    right: 1rem;
    top: 0.8rem;
    color: #000;
}
</style>