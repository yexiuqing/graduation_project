<template>
  <div class="shome">
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
import Header from "../common/Header.vue"
import Sidebar from "../common/Sidebar.vue"
export default {
  name: 'Shome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'v-header': Header,
    'v-sidebar': Sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shome {
  height: 100%;
  min-width: 100%;
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
