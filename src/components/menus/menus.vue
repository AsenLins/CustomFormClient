<template>

    <van-row class="c-menus-panel">
        
        <van-col v-for="menu in this.menus.list" :key="menu.name" class="c-menus-itemwrap" :span="8">
            <van-row class="c-menus-item" type="flex" justify="center" align="center">
                <van-col class="c-menus-content">
                    <div class="c-menus-default" :class="{'c-menus-activity':activiteMenu===menu.name}"  @click="changeRouter(menu.name)">
                        <div>
                            <i class="c-menus-icon" :class="menu.icon" ></i>
                        </div>
                        <div class="c-menus-text">{{menu.title}}</div>
                    </div>
                </van-col>
            </van-row>
        </van-col>
    </van-row>

</template>

<script>
    import "../../css/icon/baseIcon/iconfont.css";
    import templateMap from '../../store/modules/template/templateMap';
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: "menus",
        data(){
            return {
                activiteMenu:"apply",
                menus:{}
            }
        },
        beforeMount(){
            this.activiteMenu=this.$router.history.current.name;
            this.menus=this.menusGet();
        },
        methods: {
            ...mapActions(templateMap.actions),
            ...mapGetters(templateMap.getters),
            changeRouter(routerName) {
                this.activiteMenu=routerName;
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
    .c-menus-default{

    }
    .c-menus-activity{
        color: #ff5353;
    }
</style>