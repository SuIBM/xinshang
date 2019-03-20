<<template>
    <div class="app-newsContainer">
        <div class="status">
            <div class="status_1">
            <p class="us1">买的真 卖的快</p>
            <p class="us2">90%商品平均15天内售出</P>
            </div>
             <div class="status_1">
            <p class="us3">买的真 卖的快</p>
            <p class="us4">90%商品平均15天内售出</P>
            </div>
        </div>
        <div class="status_2">
        <div class="tus">
        <a class="active"><span class="mui-icon-extra mui-icon-extra-gift">
        </span><span class="mui-badge new">保卖</span></a>
        <p class="status_2_1">个人寄卖</P>
        </div>
        <div class="tus_1">
        <a class="active"><span class="mui-icon-extra mui-icon-extra-topic yu">
        <p class="status_2_2">个人寄卖</P>
        </span></a>
        
        </div>
        </div>
        <a class="status3">
         <div class="status_3">
         <div class="status_3_1">
        <h3>保卖服务</h3>
        <p class="to">15天保卖售出,全额收款</p>
          <p class="to_1">查看保卖支持品牌</p>  
          <img class="img" src="../img/22.png">
          </div>
         
         </div>
        </a>
        <img class="img_1" src="../img/4127.png">
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
span.mui-icon-extra.mui-icon-extra-topic.yu {
    /* font-size: 2rem; */
    /* position: relative; */
    margin: 2rem 4.4rem 3.4rem 4rem;
    position: relative;
}
.tus{
    width: 50%;
    float: left;
}
.tus_1{
    width: 50%;
    float: left;
}
.app-newsContainer .status_2 {
       width: 100%;
    position: relative;
    height: 9.6rem;
}
.app-newsContainer p.status_2_2 {
    position: absolute;
    top: 4.6rem;
    right: 0rem;
    width: 100%;
} 
.app-newsContainer p.status_2_1 {
    margin: 0;
    position: absolute;
    top: 6.6rem;
    buttom: -4.8rem;
    left: 4.6rem;
}
.app-newsContainer .status {
        width: 90%;
    border: 1px solid #EDE3BF;
    height: 127px;
    padding: 10px 10px;
    margin-bottom: 15px;
    margin-left: 18px;
    background-color: #F7F7F2;
    margin-top: 15px;
}
.app-newsContainer p.us1 {
    font-size: 22px;
    color: #000;
    float: left;
    font-weight: bold;
    margin-right: 1.2rem;
}
.app-newsContainer p.us2 {
    /* margin-top: 1rem; */
    /* padding: 1rem; */
    position: relative;
    top: 0.3rem;
    color: #3B3B3B;
}
.app-newsContainer p.us3 {
    float: left;
    margin-top: 2rem;
    color: #000;
    margin-right: 0.7rem;
}
.app-newsContainer p.us4 {
    position: relative;
    top: 2rem;
}
.app-newsContainer .active{
     font-size: 3rem;
         position: relative
}
.app-newsContainer .mui-icon-extra{
        font-size: 3rem;
            padding: 0.6rem;
            border-radius: 3rem;
    background-color: #EA080D;
    margin: 2rem 4.4rem 3.4rem 4.4rem;
        color: #fff;
}
.app-newsContainer span.mui-badge.new{
        position: absolute;
    right: 3rem;
    bottom: 3rem;
    border-radius: 1rem 1rem 1rem 0;
        background-color: #EA080D;
    border: 2px solid #fff;
        color: #fff;
    font-size: 12px;
    padding: rem;
    padding-right: 0.5rem;
}
.app-newsContainer span.mui-icon.mui-icon-camera{
    font-size: 4.1rem;
        border-radius: 3rem;
    background-color: #EA080D;
        margin-left: 1rem;
            color: #fff;
}
.app-newsContainer p.to{
    margin:0;
        color: #313131;
    margin: 0.3rem 0 0.3rem 0;
        font-size: 12px;
}
.app-newsContainer.status_1 {
    margin-top: 0.5rem;
}
.app-newsContainer .status_3 {
   background-color: #E3E3E3;
       padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    color: #000;

}
.app-newsContainer a.status3 {
  position: relative;
    float: left;
    width: 100%;
}
.app-newsContainer .status_3_1 {
    margin-left: 1rem;
}
.app-newsContainer p.to_1{
    margin: 0;
    border: 1px solid #8f8f94;
    display: initial;
    padding: 0.3rem 1rem 0.3rem 1rem;
    /* position: relative; */
    color: #000;
        font-size: 12px;
}
.app-newsContainer .img{
    width: 26%;

    right: 1rem;
    top: 0rem;
    position: absolute;
}
.app-newsContainer img.img_1 {
        width: 90%;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    border: 1px solid #EDE3BF;
}
</style>