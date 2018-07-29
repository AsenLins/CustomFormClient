<template>
<van-nav-bar
  class="c-topbar"
  fixed
  title="审批"
  @click-left="onClickLeft"
>
 <van-icon class="c-arrow"  name="arrow-left" slot="left" />

</van-nav-bar>
</template>

<script>
    export default {
        name:"topbar",
        active:"",
        methods:{
            onClickLeft(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
.c-arrow{
    color: white;
}
.c-topbar{
    height: 46px;
    background-color: #ff5353;
    color: white;
    font-size: 16px;
   
  
}
</style>