
<template>
  <div class="goods">
    <el-card>
      <!-- 搜索框部分 -->
      <div class="top">
        <el-input class="input-with-select" v-model="searchVal">
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="search"
          ></el-button>
        </el-input>
        <el-button type="primary" @click="add">添加商品</el-button>
        <el-button type="primary">导出excel表格</el-button>
      </div>
      <!-- 表格部分 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="goods_name" label="商品名称" width="300">
        </el-table-column>
        <el-table-column prop="goods_price" label="商品价格"> </el-table-column>
        <el-table-column prop="goods_weight" label="商品重量">
        </el-table-column>
        <el-table-column prop="upd_time" label="创建时间">
          <template slot-scope="scope"
            >{{ scope.row.upd_time | timer }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="delGoods(scope.row.goods_id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
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
    </el-card>
  </div>
</template>

<script>
import { getgoods, searchgoods, delgoods } from "@/http/goods";
export default {
  name: "",
  components: {},
  data() {
    return {
      tableData: [],
      currentPage4: 1,
      page: {
        query: 0,
        pagenum: 1,
        pagesize: 10,
        total: 0,
      },
      searchVal: "", //搜索框的值
    };
  },
  created() {},
  mounted() {
    this.getgoods();
  },
  methods: {
    // 请求数据
    async getgoods() {
      let { query, pagenum, pagesize } = this.page;
      let res = await getgoods({
        params: {
          query,
          pagenum,
          pagesize,
        },
      });
      console.log(res);
      this.tableData = res.data.goods;
      this.page.total = res.data.total;
    },
    // 搜索
    search() {
      console.log(this.searchVal);
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.page.pagesize = val;
      this.getgoods();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.pagenum = val;
      this.getgoods();
    },
    //删除
    async delGoods(val) {
      console.log(val);
      let res = await delgoods(val);
      console.log(res);
      this.getgoods();
    },
    // 添加
    add() {
      this.$router.push("/add");
    },
  },
  // 过滤器
  filters: {
    timer(val) {
      return new Date(val * 1000).toLocaleString();
    },
  },
};
</script>
<style scoped lang='scss'>
.goods {
  padding: 10px;
  .top {
    .input-with-select {
      width: 40%;
      margin-right: 20px;
    }
  }
}
</style>
