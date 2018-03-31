<template>
  <div id="app">
    <el-container>
      <el-header >
        <v-header></v-header>
      </el-header>
      <el-container>
        <v-sidebar></v-sidebar>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/common/Header.vue"
import Sidebar from "./components/common/Sidebar.vue"
export default {
  name: "App",
  components: {
    'v-header': Header,
    'v-sidebar': Sidebar
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
}
#app {
  .el-container{
    height: 100%;
    min-height: 100%;
    .el-header {
      height:70px !important;
      padding: 0;
    }
  }
}
</style>
