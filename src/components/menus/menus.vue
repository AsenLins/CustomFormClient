<template>

    <van-row class="c-menus-panel">
        <van-col class="c-menus-itemwrap" :span="8">
            <van-row class="c-menus-item" type="flex" justify="center" align="center">
                <van-col class="c-menus-content">
                    <div @click="changeRouter('apply')">
                        <div>
                            <i class="c-menus-icon icon iconfont icon-xinshenqing"></i>
                        </div>
                        <div class="c-menus-text">新申请</div>
                    </div>
                </van-col>
            </van-row>
        </van-col>

        <van-col class="c-menus-itemwrap" :span="8">
            <van-row class="c-menus-item" type="flex" justify="center" align="center">
                <van-col class="c-menus-content">
                    <div @click="changeRouter('myApproval')">
                        <div>
                            <i class="c-menus-icon icon iconfont icon-shenpi"></i>
                        </div>
                        <div class="c-menus-text">我审批的</div>
                    </div>
                </van-col>
            </van-row>
        </van-col>

        <van-col class="c-menus-itemwrap" :span="8">
            <van-row class="c-menus-item" type="flex" justify="center" align="center">
                <van-col class="c-menus-content">
                    <div @click="changeRouter('myApply')">
                        <div>
                            <i class="c-menus-icon icon iconfont icon-shangchuan"></i>
                        </div>
                        <div class="c-menus-text">我提交的</div>
                    </div>
                </van-col>
            </van-row>
        </van-col>

    </van-row>

</template>

<script>
    import "../../css/icon/baseIcon/iconfont.css";

    export default {
        name: "menus",
        methods: {
            changeRouter(routerName) {
                console.log(routerName);
                this.$router.push(routerName);

            }

        }
    }
</script>

<style scoped="scoped">
    .c-menus-panel {
        position: fixed;
        bottom: 0;
        border-top: 1px solid #bbbbbb;
        background-color: #f9f9f9;
        height: 64px;
        width: 100%;
    }
    .c-menus-item,
    .c-menus-itemwrap {
        height: 100%;
        text-align: center;
    }
    .c-menus-icon {
        font-size: 26px;
    }
    .c-menus-text {
        margin-top: 4px;
        font-size: 12px;
    }
</style>