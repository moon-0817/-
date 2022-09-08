<template>
    <div>
       <h1>子1 --{{n}}</h1>  
       <button @click="$emit('onechuanzhi',n)"> 传递给 子2</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            n: "今天不开心",
        };
    },
    methods:{
        // fn(){
        //     this.$emit("onechuanzhi",this.n);
        // }
    }
   
};
</script>