<template>
  <div>
      <h1>Hello World</h1>
      <input type="button" :value="text" @click="sayHi()">
  </div>
</template>

<script>
export default {
  data(){
    return {
      text:'点我'
    }
  },
  methods:{
    async sayHi(){
      const {text:text} = await this.$fetch.get('/API/rkl.php');
      alert(text);
    }
  }
};
</script>

<style lang='less' scoped>
</style>