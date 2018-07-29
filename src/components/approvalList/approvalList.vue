<template>
                <van-list
                    v-model="loading"
                    :finished="finished"
                    @load="approvalDataLoad"
                    >
                    <div class="c-approval-panel">
                        <div @click="_itemClick()">
                            <van-row  class="c-approval-item">
                                <van-row type="flex"  align="center" >
                                    <van-col span="13">IT Kim 林根森的测试模板</van-col>
                                    <van-col span="4">
                                        <van-tag plain="plain" type="primary">审批中</van-tag>
                                    </van-col>
                                    <van-col class="c-approval-date" span="7">2013-3-2</van-col>
                                </van-row>

                                <van-row class="c-approval-itemContent">
                                    <van-col span="24">测试文本1</van-col>
                                    <van-col span="24">测试文本2</van-col>
                                </van-row>
                            </van-row>
                        </div>
                    </div>

                </van-list>  
</template>

<script>
    export default {
        name:"ApprovalList",
        data(){
            return{
                loading:false,
                finished:true
            }
        },
        props:{
            data:Object,
            itemClick:Function
        },
        methods:{
            approvalDataLoad(){},
            _itemClick(){
                this.itemClick.call(this,1);
                this
                    .$router
                    .push({
                        name: 'approvalDetail',
                        query: {
                            searchVal: "gogogo"
                        }
                    });
            }
            
        }
    }
</script>

<style scoped>
    .c-approval-panel {
        padding: 10px 12px;
    }

    .c-approval-item {
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e5e5e5;
    }

    .c-approval-date {
        text-align: right;
        color: #949497;
        font-size: 13px;
    }
    .c-approval-itemContent{
        margin-top: 6px;
        margin-bottom: 6px;
        color: #949497;
        font-size: 14px;
        
    }
    .c-approval-itemContent div{
        padding-top: 6px;
    }
</style>