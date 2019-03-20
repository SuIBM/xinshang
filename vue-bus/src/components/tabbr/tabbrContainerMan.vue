<template>
  <div class="app-login">
        <form id='login-form' class="mui-input-group">
            <div class="mui-input-row">
                <label>账号:</label>
                <input v-model="unameValue" id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号" >
            </div>
            <div class="mui-input-row">
                <label>密码:</label>
                <input v-model="upwdValue" id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
            </div>
            <button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary" @click="btnSubmit">登录</button>
            <button id='register' type="button" class="mui-btn mui-btn-block mui-btn-grey" @click="zhuce">注册</button>
        </form>
  </div>
</template>

<script>
    import {Toast} from "mint-ui"
  export default {
    data() {
      return {
        unameValue:"",
        upwdValue:"",
      }
    },
    methods:{
      btnSubmit(){
        var url = "http://127.0.0.1:3000/signin";
        var obj = { uname:this.unameValue,upwd:this.upwdValue };
        this.$http.post(url,obj,{withCredentials:true}).then(result=>{
          //console.log(result);
          if(result.body.code == 1){        
              Toast("登录成功");
                this.$router.push("/tabbr");
                location.reload();
          }else{
              Toast("用户名或密码错误 ,请重新输入!");
          }
        })      
      },
      zhuce(){
        var url = "http://127.0.0.1:3000/register";
        var obj = {uname:this.unameValue,upwd:this.upwdValue};
        this.$http.post(url,obj).then(result=>{
          if(result.body.code == "404"){
            Toast("用户名已存在");
            this.unameValue = "";
            this.upwdValue = "";
          }else if(result.body.code == 400 || result.body.code == 405){
            Toast("用户名不能为空");
          }else{
            Toast("注册成功!");
            this.$router.push("/tabbr");
            location.reload();
          }
        })
      }
    },
    created(){
      
    }
  }
</script>

<style>
    #login{margin-bottom:0;padding:10px 0;}
    #register{margin-bottom:0;padding:10px 0;}
</style>