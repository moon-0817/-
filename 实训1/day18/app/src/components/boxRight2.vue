
<template>
  <div class="boxRight2">
    任务完成排行榜
    <dv-scroll-board :config="config" style="width: 280px; height: 350px" />
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      config: {
        header: ["#", "组件", "分支", "覆盖率"],
        data: [
          ["1", "组件2", "行1列3"],
          ["2", "组件8", "行2列3"],
          ["3", "组件7", "行3列3"],
          ["3", "组件5", "行4列3"],
          ["w", "组件4", "行5列3"],
          ["w", "组件3", "行6列3"],
          ["12", "行7列2", "行7列3"],
          ["3", "行8列2", "行8列3"],
          ["45", "行9列2", "行9列3"],
          ["1", "行10列2", "行10列3"],
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
.boxRight2 {
  width: 300px;
  height: 410px;
}
</style>
