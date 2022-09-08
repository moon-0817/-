
<template>
<div>
    <h1>非兄弟非父子，没有关系 -event -bus</h1>
     <one></one>

        <hr>

        <two></two>
</div>
</template>

<script>
import one from "../components/meiguanxi/one.vue";
import two from "../components/meiguanxi/two.vue";
export default {
  name: '',
  components: {one, two},
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>

</style>
