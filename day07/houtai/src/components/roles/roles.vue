
<template>
  <div class="roles">
    <div class="box">
      <el-button type="primary"> 添加角色 </el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="roleList" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {} from "@/http/roles";
export default {
  name: "",
  components: {},
  data() {
    return {
      roleList: [], // 表格数据
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.roles {
  width: 100%;
  height: 100%;
  padding: 10px;
  .box {
    background-color: #fff;
    padding: 20px;
  }
}
</style>
