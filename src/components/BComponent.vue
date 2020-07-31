<template>
<div>
    {{text}}
</div>
</template>

<script>
// import eventBus from './../utils/bus.js';
export default {
    data(){
        return {
            text:'等待中......'
        }
    },
    created(){
        this.eventBus.$on('changeText',(text)=>{
            this.text = text;
        });
    }
}
</script>

<style lang='less' scoped>

</style>