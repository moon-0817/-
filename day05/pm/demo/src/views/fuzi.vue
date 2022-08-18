<template>
  <div>
    <h1>父子组件</h1>
    <p>{{ n }}</p>

    <zi :zhi="n"></zi>
    <zi></zi>
  </div>
</template>

<script>
import zi from "@/components/fuzi/zi.vue";
export default {
  data() {
    return {
      n: 123456,
    };
  },
  components: {
    zi,
  },
  methods: {
    ff() {
      console.log("啊哈哈");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>