
<template>
  <div class="categories">
    <el-card>
      <el-button type="primary" @click="addFlag = !addFlag">添加分配</el-button>
      <div class="box">
        <tree-table
          :data="splist"
          :columns="defaultProps"
          :selection-type="false"
          :expand-type="false"
          index-text="索引"
          :show-row-hover="false"
          show-index
          border
        >
          <!-- 是否有效 -->
          <template slot="isok" slot-scope="scope">
            <i
              class="el-icon-success"
              style="color: lightgreen"
              v-if="scope.row.cat_deleted === false"
            ></i>
          </template>
          <!-- 排序 -->
          <template slot="sorts" slot-scope="scope">
            <el-tag :type="scope.row.cat_level | levelcolor">{{
              scope.row.cat_level | level
            }}</el-tag>
          </template>
          <!-- 操作 -->
          <template slot="caozuo" slot-scope="scope">
            <el-button type="primary" size="mini" @click="edit(scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" size="mini" @click="del(scope.row)"
              >删除</el-button
            >
          </template>
        </tree-table>
      </div>
    </el-card>
    <!-- 添加分类的弹出框 -->
    <el-dialog title="添加" :visible.sync="addFlag" width="30%">
      <!-- <span>这是一段信息</span> -->
      <el-form ref="addForm" :model="addForm" label-width="80px">
        <el-form-item label="分类名称">
          <el-input v-model="addForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类">
          <!-- <el-input v-model="addForm.cat_level"></el-input> -->
          <el-cascader
            :options="splist"
            v-model="addForm.cat_pid"
            :props="addCascaderFom"
            clearable
          ></el-cascader>
          {{ addForm }}
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addFlag = false">取 消</el-button>
        <el-button type="primary" @click="addfen">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加分类的弹出层结束 -->
    <!-- 编辑分类的弹出层 -->
    <el-dialog title="添加" :visible.sync="editFlag" width="30%">
      <!-- <span>这是一段信息</span> -->
      <el-form ref="deitForm" :model="deitForm" label-width="80px">
        <el-form-item label="分类名称">
          <el-input v-model="deitForm.cat_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editFlag = false">取 消</el-button>
        <el-button type="primary" @click="editfen">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  categories,
  addcategories,
  delcategories,
  editcategories,
} from "@/http/goods";
export default {
  name: "",
  components: {},
  data() {
    return {
      splist: [],
      // tree-table数据
      defaultProps: [
        {
          label: "分类名称",
          prop: "cat_name",
        },
        {
          label: "是否有效",
          // 表示当前列为模板列
          type: "template",
          // 表示当前这一列的模板名称
          template: "isok",
        },
        {
          label: "排序",
          type: "template",
          template: "sorts",
        },
        {
          label: "操作",
          type: "template",
          template: "caozuo",
        },
      ],
      //  添加弹出层
      addFlag: false,
      addForm: {
        cat_name: "", // 分类名称
        cat_level: "", // 分类层级 不能为空，`0`表示一级分类；`1`表示二级分类；`2`表示三级分类
        cat_pid: "", // 分类父 ID 不能为空，如果要添加1级分类，则父分类Id应该设置为  `0`
      },
      //   编辑弹出层
      editFlag: false,
      deitForm: {
        cat_name: "",
      },
      //   级联选择器
      addCascaderFom: {
        label: "cat_name",
        value: "cat_id",
        checkStrictly: true,
      },
      // 编辑的id
      id: "",
    };
  },
  created() {},
  mounted() {
    this.categories();
  },

  methods: {
    // 请求列表
    async categories() {
      let res = await categories();
      console.log(res);
      this.splist = res.data;
    },
    // 添加分类
    async addfen() {
      let length = this.addForm.cat_pid.length;
      let cat_name = this.addForm.cat_name;
      let cat_pid = length === 0 ? 0 : this.addForm.cat_pid[length - 1];
      let cat_level = length == 0 ? 0 : length;
      let res = await addcategories({
        cat_name,
        cat_pid,
        cat_level,
      });
      console.log(res);
      this.addFlag = false;
      this.categories();
    },
    // 删除分类
    async del(row) {
      let { cat_id } = row;
      //   console.log(row);
      let res = await delcategories(cat_id);
      console.log(res);
      this.categories();
    },
    //编辑分类
    edit(row) {
      console.log(row);
      this.id = row.cat_id;
      this.editFlag = true;
    },
    // 确定编辑
    async editfen() {
      let res = await editcategories({
        id: this.id,
        cat_name: this.deitForm.cat_name,
      });
      console.log(res);
      this.editFlag = false;
      this.categories();
    },
  },
};
</script>
<style  lang='scss'>
.el-cascader-panel {
  height: 300px;
}
</style>
