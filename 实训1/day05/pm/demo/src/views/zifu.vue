<template>
  <div>
    <h1>子父组件</h1>
    <p></p>

    <zi @chuanshuju="ff" ref="zizujian"></zi>
  </div>
</template>

<script>
import zi from "@/components/zifu/zi.vue";
export default {
  data() {
    return {};
  },
  components: {
    zi,
  },
  methods: {
    ff(s) {
      console.log(s);
    },
  },

  mounted() {
    console.log(this.$children);
    console.log(this.$refs.zizujian);
  },
};
</script>

<style lang="scss" scoped>
</style>