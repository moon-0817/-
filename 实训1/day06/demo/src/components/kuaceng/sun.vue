
<template>
<div>
    <p>我是孙组件--{{n}}</p>
    <button @click="$emit('m',m)">我是孙子</button>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  props:['n'],
  data () {
    return {
        m:'你好'
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>

</style>
