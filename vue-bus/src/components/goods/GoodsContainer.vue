<<template>
    <div class="GoodContainer">
    		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">购物车</h1>
		</header>
        <div class="gwx">
        <img src="" />
      <p class="price">
           <span class="now">￥{{}}</span>
           <span class="old">￥{{}}</span>
        </p>
        </div>
        <ft></ft>
    </div>
</template>
<script>
import ft from '../ft/ftContainer.vue'
     export default{
        data(){
            return{}
        },
        components:{
            "ft":ft
        }
    }
</script>
<style>
.gwx {
    top: 3rem;
    position: absolute;
}
</style>