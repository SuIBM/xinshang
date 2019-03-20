<template>
    <div class="zhaiContainer">
    <div><header class="mui-bar mui-bar-nav"><a><span class="mui-icon mui-icon-search zi_1"></span></a><h1 class="mui-title">分类</h1>
    <a id="icon-chatbubble"><span class="mui-icon mui-icon-chatbubble zi_2"></span></a>
    </header>
    </div>
    
        <div class="mui-content mui-row mui-fullscreen">
        <class-left></class-left>
        <router-view></router-view>
        </div>
        <ft></ft>
    </div>
</template>
<script>
import ft from '../ft/ftContainer.vue'
import ClassLeft from '../sub/classify-left.vue'
    export default{
        data(){
            return{}
        },
        components:{
            "class-left":ClassLeft,
            "ft":ft
        }
    }
</script>
<style>
.mui-bar-nav{
    position:fixed;
}
h1.mui-title.ru{
    left:206px;
    width:169px;
}
h1.mui-title.it{
    width:169px;
}
.mui-bar.it{
   left:208px;
}
a.it_1{
    margin-left:3.3rem;
}
a.ru_1{
    margin-right:3.3rem;
}
.zhaiContainer .mui-bar-nav.mui-bar .mui-icon{
    color:#000;
}
.zhaiContainer span.mui-icon.mui-icon-chatbubble.zi_2{
        right: 1rem;
    position: absolute;
}
.zhaiContainer .mui-fullscreen{
         top: 2.85rem;
 }
 span.mui-icon.mui-icon-search.zi_1 {
    top: 0;
}
</style>