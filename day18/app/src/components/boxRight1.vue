
<template>
  <div class="boxRight1">
    产品销售渠道分析
    <div class="top">
      <dv-capsule-chart :config="config" style="width: 300px; height: 150px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      config: {
        data: [
          {
            name: "南阳",
            value: 167,
          },
          {
            name: "周口",
            value: 67,
          },
          {
            name: "漯河",
            value: 123,
          },
          {
            name: "郑州",
            value: 55,
          },
          {
            name: "西峡",
            value: 98,
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
.boxRight1 {
  width: 300px;
  height: 410px;
}
</style>
