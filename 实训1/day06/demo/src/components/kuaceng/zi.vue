
<template>
<div>
    <p>我是子组件</p>
   <sun v-on="$listeners" v-bind="$attrs"></sun>
</div>
</template>

<script>
import sun from "./sun.vue"
export default {
  name: '',
  components: {sun},
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
