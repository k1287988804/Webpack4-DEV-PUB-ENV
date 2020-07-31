<template>
  <div>
    <h1>Hello World</h1>
    <!-- <input type="button" :value="text" @click="sayHi()"> -->
    <A @quzhi="quzhi"></A>
    <B></B>
    <C @fuck='fuck' :fatherinfo = '666'></C>
    <el-button type="primary" @click="sayHi()">点我</el-button>
    {{arg}}
  </div>
</template>

<script>
import A from "./../components/AComponent.vue";
import B from "./../components/BComponent.vue";

const C = {
  data() {
    return {};
  },
  methods: {
    myfuck(){
      this.$emit('fuck');
    }
  },
  props: ['fatherinfo'],
  template: `<div>
        <h3>{{fatherinfo}}</h3>
        <input type="button" value="点我啊" @click="myfuck"></input> 
    </div>`,
};

export default {
  data() {
    return {
      text: "点我",
      arg: "",
    };
  },
  methods: {
    async sayHi() {
      const { text: text } = await this.$fetch.get("/API/rkl.php");
      alert(text);
    },
    quzhi(arg) {
      this.arg = arg;
    },
    fuck(){
      alert('fuck');
    }
  },
  components: {
    A,
    B,
    C,
  },
};
</script>

<style lang='less' scoped>
</style>