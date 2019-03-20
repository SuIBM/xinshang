import Vue from 'vue'
import Router from 'vue-router'
//import HelloContainer from "./components/HelloWorld.vue"
//1:引入自定义组件 
import ftContainer from "./components/ft/ftContainer.vue"
import homeContainer from "./components/mode/HomeContainer.vue"
import zhaiContainer from "./components/futo/zhaiContainer.vue"
import newsContainer from "./components/news/newsContainer.vue"
import GoodsContainer from "./components/goods/GoodsContainer.vue"
import tabbrContainer from "./components/tabbr/tabbrContainer.vue"
import tabbrContainerMan from "./components/tabbr/tabbrContainerMan.vue"
import tabbrContainerhoe from "./components/tabbr/tabbrContainerhoe.vue"
import tabbrContainersser from "./components/tabbr/tabbrContainersser.vue"
import getsContainer from "./components/gets/getsContainer.vue"
import imgContainer from "./components/mode/imgContainer.vue"
import subpageComtainer from "./components/off/subpageComtainer.vue"
import subpage1Comtainer from "./components/mode/subpage1Comtainer.vue"
import subpage2Comtainer from "./components/mode/subpage2Comtainer.vue"
import sub1Comtainer from "./components/off/sub1Comtainer.vue"
import sub2Comtainer from "./components/off/sub2Comtainer.vue"
import sub3Comtainer from "./components/off/sub3Comtainer.vue"
import sub4Comtainer from "./components/off/sub4Comtainer.vue"
import sub5Comtainer from "./components/off/sub5Comtainer.vue"
import DetailContainer from './components/mode/DetailContainer.vue'
//二级路由
import classify from "./components/sub/classify-right.vue"
Vue.use(Router)
import classify_1 from "./components/sub/classify-right_1.vue"
Vue.use(Router)
import classify_2 from "./components/sub/classify-right_2.vue"
Vue.use(Router)
import classify_3 from "./components/sub/classify-right_3.vue"
Vue.use(Router)
import classify_4 from "./components/sub/classify-right_4.vue"
Vue.use(Router)
import classify_5 from "./components/sub/classify-right_5.vue"
Vue.use(Router)
import classify_6 from "./components/sub/classify-right_6.vue"
Vue.use(Router)
import classify_7 from "./components/sub/classify-right_7.vue"
Vue.use(Router)
import classify_8 from "./components/sub/classify-right_8.vue"
Vue.use(Router)

//2:配置访问自定义组件路径
//   {path访问路径 component  组件名称}
export default new Router({
  routes: [
    {path:"/ft",component:ftContainer},
    {path:"/",component:subpageComtainer},
    {path:"/mode",component:homeContainer},
    {path:"/news",component:newsContainer},
    {path:"/goods",component:GoodsContainer},
    {path:"/tabbr",component:tabbrContainer},
    {path:"/tabbrMan",component:tabbrContainerMan},
    {path:"/tabbrser",component:tabbrContainersser},
    {path:"/tabbrhoe",component:tabbrContainerhoe},
    {path:"/zhai",component:zhaiContainer,children:[
      {path:"xiaobao",component:classify_1},
      {path:"tuijian",component:classify},
      {path:"peishi",component:classify_2}
    ,{path:"xiexue",component:classify_3}
    ,{path:"fuzhuang",component:classify_4}
    ,{path:"shoushi",component:classify_5}
    ,{path:"shoubiao",component:classify_6}
    ,{path:"meizhuang",component:classify_7}
    ,{path:"qiuxie",component:classify_8}
    ]},
    {path:"/gets",component:getsContainer},
    {path:"/subpage",component:subpageComtainer},
    {path:"/mode/subpage1/",component:subpage1Comtainer},
    {path:"/subpage2",component:subpage2Comtainer},
    {path:"/sub1",component:sub1Comtainer},
    {path:"/sub2",component:sub2Comtainer},
    {path:"/sub3",component:sub3Comtainer},
    {path:"/sub4",component:sub4Comtainer},
    {path:"/sub5",component:sub5Comtainer},
    {path:"/mode/Detail/:id",component:DetailContainer},
    {path:"/img",component:imgContainer}
  ]
})


