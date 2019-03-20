<template>
<div>
<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="$router.back(-1)"></a>
		    <h1 class="mui-title">设置</h1>
		</header>
<div class="mui-page-content">
				<div class="mui-scroll-wrapper" data-scroll="2">
					<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell mui-media">
								<a class="mui-navigate-right" href="#account">
									<img class="mui-media-object mui-pull-left head-img" id="head-img" src="">
									<div class="mui-media-body">
										{{name}}
										<p class="mui-ellipsis">账号:hellomui</p>
									</div>
								</a>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a href="#account" class="mui-navigate-right">账号与安全</a>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a href="#notifications" class="mui-navigate-right">新消息通知</a>
							</li>
							<li class="mui-table-view-cell">
								<a href="#privacy" class="mui-navigate-right">隐私</a>
							</li>
							<li class="mui-table-view-cell">
								<a href="#general" class="mui-navigate-right">通用</a>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a href="#about" class="mui-navigate-right">关于MUI <i class="mui-pull-right update">V3.1.0</i></a>
							</li>
						</ul>
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" style="text-align: center;">
								<a href="#" @click="quit">退出登录</a>
							</li>
						</ul>
					</div>
				<div class="mui-scrollbar mui-scrollbar-vertical"><div class="mui-scrollbar-indicator" style="transition-duration: 0ms; display: none; height: 576px; transform: translate3d(0px, 0px, 0px) translateZ(0px);"></div></div></div>
			</div>
            </div>
</template>
<script>
import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
    export default{
        data(){
            return {
				name:''
            }
        },
		mounted() {
			let uname = getCookie('uname')
			this.name = uname
			if(uname == ""){
				this.$router.push('/')
			}
		},
        methods:{
			quit(){
				delCookie('uname')
			}
        }
    }
</script>
<style>
	.mui-scroll {
    top: 3rem;
}
</style>