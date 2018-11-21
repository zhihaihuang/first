<template>
  <div id="app">
         <router-link to="./components/ratings.vue"><el-button type="primary">新增</el-button></router-link>
          <router-link to="./components/seller.vue"><el-button type="primary">查询</el-button></router-link>
         <!-- <el-button type="danger">保存</el-button>
         <el-button type="primary">审核</el-button>
         <el-button type="danger">查询</el-button>  -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>
<style>
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; color: #2c3e50; margin:0;}
h1, h2 {font-weight: normal;}
ul { list-style-type: none; padding: 0;}
li { margin: 0 10px;}
a {color: #42b983;}
.el-button{padding: 4px 6px;font-size:12px;border-radius: 2px;}
.el-button--mini{padding:4px 6px;}

</style>
