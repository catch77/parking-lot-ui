<template>
  <el-dialog
    title="管理停车场"
    :visible.sync="visible"
    width="540px"
    :show-close="false"
    :close-on-press-escape="false"
    v-loading="loading"
    @close="onClose"
  >
    <el-transfer
      v-model="parkingLotIdList"
      :data="parkingLots"
      :props="{ key: 'id', label: 'name' }"
      :titles="['不可管理', '可管理']"
    />
    <div slot="footer" class="dialog-footer">
      <el-button @click="onClose">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { updateParkingBoyParkingLot } from '../../../services/pb';

export default {
  name: 'ParkingBoyParkingLogManagement',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    parkingBoy: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      loading: false,
      parkingLotIdList: [],
    };
  },
  computed: {
    parkingLots() {
      return this.$store.getters.allParkingLotList;
    },
  },
  mounted() {
    this.fetchAllParkingLotList();
  },
  methods: {
    fetchAllParkingLotList() {
      this.loading = true;
      this.$store
        .dispatch('getAllParkingLot')
        .catch(() => {
          this.$message.error('获取停车场列表失败，请稍后重试');
        })
        .finally(() => {
          this.$loading = false;
        });
    },
    onClose() {
      this.$emit('update:visible', false);
      this.$emit('close');
    },
    onSubmit() {
      updateParkingBoyParkingLot({
        ...this.parkingBoy,
        parkingLotList: this.parkingLots.filter(item => this.parkingLotIdList.includes(item.id)),
      }).then(() => {
        this.$message.success('设置成功');
        this.onClose();
      });
    },
  },
  watch: {
    visible(val) {
      if (val) {
        this.parkingLotIdList = this.parkingBoy.parkingLotList.map(item => item.id);
      }
    },
  },
};
</script>

<style scoped></style>
