<template>
        			<div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
                        <div id="content1" class="mui-control-content">
                        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
           <router-link to="/home/newslist">
		        <img src="../img/3_2.png" />
		         <div class="mui-media-body">新闻资讯</div>
           </router-link>
             </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <!--a  @click.stop.prevent="jumpShop()"-->
                <router-link to="/home/goodslist">
                 <img src="../img/3_2.png" />
                 <div class="mui-media-body">商品</div>
                </router-link>        
                <!--/a-->
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../img/3_2.png" />
		                    <div class="mui-media-body"> 点餐</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photo">
		                    <img src="../img/3_2.png" />
		                    <div class="mui-media-body">图片列表</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../img/3_2.png" />
		                    <div class="mui-media-body">成功</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../img/3_2.png" />
		                    <div class="mui-media-body">列表</div></a></li>
		        </ul>     
                        
                        </div>
			</div>
</template>
<script>
    export default{
         data(){
             return{}
         }
     }
</script>
<style>

.mui-col-xs-9{
    width: 75%;
    overflow-y: auto;
    height: 100%;
}
#content1{
    display:block;
}
#segmentedControlContents img{
    width:60px;
}
</style>pmg
