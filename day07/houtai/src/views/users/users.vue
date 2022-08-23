
<template>
  <div class="users">
    <!-- 头部 -->
    <div class="box">
      <div class="top">
        <el-input></el-input>
        <el-button type="primary" @click="dialogVisible = true"
          >添加用户</el-button
        >
      </div>
      <!-- 表格部分 -->
      <div class="table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="#"> </el-table-column>
          <el-table-column prop="username" label="姓名"> </el-table-column>
          <el-table-column prop="email" label="邮箱"> </el-table-column>
          <el-table-column prop="mobile" label="电话"> </el-table-column>
          <el-table-column prop="mg_state" label="状态">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.mg_state"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </template>
          </el-table-column>
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
      <!-- 分页 -->

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
      <!-- 弹出框 -->
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <!-- <span>这是一段信息</span> -->
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="mobile">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="add">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { users } from "@/http/user";
import { addUser } from "@/http/user";
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
      currentPage4: 1,
      dialogVisible: false, //弹出框的状态
      form: {
        // 弹出框的表单
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        mobile: [{ required: true, message: "请输入电话", trigger: "blur" }],
      },
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
      this.total = res.data.total;
    },
    // 添加
    add() {
      this.addUser();
      this.dialogVisible = false;
      this.getUsers();
    },
    async addUser() {
      let { username, password, email, mobile } = this.form;
      let res = await addUser({ username, password, email, mobile });
      console.log(res);
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
      this.getUsers();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagenum = val;
      this.getUsers();
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
