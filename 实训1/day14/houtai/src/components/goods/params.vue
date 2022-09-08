
<template>
  <div class="params">
    <el-card>
      <!-- 消息提示 -->
      <el-alert
        title="
注意:只允许为第三级分类设置参数!"
        type="warning"
        show-icon
        :closable="false"
      >
      </el-alert>
      <!-- 级联选择器 -->
      <el-form ref="addForm" :model="addForm" label-width="80px">
        <el-form-item label="选择商品分类：" :label-width="formLabelWidth">
          <!-- <el-input v-model="addForm.cat_level"></el-input> -->
          <el-cascader
            :options="splist"
            v-model="cate"
            :props="addCascaderFom"
            clearable
            @change="changeFn"
          ></el-cascader>
          {{ addForm }}
        </el-form-item>
      </el-form>
      <!-- 按钮 -->

      <!-- 标签页 -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-button
          type="primary"
          :disabled="disabled"
          @click="dialogAttrFormVisible = true"
          >{{ activeName == "many" ? "添加参数" : "添加属性" }}</el-button
        >
        <el-tab-pane label="动态参数" name="many">
          <!-- 动态参数的表格 -->
          <el-table :data="manyList" border style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-tag
                  :key="index"
                  v-for="(item, index) in scope.row.attr_vals"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(scope.row, index)"
                >
                  {{ item }}
                </el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="scope.row.inputVisible"
                  v-model="scope.row.inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm(scope.row)"
                  @blur="handleInputConfirm(scope.row)"
                >
                </el-input>
                <el-button
                  v-else
                  class="button-new-tag"
                  size="small"
                  @click="showInput(scope.row)"
                  >+ New Tag</el-button
                >
              </template>
            </el-table-column>
            <el-table-column type="index" label="#"> </el-table-column>
            <el-table-column label="商品名称" prop="attr_name">
            </el-table-column
            ><el-table-column label="操作" prop="id"> </el-table-column>
          </el-table>
        </el-tab-pane>
        <!-- 静态属性的表格 -->
        <el-tab-pane label="静态属性" name="only">
          <el-table :data="onlyList" border style="width: 100%">
            <el-table-column type="expand">
              <el-table-column type="expand">
                <template slot-scope="scope">
                  <el-tag
                    :key="index"
                    v-for="(item, index) in scope.row.attr_vals"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(scope.row, index)"
                  >
                    {{ item }}
                  </el-tag>
                  <el-input
                    class="input-new-tag"
                    v-if="scope.row.inputVisible"
                    v-model="scope.row.inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm(scope.row)"
                    @blur="handleInputConfirm(scope.row)"
                  >
                  </el-input>
                  <el-button
                    v-else
                    class="button-new-tag"
                    size="small"
                    @click="showInput(scope.row)"
                    >+ New Tag</el-button
                  >
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column type="index" label="#"> </el-table-column>
            <el-table-column label="属性名称" prop="attr_name">
            </el-table-column
            ><el-table-column label="操作" prop="id"> </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <!-- 添加的模态框 -->

    <el-dialog
      :title="activeName == 'many' ? '添加动态参数' : '添加静态属性'"
      :visible.sync="dialogAttrFormVisible"
    >
      <el-form :model="attributesForm">
        <el-form-item
          :label="activeName == 'many' ? '动态参数' : '静态属性'"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="attributesForm.attr_name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAttrFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addAttrFn">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  categories,
  getCategories,
  editCategories,
  editscategorie,
} from "@/http/goods";
export default {
  name: "",
  components: {},
  data() {
    return {
      splist: [],
      addForm: {
        cat_name: "", // 分类名称
        cat_level: "", // 分类层级 不能为空，`0`表示一级分类；`1`表示二级分类；`2`表示三级分类
        cat_pid: "", // 分类父 ID 不能为空，如果要添加1级分类，则父分类Id应该设置为  `0`
      },
      // 级联选择器
      cate: [],
      addCascaderFom: {
        label: "cat_name",
        value: "cat_id",
        checkStrictly: true,
      },
      formLabelWidth: "120px",
      // tabs
      activeName: "many",
      // 动态参数表格的数据
      manyList: [{}],
      // 静态属性的表格
      onlyList: [{}],
      // 添加表单数据
      dialogAttrFormVisible: false,
      attributesForm: {
        attr_name: "",
      },
    };
  },
  created() {
    this.categories();
  },
  mounted() {},
  methods: {
    // 请求商品分类
    async categories() {
      let res = await categories();
      // console.log(res);
      this.splist = res.data;
    },
    handleClick(tab) {
      // console.log(tab.name);
      if (this.cate.length == 3) {
        this.getCategories(tab.name);
      }
    },
    // 级联选择器
    changeFn(val) {
      // console.log(val);
      if (this.cate.length == 3) {
        console.log(this.activeName);
        this.getCategories(this.activeName);
      }
    },
    // 列表请求
    async getCategories(sel) {
      let res = await getCategories(this.cate[this.cate.length - 1], { sel });
      // console.log(res);
      res.data.forEach((item, index) => {
        item.attr_vals = item.attr_vals ? item.attr_vals.split(",") : [];
        item.inputVisible = false;
        if (item.attr_sel == "many") {
          this.manyList = res.data;
        } else {
          this.onlyList = res.data;
        }
      });
    },
    // tag标签的事件
    async handleClose(val, i) {
      console.log(val);
      // :id分类 ID不能为空`携带在url中`
      // :attrId属性 ID不能为空`携带在url中`
      // attr_name新属性的名字不能为空，携带在`请求体`中
      // attr_sel属性的类型[many或only]不能为空，携带在`请求体`中
      // attr_vals 参数的属性值可选参数，携带在`请求体`中
      val.attr_vals.splice(i, 1);
      var attr_vals = val.attr_vals.join(",");
      let res = await editCategories(
        this.cate[this.cate.length - 1],
        val.attr_id,
        {
          attr_name: val.attr_name,
          attr_sel: val.attr_sel,
          attr_vals,
        }
      );
      console.log(res);
    },
    // 添加
    async handleInputConfirm(row) {
      console.log(row.attr_name);
      if (row.inputValue) {
        row.attr_vals.push(row.inputValue);
        var attr_vals = row.attr_vals.join(",");
        let res = await editscategorie(this.cate[this.cate.length - 1], {
          attr_name: row.attr_name,
          attr_sel: row.attr_sel,
          attr_vals: attr_vals,
        });
        console.log(res);
      }
      row.inputVisible = false;
      row.inputValue = "";
    },
    showInput(row) {
      row.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    // 添加的逻辑
    async addAttrFn() {
      let res = await editscategorie(this.cate[this.cate.length - 1], {
        attr_name: this.attributesForm.attr_name,
        attr_sel: this.activeName,
      });
      console.log(res);
      this.categories(this.activeName);
      this.dialogAttrFormVisible = false;
    },
  },
  // computed改变按钮的状态
  computed: {
    disabled() {
      return this.cate.length == 3 ? false : true;
    },
  },
};
</script>
<style  lang='scss'>
.el-cascader-panel {
  height: 300px;
}
</style>
