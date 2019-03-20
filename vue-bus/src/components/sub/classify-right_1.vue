<template>
        			<div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
                        <div id="content1" class="mui-control-content">
                        <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <mt-index-list>
                            <mt-index-section index="A">
                                <mt-cell title="Aaron"></mt-cell>
                                <mt-cell title="Alden"></mt-cell>
                                <mt-cell title="Austin"></mt-cell>
                            </mt-index-section>
                             </mt-index-list>
                        </li>
                        </ul></div>
			</div>
</template>
<script>
    export default{
         data(){
             return{}
         }
     }
</script>
<style>

.mui-col-xs-9{
    width: 75%;
    overflow-y: auto;
    height: 100%;
}
#content1{
    display:block;
}
.mint-indexsection-index{
    text-align: center;
}
</style>