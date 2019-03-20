<template>
<div>
<mt-navbar v-model="selected">
  <mt-tab-item id="1">精选女生</mt-tab-item>
  <mt-tab-item id="2">精选男士</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
       <subpage1></subpage1>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
   <subpage2></subpage2>
  </mt-tab-container-item>
</mt-tab-container>
</div>
</template>
<script>
import subpage1 from '../mode/subpage1Comtainer.vue'
import subpage2 from '../mode/subpage2Comtainer.vue'
    export default{
        data(){
            return {selected:"1"}
        },
        components:{
      "subpage1":subpage1,
      "subpage2":subpage2,
    },
    }
</script>
<style>
    
</style>