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

        <van-tabs swipeable="swipeable">
            <van-tab title="待处理">
                <approval-list :itemClick="test" ></approval-list>
            </van-tab>

            <van-tab title="已处理">
                    <approval-list :itemClick="test" ></approval-list>
            </van-tab>

            <van-tab title="抄送我">
                    <approval-list :itemClick="test" ></approval-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import approvalList from '../../components/approvalList/approvalList';
    export default {
        components:{
            approvalList
        },
        name: "MyApproval",
        data() {
            return {
                searchVal: "",
                loading:false,
                finished:true

                }
        },
        methods: {
            /**
             * 搜索
             */
            onSearch(val) {
                console.log(val);
                this
                    .$router
                    .push({
                        name: 'myApproval',
                        query: {
                            searchVal: val
                        }
                    });
                console.log("search");
            },
            /**
             * 取消搜索
             */
            onCancel() {
                this
                    .$router
                    .push({name: 'myApproval'});
                console.log("cancel");
            },
            /**
             * 数据加载事件
             */
            approvalDataLoad(){

            },
            test(val){
                console.log(val);
                console.log("test");
            }

        }
    }
</script>



<style scoped="scoped">
    .c-approval-cancel{
        padding-left: 8px;
        padding-right: 8px;
        color: #16abf5;
    }
</style>