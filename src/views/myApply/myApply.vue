<template>
<div>
        <form action="/">
        
            <van-search
                v-model="searchVal"
                placeholder="请输入标题,人名,状态"
                show-action
                @search="onSearch">
               <div slot="action" class="c-approval-cancel" @click="onCancel">取消</div>
            </van-search>
        </form>

        <approval-list :itemClick="test" ></approval-list>

</div>


  
</template>

<script>
    import approvalList from '../../components/approvalList/approvalList';
    export default {
        components:{
            approvalList
        },
        name:"MyApply",
        data(){
            return{
                searchVal:"",

            }
        },
        methods:{
            test(val){
                console.log(val);
            },
            onSearch(val){
                console.log(val);
                this
                    .$router
                    .push({
                        name: 'myApply',
                        query: {
                            searchVal: val
                        }
                    });
            },  
            onCancel(){
                this
                    .$router
                    .push({
                        name: 'myApply'
                    });
            }
        }
    }
</script>



<style scoped>
    .c-approval-cancel{
        padding-left: 8px;
        padding-right: 8px;
        color: #16abf5;
    }
</style>