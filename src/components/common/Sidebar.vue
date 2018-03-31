<template>
  <div class="sidebar" >
    <el-aside width="150px" >
      <el-menu :default-openeds="['1', '3']" style="min-height: 100%;" background-color="#fff" text-color="#666">
        <el-menu-item index="1">
          <template slot="title"><i class="el-icon-message"></i>在线考试</template>
        </el-menu-item>
        <el-menu-item index="2">
          <template slot="title"><i class="el-icon-menu"></i>在线练习</template>
        </el-menu-item>
        <el-menu-item index="3">
          <template slot="title"><i class="el-icon-setting"></i>成绩查询</template>
        </el-menu-item>
         <el-menu-item index="4">
          <template slot="title"><i class="el-icon-setting"></i>留言交流</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
export default {
  name: "Siderbar",
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style scoped lang="scss">
.sidebar {
  height: 100%;
  min-height: 100%;
  .el-aside {
    color: #fff;
    min-height: 100%;
    height: 100%;
    background-color: #324057;
    .el-menu {
      .el-menu-item {
        min-width: 149px;
        .el-submenu__title i {
          color: #419cf7;
        }
      }
    }
  }
}
</style>
