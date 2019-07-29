
<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="carNo"
      label="车牌号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="startTime"
      label="开始时间"
      width="100">
    </el-table-column>
    <el-table-column
      prop="endTime"
      fixed="right"
      label="结束时间"
      width="100"/>
       <el-table-column
      prop="parkingBoy"
      fixed="right"
      label="停车人"
      width="100"/>
       <el-table-column
     prop="parkingLot"
      fixed="right"
      label="停车场"
      width="100"/>
      <el-table-column
      prop="state"
      fixed="right"
      label="状态"
      width="100"/>
     
  </el-table>
</template>
<script>
export default {
  data: function() {
    return {
        tableData: [{
          startTime: '2016-05-02',
          endTime:'2018-9-6',
          name: '王小虎',
          carNo:'12345',
          parkingBoy:'张三',
          parkingLot:'一号停车场',
          state:"已完成"
        }]
    };
  },
  props: {
    addVisible: Boolean,
  },
  methods: {
    saveAdd() {
      this.$store
        .dispatch('addPL', this.form)
        .then(() => {
          this.$message.success('添加成功');
          this.cancleAdd();
        })
        .catch(() => {
          this.$message.error('添加失败');
        });
    },
    cancleAdd() {
      this.$emit('update:addVisible', this.canclevisible);
    },
  },
};
</script>
