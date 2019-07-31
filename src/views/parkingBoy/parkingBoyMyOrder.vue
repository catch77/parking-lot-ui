<template>
    <div>
        <div class="card">
            <el-card class="box-card" :body-style="{ padding: '60px' }">
            <div  class="clearfix">
            <span>查看所有订单</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="handle">进入</el-button>
            </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
    handle() {
      this.$router.push('/pb/orderlsit');
    },
    },
    
}
</script>

<style lang="scss" scoped>

</style>
