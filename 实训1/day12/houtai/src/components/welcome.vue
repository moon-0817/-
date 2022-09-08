
<template>
  <div class="welcome">
    <h1>欢迎{{ loginToken }}回来</h1>
    <h2>ECharts入门示例</h2>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      loginToken: localStorage.getItem("houtaiusername"), //token
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
</style>
