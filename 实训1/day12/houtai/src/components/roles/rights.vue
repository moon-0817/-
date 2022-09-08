
<template>
  <div class="rights">
    <el-table :data="rightsList" style="width: 100%">
      <el-table-column type="index" label="#" width="50px"> </el-table-column>
      <el-table-column prop="authName" label="权限名称"> </el-table-column>
      <el-table-column prop="path" label="权限路径"> </el-table-column>
      <el-table-column prop="level" label="权限等级">
        <template slot-scope="scope">
          <el-tag type="success" v-show="scope.row.level == 0">一级</el-tag>
          <el-tag type="info" v-show="scope.row.level == 1">二级</el-tag>
          <el-tag type="warning" v-show="scope.row.level == 2">三级</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getrights } from "@/http/rights";
export default {
  name: "",
  components: {},
  data() {
    return {
      rightsList: [],
    };
  },
  created() {},
  mounted() {
    this.getrights();
  },
  methods: {
    async getrights() {
      let res = await getrights("list");
      console.log(res);
      this.rightsList = res.data;
    },
  },
};
</script>
<style scoped lang='scss'>
.rights {
  padding: 10px;
}
</style>
