
<template>
  <div class="roles">
    <div class="box">
      <el-button type="primary" @click="dialogVisible = !dialogVisible">
        添加角色
      </el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="roleList" style="width: 100%" border>
      <el-table-column type="expand" width="50px">
        <template slot-scope="scope">
          <div v-for="(item, index) in scope.row.children" :key="index">
            <el-row>
              <el-col :span="6">
                <el-tag closable>{{ item.authName }} </el-tag>
              </el-col>
              <el-col :span="18">
                <el-row v-for="(ele, ind) in item.children" :key="ind">
                  <el-col :span="4">
                    <el-tag closable color="#ccc">{{ ele.authName }} </el-tag>
                  </el-col>
                  <el-col :span="20"
                    ><el-tag
                      closable
                      v-for="(items, inde) in ele.children"
                      :key="inde"
                      >{{ items.authName }}
                    </el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </template>
      </el-table-column>

      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="roleName" label="角色名称"> </el-table-column>
      <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
        width="300px
      "
      >
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            @click="edit(scope.row)"
            >编辑</el-button
          ><el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="del(scope.row)"
            >删除</el-button
          ><el-button
            type="warning"
            icon="el-icon-setting"
            size="mini"
            @click="grantroles(scope.row)"
            >分配权限</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格结束 -->
    <!-- 添加的弹出框 -->
    <el-dialog title="添加" :visible.sync="dialogVisible" width="30%">
      <!-- <span>这是一段信息</span> -->
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="角色名称">
          <el-input v-model="form.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="form.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加的弹出框结束 -->
    <!-- 编辑的弹出框 -->
    <el-dialog title="编辑" :visible.sync="editFlag" width="30%">
      <!-- <span>这是一段信息</span> -->
      <el-form ref="editForm" :model="form" label-width="80px">
        <el-form-item label="角色名称">
          <el-input v-model="editForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="editForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editFlag = false">取 消</el-button>
        <el-button type="primary" @click="editRoes">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑的弹出框结束 -->
    <!-- 分配角色的弹出框 -->
    <el-dialog title="编辑" :visible.sync="grantFlag" width="30%">
      <!-- <span>这是一段信息</span> -->
      <el-tree
        :data="grantList"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="defaultChecked"
        :props="defaultProps"
        default-expand-all
      >
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="grantFlag = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 分配角色的弹出框结束 -->
  </div>
</template>

<script>
import { getroles, addroles, delroles, editroes } from "@/http/roles";
import { grantroles } from "@/http/rights";
export default {
  name: "",
  components: {},
  data() {
    return {
      roleList: [], // 表格数据
      // 添加的表单
      form: {
        roleName: "",
        roleDesc: "",
      },
      // 编辑的表单
      editForm: {
        roleName: "",
        roleDesc: "",
        id: 0,
      },
      // 添加弹出框的显示
      dialogVisible: false,
      // 编辑弹出框的显示
      editFlag: false,
      // 分配角色弹出框的显示
      grantFlag: false,
      //树形控件
      grantList: [],
      defaultProps: {
        children: "children",
        label: "authName",
      },
      defaultChecked: [],
    };
  },
  created() {},
  mounted() {
    this.getroles();
  },
  methods: {
    // 请求列表
    async getroles() {
      let res = await getroles();
      // console.log(res);
      this.roleList = res.data;
    },
    // 添加
    async add() {
      let { roleName, roleDesc } = this.form;
      let res = await addroles({ roleName, roleDesc });
      // console.log(res);
      // alert("🤣🤣🤣🤣");
      this.getroles();
      this.dialogVisible = false;
      this.$message({
        type: "success",
        message: "添加成功!",
      });
    },
    // 删除
    async del(row) {
      let { id } = row;
      // console.log(id);
      let res = await delroles(id);
      // console.log(res);
      this.$message({
        type: "success",
        message: res.meta.msg,
      });
      this.getroles();
    },
    // 编辑
    edit(val) {
      this.editFlag = true;
      this.editForm.roleName = val.roleName;
      this.editForm.roleDesc = val.roleDesc;
      this.editForm.id = val.id;
    },
    // 确认编辑
    async editRoes() {
      let res = await editroes(this.editForm);
      // console.log(res);
      this.getroles();
      this.editFlag = false;
      this.$message({
        type: "success",
        message: res.meta.msg,
      });
    },
    // 角色授权
    async grantroles(row) {
      // console.log(val);
      this.grantFlag = true;
      let res = await grantroles("tree");
      console.log(res);
      this.grantList = res.data;
      // 选中默认值
      this.defaultChecked = [];
      this.getCheckId(row, this.defaultChecked);
    },
    getCheckId(row, arr) {
      if (!row.children) {
        arr.push(row.id);
      } else {
        row.children.forEach((element) => this.getCheckId(element, arr));
      }
    },
    // 角色授权确定
  },
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
  .coent {
    width: 100%;
    display: flex;
    flex: 1;
    height: 100px;
    border: 1px solid #ccc;
    padding: 10px;
    // .left {
    //   text-align: center;
    // }
  }
}
</style>
