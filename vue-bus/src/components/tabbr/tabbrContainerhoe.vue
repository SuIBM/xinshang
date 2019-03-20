<template>
    <div>
       <div class="register-wrap">
            <h3>注册</h3>
            <input type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <button @click="addUset">注册</button>
        </div>

    </div>
</template>
 
<script>
/*引入公共方法*/
import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
    export default{
        data(){
            return{
               newUsername:'',
               newPassword:''
            }
        },
        mounted() {
        },
        methods:{
           addUset(){
             if(this.newUsername == "" || this.newPassword == ""){
                 alert("请输入用户名或密码")
             }else{
                 let data = {'username':this.newUsername,'passsword':this.newPassword}
                 this.$http.post('http://127.0.0.1:3000/addUset',data).then((res)=>{
                     console.log(res)
                     if(res.data == "ok"){
                         this.username = ''
                         this.passsword = ''
                     }
                 })
             }
           }


        }
    }
</script>