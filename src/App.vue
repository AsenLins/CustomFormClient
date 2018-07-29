<template>
    <div id="app">
        <keep-alive>
             <topbar></topbar>
        </keep-alive>
       
        <transition :name="transitionName">
           <keep-alive>
                <router-view class="c-content-view"/>
           </keep-alive>
        </transition>
        <keep-alive>
            <menus></menus>
        </keep-alive>

    </div>
</template>

<script>
    import ApiConfig from './api/config';
    console.log(ApiConfig);
    import topbar from './components/topbar/topbar';
    import menus from './components/menus/menus';
    export default {
        components: {
            menus,
            topbar
        },
        name: 'App',
        data() {
            return {transitionName: ""}
        },
        watch: { //使用watch 监听$router的变化
            $route(to, from) {
                //如果to索引大于from索引,判断为前进状态,反之则为后退状态
                if (to.meta.index > from.meta.index) {
                    //设置动画名称
                    this.transitionName = 'slide-left';
                } else {
                    this.transitionName = 'slide-right';
                }
            }
        }

    }
</script>

<style>
    body,
    #app,
    html {
        padding: 0;
        margin: 0;
        color: #434e58;
        height: 100%;
    }
    .c-content-view {
        margin-top: 46px;
        margin-bottom: 64px;
       
    }

    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
        will-change: transform;
        transition: all 360ms;
        position: absolute;
        width: 100%;

    }
    .slide-right-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    .slide-right-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .slide-left-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .slide-left-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
</style>