
<template>
  <div class="users">
    <div class="box">
      <div class="top">
        <el-input></el-input>
        <el-button type="primary">添加用户</el-button>
      </div>
      <div class="table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="#"> </el-table-column>
          <el-table-column prop="username" label="姓名"> </el-table-column>
          <el-table-column prop="email" label="邮箱"> </el-table-column>
          <el-table-column prop="mobile" label="电话"> </el-table-column>
          <el-table-column prop="roleName" label="状态"> </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                @click="handleClick(scope.row)"
              ></el-button>
              <el-button
                type="warning"
                icon="el-icon-setting"
                circle
              ></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { users } from "@/http/user";
export default {
  name: "",
  components: {},
  data() {
    return {
      query: "",
      pagenum: 1,
      pagesize: 3,
      total: 0,
      tableData: [],
    };
  },
  created() {},
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      let res = await users({
        params: {
          query: this.query,
          pagenum: this.pagenum,
          pagesize: this.pagesize,
        },
      });
      console.log(res);
      this.tableData = res.data.users;
      this.pagenum = res.data.pagenum;
      this.total = res.data.total;
    },
  },
};
</script>
<style scoped lang='scss'>
.users {
  width: 100%;
  height: 100%;
  padding: 20px;
  .box {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
    .top {
      width: 100%;
      display: flex;
      .el-input {
        width: 40%;
        margin-right: 10px;
      }
    }
  }
}
</style>
