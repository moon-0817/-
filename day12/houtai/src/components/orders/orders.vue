
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
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 表格 -->
    </el-card>
  </div>
</template>

<script>
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
        total: "", //总条数
      },
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
    async getorders() {
      let res = await getorders({
        params: {
          query: this.page.query,
          pagenum: this.page.pagenum,
          pagesize: this.page.pagesize,
        },
      });
      console.log(res);
      this.ordersList = res.data.goods;
      this.page.total = res.data.total;
    },
  },
};
</script>
<style scoped lang='scss'>
</style>
