
<template>
  <div class="about">
    <div class="goods_list">
      <div class="goods-item" v-for="(item, index) in list" :key="index">
        <img :src="item.pic" alt="" />
        <p>{{ item.name }}</p>
        <p>{{ item.minPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      list: this.$store.state.list,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.about {
  width: 100%;
  height: 100%;
  .goods_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    .goods_item {
      width: 30%;
      img {
        width: 300px;
        height: 300px;
      }
    }
  }
}
</style>
