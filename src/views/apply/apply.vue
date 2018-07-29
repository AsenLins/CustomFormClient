<template>
<van-row  class="c-icon-panel">
  <van-col  span="8">
     <van-row class="c-icon-item" type="flex" justify="center" align="center" >
         <van-col>
             <div><i style="color:rgb(243,156,18)" class="c-icon icon ct ct-wodeshenpi"></i></div>
             <div class="c-icon-title">请假申请</div>
         </van-col>
     </van-row>
  </van-col>
  <van-col  span="8">
     <van-row class="c-icon-item" type="flex" justify="center" align="center" >
         <van-col>
             <div><i style="color:rgb(243,156,18)" class="c-icon icon ct ct-baoxiao"></i></div>
             <div class="c-icon-title">加班申请</div>
         </van-col>
     </van-row>
  </van-col>
  <van-col  span="8">
     <van-row class="c-icon-item" type="flex" justify="center" align="center" >
         <van-col>
             <div><i style="color:rgb(83,206,163)" class="c-icon icon ct ct-daichuhang"></i></div>
             <div class="c-icon-title">费用报销</div>             
         </van-col>
     </van-row>
  </van-col>

  <van-col  span="8">
     <van-row class="c-icon-item" type="flex" justify="center" align="center" >
         <van-col>
             <div><i style="color:rgb(92,187,239)" class="c-icon icon ct ct-overtime"></i></div>
             <div class="c-icon-title">其他申请</div>             
         </van-col>
     </van-row>
  </van-col>

</van-row>
</template>

<script>
    import '../../css/icon/formIcon/iconfont.css';
    export default {
        name:"Apply"
    }
</script>


<style scoped>

    .c-icon-item{
        text-align: center;
        height: 106px;
        border-right:1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
    }
    .c-icon{
        font-size: 38px;
    }
    .c-icon-title{
        margin-top: 6px;
        font-size: 14px;
    }
</style>