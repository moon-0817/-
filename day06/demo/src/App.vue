<template>
  <div id="app">
    <nav>
      <ul>
        <router-link to="/xiongdi" tag="li">兄弟 - 子 -->父 -->子</router-link>
        <router-link to="/meiguanxi" tag="li"
          >非兄弟非父子，没有关系 -event -bus</router-link
        >
        <router-link to="/houdai" tag="li">后代 provide inject</router-link>
        <router-link to="/kuaceng" tag="li">跨层 $attrs $listeners</router-link>
      </ul>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {

  data() {
    return {
       flag:"哈哈哈"
    };
  },
  //提供
  provide(){
    return {
      "flag":this.flag
    }
  }

};
</script>
<style lang="scss">
</style>
