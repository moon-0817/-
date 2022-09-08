<template>
  <div>
    <h2>子组件 -- {{ n }}</h2>
    <button @click="fn">传值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: "啊啊啊啊",
    };
  },
  methods: {
    fn() {
      this.$emit("chuanshuju", this.n);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>