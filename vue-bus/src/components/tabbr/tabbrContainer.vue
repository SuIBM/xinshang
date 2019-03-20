<<template>
    <div class="tabbrContainer">
   
        <div class="tar">
         <router-link id="icon-gear" class="active" to="/tabbrser"><span class="mui-icon mui-icon-gear-filled"></span></router-link>
         <a><span class="mui-icon mui-icon-chat ii"></span></a>
            <div class="tar_1">
            <div v-if="onOff!=1">
            <router-link  to="tabbrMan" class="mint-button mint-button--default mint-button--large rge">
            <label class="mint-button-text">立即登录</label>
          </router-link>
            </div>
            <div v-else>
            <span class="uname2">{{loginData.uname}}</span>
            <a href="#" class="title" @click.stop.prevent="singout">
            注销
            </a>      
            </div>
            </div>
        </div>
     <mt-navbar v-model="selected">
  <mt-tab-item id="1">我是买家</mt-tab-item>
  <mt-tab-item id="2">我是卖家</mt-tab-item>
</mt-navbar>

<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
  <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <ul class="mui-table-view mui-grid-view mui-grid-9">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
                                    <span>4</span>
									<div class="mui-media-body">优惠券</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
                                 <span>￥10.0</span>
									<div class="mui-media-body">红包</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
                                 <span>￥0</span>
									<div class="mui-media-body">信用额度</div>
								</a>
							</li>

						</ul>
					</div>
				</div>
			</div>
            
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <ul class="mui-table-view mui-grid-view mui-grid-9">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 hh">
								<a href="#">
                                   <span class="mui-icon-extra mui-icon-extra-topic"></span>
									<div class="mui-media-body">我的订单</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 hh">
								<a href="#">
                               <span class="mui-icon-extra mui-icon-extra-order"></span>
									<div class="mui-media-body">我租到的</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 hh">
								<a href="#">
                                  <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
									<div class="mui-media-body">收藏关注</div>
								</a>
							</li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 hh">
								<a href="#">
                                <span class="mui-icon-extra mui-icon-extra-peoples"></span>
									<div class="mui-media-body">我的社区</div>
								</a>
							</li>

						</ul>
					</div>
				</div>
			</div>


            <ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						<a href="#" class="mui-navigate-right">夺包中奖订单</a>
					</li>
					<li class="mui-table-view-cell">
						<a href="#" class="mui-navigate-right">0元抽ARMANI</a>
					</li>
					<li class="mui-table-view-cell">
						<a href="#" class="mui-navigate-right">活动报名（限时）</a>
					</li>
					<li class="mui-table-view-cell">
						<a href="#" class="mui-navigate-right">我的点心</a>
					</li>
					<li class="mui-table-view-cell">
						<a href="#" class="mui-navigate-right">心上客服</a>
					</li>
                    <li class="mui-table-view-cell">
						<a href="#" class="mui-navigate-right">意见反馈</a>
					</li>
                    <li class="mui-table-view-cell">
						<a href="#" class="mui-navigate-right">帮助中心</a>
					</li>
                    <li class="mui-table-view-cell">
						<a href="#" class="mui-navigate-right">新人福利</a>
					</li>
                    <li class="mui-table-view-cell">
						<a href="#" class="mui-navigate-right">邀请好友</a>
					</li>
                     <li class="mui-table-view-cell">
						<a href="#" class="mui-navigate-right">商家券发放中</a>
					</li>
				</ul>

  </mt-tab-container-item>
  <mt-tab-container-item id="2">
   
  </mt-tab-container-item>
</mt-tab-container>

<ft></ft>
    </div>
    
    
</template>
<script>
import ft from '../ft/ftContainer.vue'
import {setCookie,getCookie} from "../../assets/js/cookie.js"
     export default {
        data(){
            return{
                selected:"1",
                popupVisible:false,
                uname:"",
                onOff:"",
                loginData:{}
                }
        },
        mounted() {
        },
        methods:{
        islogin(){
        var url = "http://127.0.0.1:3000/islogin";
        this.$http.get(url,{withCredentials:true}).then(result=>{
          if(result.body.msg == 0){
            Toast("请先登录!");
            this.onOff = result.body.msg;
            console.log( result.body)
          }else{
            this.onOff = result.body.msg;
            this.loginData = result.body.data;
            console.log( result.body)
          }
        })
      },
     singout(){
        var url = "http://127.0.0.1:3000/singout";
        this.$http.get(url,{withCredentials:true}).then(result=>{
          location.reload();
        })
      }
        },
        created() {
           this.islogin();
        },
        components:{
            "ft":ft
        }
    }
</script>
<style>
.tabbrContainer a.mint-button.mint-button--default.mint-button--large.rge{
    display: block;
    /* width: 100%; */
    margin: 0 auto;
    /* background: #363636; */
    background-color: #363636;
    color: #fff;
    -webkit-box-shadow: none;
    border: 1px solid #fff;
    border-radius: inherit;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    font-size: 14px;
    letter-spacing: 0.2rem;
}
.tabbrContainer .mint-button--large{
    width:50%;
}
.tabbrContainer label.mint-button-text {
    text-align: center;
    line-height: 2.5rem;
}
.tabbrContainer .tar{
    width:100%;
    height:200px;
        background-color: #363636;
        position: relative;
}
.tabbrContainer .tar_1{
        padding-top: 3rem;
            display: block;
            text-align: center;
}
.tabbrContainer h3{
        margin-bottom: 1.5rem;
    font-size: 24px;
    color: #fff;
    letter-spacing: 0.2rem;
}
.tabbrContainer span.mui-icon.mui-icon-chat.ii{
    float:right;
    color:#fff;
    margin-right: 0.4rem;
    margin-top: 0.4rem;
}
.tabbrContainer .mui-icon-gear-filled{
    color:#fff;
    margin-left: 0.4rem;
    margin-top: 0.4rem;
}
.tabbrContainer a.mint-tab-item{
    color:#7E7E7E;
}
.tabbrContainer .mint-navbar .mint-tab-item.is-selected .mint-tab-item-label{
         color: #FF1A0D;
    font-size: 14px;
    height: 25px;
    display: inline-block;
    border-bottom: 1px solid #26a2ff;
}
.tabbrContainer  .mint-navbar .mint-tab-item.is-selected{
            border:0;
}
.tabbrContainer .mui-card{
        margin: 5px 0 10px 0;
}
.tabbrContainer .mui-navigate-right:after, .mui-push-left:after, .mui-push-right:after{
    color:#000;
}
.tabbrContainer li.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3.hh {
    width: 25%;
        padding: 0;
    margin: 0;
}
.tabbrContainer .mui-table-view .mui-media-body{
    overflow: visible;
}
.tabbrContainer a.mui-navigate-right{
        font-size: 14px;
}
</style>