<template>
<div>
    <h1>跨层 $attrs $listeners</h1>
     <zi @m="fn" :n="n"></zi>
</div>
</template>

<script>
import zi from "../components/kuaceng/zi.vue";
export default {
  name: '',
  components: {zi},
  data () {
    return {
        m:'',
        n:"holle"
    }
  },
  created () { },
  mounted () { },
  methods: {
     fn(d){
        console.log(d);
        this.m =d;
    }
  }
}
</script>
<style scoped lang='scss'>

</style>
