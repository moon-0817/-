
<template>
  <div class="users">
    <!-- 头部 -->
    <div class="box">
      <div class="top">
        <el-input
          placeholder="请输入内容"
          v-model="query"
          class="input-with-select"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="searchBtn"
          ></el-button>
        </el-input>
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
          <el-table-column prop="mobile" label="电话"> </el-table-column
          ><el-table-column prop="role_name" label="角色"> </el-table-column>

          <el-table-column prop="mg_state" label="状态">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.mg_state"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="editFlag1(scope.row)"
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
                @click="editBtn(scope.row)"
              ></el-button>
              <el-button
                type="warning"
                icon="el-icon-setting"
                circle
                @click="distribution(scope.row)"
              ></el-button>
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                @click="del(scope.row)"
              ></el-button>
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
      <!-- 添加的弹出框 -->
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
      <!-- 编辑的模态框 -->
      <el-dialog title="提示" :visible.sync="editFlag" width="30%">
        <!-- <span>这是一段信息</span> -->
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="用户名" prop="">
            <el-input v-model="editForm.username" disabled></el-input>
          </el-form-item>

          <el-form-item label="邮箱">
            <el-input v-model="editForm.email"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="editForm.mobile"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editFlag = false">取 消</el-button>
          <el-button type="primary" @click="editAdd">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { users, addUser, delUser, editUser, editFlag } from "@/http/user";
import _ from "lodash";
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
      dialogVisible: false, //添加的弹出框的状态
      editFlag: false, //编辑的弹出框的状态
      form: {
        // 弹出框的表单
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      // 编辑的表单
      editForm: {
        username: "",
        email: "",
        mobile: "",
        id: 0,
      },
      // 搜索框
      searchVal: "",
      // 编辑ID
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
  watch: {
    tableData: {
      handler(n) {
        if (this.pagenum > 1 && n.length == 0) {
          this.pagenum -= 1;
          this.getUsers();
        }
      },
    },
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
      // console.log(res);
      this.tableData = res.data.users;
      this.total = res.data.total;
    },
    // 添加
    add() {
      this.addUser();
      this.dialogVisible = false;
      this.form = {};
    },
    // 添加
    async addUser() {
      let { username, password, email, mobile } = this.form;
      let res = await addUser({ username, password, email, mobile });
      console.log(res);
      this.getUsers();
    },
    // 删除
    del(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.delUser(row.id);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
      // console.log(row);
    },
    // 删除
    async delUser(id) {
      let res = await delUser({ id });
      console.log(res);
      // console.log(id);
      this.getUsers();
    },
    // 搜索
    // searchBtn() {
    //   this.pagenum = 1;
    //   this.getUsers();
    // },
    // lodash
    searchBtn: _.debounce(function () {
      console.log("月亮打烊了");
      this.pagenum = 1;
      this.getUsers();
    }, 2000),
    // 修改  回填
    editBtn(val) {
      console.log(val);
      this.editForm.id = val.id;
      this.editFlag = true;
      this.editForm.username = val.username;
      this.editForm.email = val.email;
      this.editForm.mobile = val.mobile;
    },
    // 编辑
    editAdd(row) {
      console.log(row);
      this.editUser();
      this.editFlag = false;
      this.$message({
        message: "恭喜你，修改成功",
        type: "success",
      });
    },
    async editUser() {
      console.log(this.editForm);
      let res = await editUser(this.editForm);
      console.log(res);
      this.getUsers();
    },
    // 修改用户状态

    async editFlag1(val) {
      // console.log(val);
      let { id, mg_state } = val;
      let res = await editFlag(id, mg_state);
      // console.log(res);
    },
    // 分配权限
    distribution(val) {
      console.log(val);
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
