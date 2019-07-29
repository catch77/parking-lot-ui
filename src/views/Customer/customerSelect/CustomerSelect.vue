<template>
<div>
 <el-row style="height:50%;margin:0 auto;text-align:center;left:20%; ">
  <el-button type="success" plain @click="handleParking" style="width:8em;font-size:2em">我要停车</el-button><br>
  <el-button type="success" plain @click="handleFetching" style="width:8em;font-size:2em" v-show="false">我要取车</el-button><br>
    <el-button type="success" plain @click="handleLookingReceipt" style="width:8em;font-size:2em" v-show="false">查看我的订单</el-button>
</el-row>
</div>
</template>
<script>
export default {
  data: function() {
    return {
      sizeForm: {
       carNo:''
      },
      canclevisible: false,
    };
  },
  props: {
    addVisible: Boolean,
  },
  methods: {
   handleLookingReceipt(){
      // this.$router.push("/");
   },
   handleParking(){
       this.$router.push("/customers/orderconfirm");
   },
   handleFetching(){
       //this.$router.push("/");
   }
  },
};
</script>
