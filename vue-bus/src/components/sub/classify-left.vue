<template>
			<div class="mui-col-xs-3">
				<div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
                <router-link class="mui-control-item mui-active" data-index="1" to="/zhai/tuijian" style="font-size:25px;">推荐</router-link>
                <router-link class="mui-control-item mui-active router-link-exact-active router-link-active " data-index="2" to="/zhai/xiaobao">箱包</router-link>
                <router-link class="mui-control-item " data-index="3" to="/zhai/peishi">配饰</router-link>
               <router-link class="mui-control-item " data-index="4" to="/zhai/xiexue">鞋靴</router-link>
               <router-link class="mui-control-item " data-index="5" to="/zhai/fuzhuang">服装</router-link>
                <router-link class="mui-control-item " data-index="6" to="/zhai/shoushi">首饰</router-link>
               <router-link class="mui-control-item " data-index="7" to="/zhai/shoubiao">手表</router-link>
               <router-link class="mui-control-item " data-index="8" to="/zhai/meizhuang">美妆</router-link>
               <router-link class="mui-control-item " data-index="9" to="/zhai/qiuxie">球鞋</router-link>
				</div>
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
.mui-col-xs-3{
        width: 25%;
    overflow-y: auto;
    height: 100%;
}
#segmentedControls .mui-control-item{
    width:100%;
    line-height:3.4rem;
}
</style>