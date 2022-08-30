
<template>
  <div class="add">
    <el-card>
      <!-- 步骤条 -->
      <el-steps :active="active - 0" finish-status="success">
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <!-- tab -->
      <el-tabs
        :tab-position="tabPosition"
        style="height: 600px"
        v-model="active"
      >
        <el-tab-pane label="基本信息">
          <el-form ref="addform" :model="addform" label-width="80px">
            <el-form-item label="商品名称">
              <el-input v-model="addform.goods_name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
              <el-input v-model="addform.goods_price"></el-input>
            </el-form-item>
            <el-form-item label="商品重量">
              <el-input v-model="addform.goods_weight"></el-input>
            </el-form-item>
            <el-form-item label="商品数量">
              <el-input v-model="addform.goods_number"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="商品参数">配置管理</el-tab-pane>
        <el-tab-pane label="商品属性">角色管理</el-tab-pane>
        <el-tab-pane label="商品图片">
          <el-upload
            class="upload-demo"
            action="http://127.0.0.1:8888/api/private/v1/upload"
            :headers="headers"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :on-error="handleError"
            :file-list="fileList"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-tab-pane>
        <el-tab-pane label="商品内容">
          <quill-editor
            v-model="goods_msg"
            :options="editorOption"
          ></quill-editor>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  name: "",
  components: {},
  data() {
    return {
      tabPosition: "left",
      active: 0,
      // 添加的表单数据‘
      addform: {
        goods_name: "",
        goods_price: "",
        goods_weight: "",
        goods_number: "",
      },
      // 富文本
      goods_msg: "",
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        },
      },
      fileList: [],
      headers: {
        Authorization: this.$store.getters.token,
      },
    };
  },
  components: {
    quillEditor,
  },
  created() {},
  mounted() {},
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList);
    },
    handleError(err, file, fileList) {
      console.log(err, file, fileList);
    },
  },
};
</script>
<style scoped lang='scss'>
</style>
