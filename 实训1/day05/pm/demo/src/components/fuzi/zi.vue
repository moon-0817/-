<template>
  <div>
    <h2>{{ zhi }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    zhi: {
      type: Number,
      default: 888,
    },
  },
  data() {
    return {};
  },

  mounted() {
    this.$parent.ff();
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>