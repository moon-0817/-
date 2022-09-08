
<template>
  <div class="boxLeft1">
    <div class="top">
      <div class="left">任务通过率</div>
      <dv-decoration-3 style="width: 130px; height: 30px" />
    </div>
    <Echarts id="id" width="300px" height="250px" :option="option"></Echarts>
    <ul>
      <li>
        <p style="color: #4f9cac; font-size: 15px">￥1328.0</p>
        <p>总共完成数量（件）</p>
      </li>
      <li>
        <p style="color: #4f9cac; font-size: 15px">￥106.0</p>
        <p>今日构建总量（件）</p>
      </li>
      <li>
        <p style="color: #4f9cac; font-size: 15px">￥525.0</p>
        <p>未通过数量（件）</p>
      </li>
      <li>
        <p style="color: #4f9cac; font-size: 15px">￥636.0</p>
        <p>正在编译数量（件）</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Echarts from "@/common/echarts.vue";
export default {
  name: "boxLeft1",
  components: { Echarts },
  data() {
    return {
      option: {
        legend: {
          bottom: "2",
          left: "20%",
          orient: "horizontal",
        },

        textStyle: {
          color: "#fff",
          fontStyle: "normal",
          fontWeight: "normal",
          fontFamily: "sans-serif",
          fontSize: 12,
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: false },
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: "50%",
            center: ["50%", "40%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 3,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
            ],
          },
        ],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.boxLeft1 {
  width: 300px;
  height: 410px;
  .top {
    display: flex;
    justify-content: space-evenly;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    li {
      text-align: center;
      margin-left: 6px;
    }
  }
}
</style>
