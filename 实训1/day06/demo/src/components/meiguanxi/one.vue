<template>
    <div>
       <h1>第一个组件</h1>  
       <button @click="fn"> 传递给 第二个组件</button>

       
    </div>
</template>

<script>
import {bus} from "@/bus/index.js"
export default {
   data() {
    return {
        n: "今天星期五",
    };
   },
   methods:{
    fn (){
        bus.$emit("chuanzhi",this.n)
    }
   }
   
};
</script>

