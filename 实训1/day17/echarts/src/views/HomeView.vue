
<template>
  <div class="home">
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    var option = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["hhh", "jjj", "aaa", "sss", "ddd", "fff"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [50, 70, 96, 110, 130, 90],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    fetch("/westeros.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        echarts.registerTheme("westeros", res);
        var myChart = echarts.init(document.getElementById("main", "westeros"));
        myChart.setOption(option);
      });
  },
  methods: {},
};
</script>
<style scoped lang='scss'>
</style>
