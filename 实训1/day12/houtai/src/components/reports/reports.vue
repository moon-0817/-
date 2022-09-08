
<template>
  <div class="reports">
    <div id="myChart" style="width: 1500px; height: 600px"></div>
  </div>
</template>

<script>
import { getreports } from "@/http/reports";
import * as echarts from "echarts";
export default {
  name: "",
  components: {},
  data() {
    return {
      option: {},
    };
  },
  created() {},
  mounted() {
    // Apache ECharts
    this.getreports();
  },
  methods: {
    async getreports() {
      let res = await getreports();
      console.log(res);
      this.option = res.data;
      var myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption(this.option);
    },
  },
};
</script>
<style scoped lang='scss'>
</style>
