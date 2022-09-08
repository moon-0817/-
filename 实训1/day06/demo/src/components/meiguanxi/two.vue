<template>
    <div>
       <h1>第二个组件 ---{{nn}}</h1>   
    </div>
</template>

<script>
import {bus} from "@/bus/index.js"
export default {
    data() {
        return {
            nn: '',
        };
    },
    created(){
        bus.$on("chuanzhi",(d)=>{
            console.log(d);
            this.nn=d;
        })
    }
   
};
</script>