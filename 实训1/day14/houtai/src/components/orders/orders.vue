
<template>
  <div class="orders">
    <el-card>
      <div class="top">
        <el-input
          placeholder="请输入内容"
          style="width: 300px"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <!-- 表格 -->
      <el-table :data="ordersList" border style="width: 100%">
        <el-table-column type="index" label="#" width="50"> </el-table-column>
        <el-table-column prop="order_number" label="订单编号">
        </el-table-column>
        <el-table-column prop="order_price" label="订单价格"> </el-table-column>
        <el-table-column prop="order_pay" label="是否付款">
          <template slot-scope="scope">
            <el-tag type="success" v-show="scope.row.order_pay == 1">
              已付款
            </el-tag>
            <el-tag type="danger" v-show="scope.row.order_pay == 0">
              未付款</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column prop="is_send" label="是否发货"> </el-table-column>
        <el-table-column prop="create_time" label="下单时间">
          <template slot-scope="scope">
            {{ scope.row.create_time | timer }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              class="el-icon-edit"
              @click="editDzhi(scope.row)"
            ></el-button>
            <el-button
              type="success"
              size="small"
              class="el-icon-location-outline"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 表格 -->
      <!-- 编辑的弹出框 -->
      <el-dialog title="提示" :visible.sync="editVisible" width="30%">
        <el-form ref="editform" :model="editform" label-width="80px">
          <el-form-item label="省市区/县">
            <!-- 级联选择器 -->
            <el-cascader
              :options="options"
              :props="editProps"
              clearable
            ></el-cascader>
          </el-form-item>
          <el-form-item label="活动名称">
            <el-input></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editVisible = false">取 消</el-button>
          <el-button type="primary" @click="editVisible">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 编辑的弹出框 -->
      <!-- 地址的弹出框 -->
      <el-dialog title="提示" :visible.sync="kusidiVisible" width="30%">
        <template>
          <el-timeline-item
            v-for="(activity, index) in activitie"
            :key="index"
            :timestamp="activity.time"
          >
            {{ activity.context }}
          </el-timeline-item>
        </template>
        <span slot="footer" class="dialog-footer">
          <el-button @click="kusidiVisible = false">取 消</el-button>
          <el-button type="primary" @click="kusidiVisibles">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 地址的弹出框/ -->
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="page.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
      >
      </el-pagination>
      <!-- 分页 -->
    </el-card>
  </div>
</template>

<script>
import { china } from "./china";
import { kuaidi } from "./kusidi";
import { getorders } from "@/http/orders";
export default {
  name: "",
  components: {},
  data() {
    return {
      ordersList: [],

      page: {
        query: "", //查询参数
        pagenum: 1, //当前页码
        pagesize: 10, //每页几条
        total: 0, //总条数
      },
      // 编辑的弹出层
      editVisible: false,
      //编辑的表单
      editform: {},
      // 级联选择器
      options: china,
      editProps: { checkStrictly: true, value: "code", label: "value" },
      // 地址
      activity: kuaidi,
      kusidiVisible: false,
      activitie: [],
    };
  },
  filters: {
    timer(val) {
      return new Date(val * 1000).toLocaleString();
    },
  },
  created() {
    this.getorders();
  },
  mounted() {},
  methods: {
    // 发送请求
    async getorders() {
      this.kusidiVisible = false;
      let res = await getorders(this.page);
      console.log(res);
      this.ordersList = res.data.goods;
      this.page.total = res.data.total;
    },
    // 编辑模态框的事件
    editDzhi() {
      this.editVisible = true;
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.page.pagesize = val;
      this.getorders();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.pagenum = val;
      this.getorders();
    },
    kusidiVisibles() {
      this.kusidiVisible = true;
    },
  },
};
</script>
<style  lang='scss'>
.el-cascader-panel {
  height: 300px;
}
</style>
