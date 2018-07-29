<template>
    <div class="c-approvalDetial-wrap">
        <!--审批信息面板-->
        <van-row class="c-apd-panel">
            <van-col span="24">
                <van-row>
                    <van-col span="24">
                        <van-row type="flex"  align="center">
                            <van-col class="c-apd-img"><img src="http://p.qlogo.cn/bizmail/TZxJt8c2O7hI0EUibj9x9GmGvblc4cyx8iawase7VaEJNoicfthHFFVicw/0" /> </van-col>
                            <van-col class="c-apd-title">我的加班申请</van-col>
                            <van-col class="c-apd-tag"><van-tag plain="plain" type="primary">审批中</van-tag></van-col>
                        </van-row>
                    </van-col>
                </van-row>
                <van-row class="c-apd-detial">
                    <van-col span="24">
                        <van-row class="c-apd-detialItem">
                            <van-col class="c-apdd-title" >审批编号</van-col>
                            <van-col offset="1" >2017423122</van-col>
                        </van-row>
                        <van-row class="c-apd-detialItem">
                            <van-col class="c-apdd-title" >其他审批</van-col>
                            <van-col offset="1" >林先生</van-col>
                        </van-row>
                        <van-row class="c-apd-detialItem">
                            <van-col class="c-apdd-title" >提交时间</van-col>
                            <van-col offset="1" >2016-3-2</van-col>
                        </van-row>


                    </van-col>
                </van-row>
            </van-col>
        </van-row>
        <!--end-->

        <!--审批流程面板-->
        <van-row class="c-apf-panel">
            <van-col class="c-apf" span="24">
                <van-row>
                    审批流程
                </van-row>
                <van-row class="c-apfw">
                    <van-row class="c-apfw-item" type="flex"  align="center">
                        <van-col class="c-apfw-icon"> 
                            <van-icon style="color:#ff5353" name="certificate" />
                        </van-col>
                        <van-col offset="1" class="c-apfw-img"><img  src="http://p.qlogo.cn/bizmail/TZxJt8c2O7hI0EUibj9x9GmGvblc4cyx8iawase7VaEJNoicfthHFFVicw/0" /></van-col>
                        <van-col offset="1" class="c-apfw-title" >IT 林根森</van-col>
                    </van-row>
                    <div class="c-apfwl-wrap">
                      <div class="c-apfw-line"></div>
                    </div>

                    <!--审批流程人员-->
                    <van-row class="c-apfw-item" type="flex"  align="center">
                        <van-col class="c-apfw-icon"> 
                            <van-icon name="check" />
                        </van-col>
                        <van-col offset="1" class="c-apfw-img"><img  src="http://p.qlogo.cn/bizmail/TZxJt8c2O7hI0EUibj9x9GmGvblc4cyx8iawase7VaEJNoicfthHFFVicw/0" /></van-col>
                        <van-col offset="1" class="c-apfw-title" >IT 林根森</van-col>
                    </van-row>
                    
                    <!--抄送人员-->
                    <van-row class="c-apfws-item" >
                        <van-col>
                            <span>抄送人员 ：</span>IT 林根森、 IT 吴浩讯、IT 谢中明
                        </van-col>
                    </van-row>
   
                </van-row>
            </van-col>
        </van-row>

        <!--审批意见-->
        <van-row class="c-apfa-panel"  >
            <div class="c-apfa-approval">
                <van-cell-group>
                    <van-field v-model="approvalText" placeholder="审批意见" />
                </van-cell-group>  
           
            </div>
            <van-row align="center" type="flex" style="height:40px;" >
                <div class="c-apfa-wrap">
                <van-col class="c-apfa-item" span="12">
                    <div @click="onAgree" class="c-apfa-btn" >
                        <i class="icon iconfont icon-duihao"></i>
                        同意
                    </div>
                </van-col>
                <van-col class="c-apfa-item"  span="12">
                    <div @click="onDisagree" class="c-apfa-btn" >
                        <i  class="icon iconfont icon-error"></i>
                        驳回
                    </div>
                </van-col>
                </div>
            </van-row>
        </van-row>

    </div>
</template>

<script>
    export default {
        name:"approvalDetail",
        data(){
            return{
                optionType:"",
                approvalText:""
            }
        },
        methods:{
            onAgree(){
                console.log("onAgree");
            },
            onDisagree(){
                console.log("onDisagree");
            }
        },
    }
</script>


<style scoped>
    /**审批信息面板**/
    .c-approvalDetial-wrap{
        height: 100%;
        background: #f5f5f5;
    }
    .c-apd-img img{
        max-width: 42px;
        max-height: 42px;
        border-radius: 5px;
    }
    .c-apd-title{
        font-size: 18px;
        font-weight: bold;
        color: black;
    }
    .c-apd-panel{
        border-bottom: 1px solid #e2e2e2;
        margin-bottom: 15px;
        padding: 16px;
        background-color: white;
    }
    .c-apd-title{
        padding-left: 16px;
    } 
    .c-apd-tag{
        padding-left: 7px;
    }
    .c-apd-detial{
        margin-top: 15px;
    }
    .c-apdd-title{
        color: #8f8f8f;
    }
    .c-apd-detialItem{
        margin-bottom: 10px;
    }

    /**End**/

    /*审批流程*/
    .c-apf-panel{
        background-color: white;
        border-top: 1px solid #e2e2e2;
        border-bottom: 1px solid #e2e2e2;
    } 

    .c-apf{
        
        padding: 16px;
        padding-bottom: 4px;
    }
    .c-apfw{
        margin-top: 12px;
    }
    .c-apfw-img img{
        max-width: 34px;
        max-height: 34px;
        border-radius: 6px;
    }
    .c-apfw-icon i{
        font-size: 16px;
        font-weight:bold;
        color: #d1d5d8;
    }
    .c-apfw-item{
        margin-bottom: 10px;
    }
    .c-apfw-title{
        font-size: 14px;
    }
    .c-apfwl-wrap{
        position: relative;
        top: 0px;
    }
    .c-apfw-line{
        position:absolute;
        top: -18px;
        display: inline-block;
        margin-left: 7px;
        height: 24px;
        width: 2px;
        background-color: #d1d5d8;
    }
    .c-apfws-item{
        border-top:1px solid #e2e2e2;
        padding-top:14px;
        padding-bottom: 14px;
        font-size: 14px;
        color: #969696;
    }


    /*审批操作*/
    .c-apfa-panel{
        position:fixed;
        bottom: 0px;
        background-color: white;
        border-top: 1px solid #e2e2e2;
        width: 100%;
        z-index: 999;
        height: 94px;
    }
    .c-apfa-wrap{
        text-align: center;
        padding-left:16px; 
        padding-right:16px; 

        width:100%;
    }
    .c-apfa-approval{
        padding-left: 16px;
        padding-right: 16px;
    }
    .c-apfa-btn {
        padding-top: 8px;
    }
    .c-apfa-btn i{
        font-weight: bold;
        font-size: 18px;
    }
    

</style>