<template>
  <el-dialog title="编辑" :visible.sync="editVisible" width="30%" :show-close="false" :close-on-press-escape="false">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.gender" placeholder="请选择">
          <el-option label="MALE" value="MALE"></el-option>
          <el-option label="FEMALE" value="FEMALE"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="薪资">
        <el-input v-model="form.salary"></el-input>
      </el-form-item>
      <el-form-item label="入职时间">
        <el-input :value="moment(form.joinTime).format('YYYY-MM-DD')" :disabled="true"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancleEdit">取 消</el-button>
      <el-button type="primary" @click="saveEdit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import moment from 'moment';
export default {
  data: function() {
    return {
      moment,
      cancleVisible: false,
    };
  },
  props: {
    editVisible: Boolean,
    form: Object,
  },
  methods: {
    saveEdit() {
      this.$store
        .dispatch('updatePB', this.form)
        .then(() => {
          this.$message.success('修改成功');
          this.cancleEdit();
        })
        .catch(() => {
          this.$message.success('修改失败');
        });
    },
    cancleEdit() {
      this.$emit('update:editVisible', this.cancleVisible);
    },
  },
};
</script>
