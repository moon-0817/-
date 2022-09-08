<template>
  <div>
    <h1>兄弟 - 子 -->父 -->子</h1>
    <one @onechuanzhi="shou"></one>
    <two :n="n"></two>
  </div>
</template>

<script>
import one from "../components/xiongdi/one.vue";
import two from "../components/xiongdi/two.vue";
export default {
  name: "",
  components: { one, two },
  data() {
    return {
        n:''
    };
  },
  created() {},
  mounted() {},
  methods: {
    shou(a){
      this.n=a  
    }
  },
};
</script>
<style scoped lang='scss'>
</style>

