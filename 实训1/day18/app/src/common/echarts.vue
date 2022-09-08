
<template>
  <div :id="id" :style="{ width: width, height: height }"></div>
</template>

<script>
export default {
  props: ["id", "width", "height", "option"],
  name: "",
  components: {},
  data() {
    return {
      myChart: "",
    };
  },
  created() {},
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById(this.id));

    this.myChart.setOption(this.option);
  },
  methods: {},
};
</script>
<style scoped lang='scss'>
</style>
