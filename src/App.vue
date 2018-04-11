<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
// import Header from "./components/common/Header.vue"
// import Sidebar from "./components/common/Sidebar.vue"
export default {
  name: "App",
  // components: {
  //   'v-header': Header,
  //   'v-sidebar': Sidebar
  // }
};
</script>

<style scoped lang="scss">
body{
  margin: 0;
}
#app {
  color: #666;
}
</style>
