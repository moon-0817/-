
<template>
  <div id="app">
    <h1>
      state: {{ $store.state.n }} getters {{ $store.getters.mony }} mapState
      {{ n }}

      <button @click="$store.commit('jiajia', 1)">+1</button>
      <button @click="fn1">+1</button>
      <button @click="jiajia(1)">+1</button>
      <button @click="jj(3)">+1</button>
      <button @click="jjj(3)">+1</button>
    </h1>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    fn1() {
      this.$store.commit("jiajia", 1);
      // console.log(111);
    },
    ...mapMutations(["jiajia"]),
    ...mapMutations({
      jj: "jiajia",
    }),
    ...mapMutations({
      jjj: (commit, n) => commit("jiajia", n),
    }),
  },
  computed: {
    cn() {
      return this.$store.state.mony;
    },
    ...mapState(["n"]),
  },
};
</script>
<style scoped lang='scss'>
</style>
