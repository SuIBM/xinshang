<template>
 <div>
    <!--3：底部导航栏{{$strore.getters.optCount}}-->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/subpage">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/zhai">
				<span class="mui-icon mui-icon-bars"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab-item" to="/news">
			<span class="mui-icon mui-icon-plus"></span>
				<span class="mui-tab-label">出售</span>
			</router-link>
            <router-link class="mui-tab-item" to="/goods">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">{{$store.getters.optCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link  class="mui-tab-item" to="/tabbr">
				<span class="mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">我的</span>
			</router-link >
		</nav>
 </div>
</template>
<script>
    
</script>
<style>
   .app-container{
     padding-bottom:50px;
     overflow-x:hidden;
   }
span.mui-icon.mui-icon-plus{
    width:50px;
    height:50px
}
 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
