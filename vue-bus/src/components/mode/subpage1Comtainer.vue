<template>
<div class="app-goodslist">

     <div class="goods-item"  v-for="item in subpage1"
     :key="item.id">
      <img :src="item.img_url"
      @click="getDetail(item.id)" />
      
      <p class="price1">
           <span class="now1 now1_1">{{item.label}}</span>
           <span class="old1">{{item.title}}</span>
        </p>
      <div class="info">
        <p class="price">
           <span class="now">￥{{item.now}}</span>
           <span class="old">￥{{item.old}}</span>
        </p>
      </div>
     </div>
  </div>
</template>
<script>
    export default {
   data(){
     return {
          subpage1:[],
          show:1
     }
   },
   methods:{
       getDetail(id){
           console.log(id);
           this.$router.push("/mode/Detail/"+id)
       },
     page1Comtainer(){
         var show=this.show
         var url="http://127.0.0.1:3000/subpage1?show="+show
         this.$http.get(url).then(result=>{
             this.subpage1 = result.body;
         })
   }
   },
    created() {
        this.page1Comtainer();
    }
 }
</script>
<style>
.app-goodslist{
     display:flex;     /*最外层设置弹性布局*/
     flex-wrap:wrap;   /*子元素换行*/
     justify-content:space-between;/*两端对齐*/
     padding:7px;      /*为子元素内补丁*/
   }
   .app-goodslist .goods-item{
      width:49%;               /*元素宽度*/
      border:1px solid #ccc;   /*边框*/
      box-shadow:0 0 8px #ccc; /*阴影*/
      margin:4px 0 ;
      padding:2px;
      display:flex;           /*弹性布局*/
      flex-direction:column;  /*垂直布局*/
      justify-content:space-between;/*两端对齐*/
   }
   .app-goodslist .goods-item img{
      width:100%;
   }
   .old{
           text-decoration: line-through;
    margin-left: 0.7rem;
   }
   .now{
       color: #000;
    font-size: 21px;
    font-weight: bold
   }
   .price{
          margin: 0.5rem 0 0.5rem 0;
  }
  .now1{
      border: 0.04rem solid red;
    border-radius: 0.3rem;
    color: red;
    padding: 0.2rem 0.5rem 0 0.5rem;
    font-size: 14px;
    letter-spacing: 0.1rem;
  }
  .price1{
      margin: 1rem 0 0 0.2rem;
  }
  .old1{
      margin-left: 0.7rem;
  }
</style>