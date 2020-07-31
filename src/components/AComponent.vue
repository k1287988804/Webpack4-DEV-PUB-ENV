<template>
<div>
    <el-button @click="sendMessage">点我传递消息</el-button>
</div>
</template>

<script>
// import eventBus from './../utils/bus.js';
export default {
    methods:{
        sendMessage(){
            this.eventBus.$emit('changeText','改变了');
        }
    }
}
</script>

<style lang='less' scoped>

</style>