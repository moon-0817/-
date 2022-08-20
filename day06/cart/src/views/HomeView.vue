
<template>
  <div class="home">
    <div class="goods_list">
      <div class="goods-item" v-for="(item, index) in list" :key="index">
        <img :src="item.pic" alt="" />
        <p>{{ item.name }}</p>
        <p>{{ item.minPrice }}</p>
        <button @click="add(item)">加入购物车</button>
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
      list: [],
    };
  },
  created() {
    this.getList();
  },
  mounted() {},
  methods: {
    getList() {
      fetch("https://api.it120.cc/xiaochengxu/shop/goods/list").then((res) =>
        res.json().then((res) => {
          console.log(res);
          this.list = res.data;
        })
      );
    },
    // 添加
    add(item) {
      this.$store.commit("add", item);
      this.$router.push("/about");
    },
  },
};
</script>
<style scoped lang='scss'>
.home {
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

