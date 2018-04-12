<template>
  <div class="sidebar" >
    <el-aside width="150px" >
      <template v-if="flag">
        <el-menu :default-openeds="['1', '3']" style="min-height: 100%;" background-color="#fff" text-color="#666" router>
          <el-menu-item index="examLogin">
            <template slot="title"><i class="el-icon-message"></i>在线考试</template>
          </el-menu-item>
          <el-menu-item index="onlinePractice">
            <template slot="title"><i class="el-icon-menu"></i>在线练习</template>
          </el-menu-item>
          <el-menu-item index="searchScore">
            <template slot="title"><i class="el-icon-setting"></i>成绩查询</template>
          </el-menu-item>
          <el-menu-item index="talkAbout">
            <template slot="title"><i class="el-icon-setting"></i>留言交流</template>
          </el-menu-item>
        </el-menu>
      </template>
      <template v-else>
        <el-menu :default-openeds="['1', '3']" style="min-height: 100%;" background-color="#fff" text-color="#666" router>
          <el-menu-item index="fabu">
            <template slot="title"><i class="el-icon-message"></i>发布考试</template>
          </el-menu-item>
          <el-menu-item index="studentForm">
            <template slot="title"><i class="el-icon-menu"></i>学生名单</template>
          </el-menu-item>
          <el-menu-item index="searchScore">
            <template slot="title"><i class="el-icon-setting"></i>主观题判分</template>
          </el-menu-item>
          <el-menu-item index="talkAbout">
            <template slot="title"><i class="el-icon-setting"></i>重难点分析</template>
          </el-menu-item>
          <el-menu-item index="talkAbout">
            <template slot="title"><i class="el-icon-setting"></i>成绩查询</template>
          </el-menu-item>
          <el-menu-item index="talkAbout">
            <template slot="title"><i class="el-icon-setting"></i>留言交流</template>
          </el-menu-item>
        </el-menu>
      </template>
    </el-aside>
    
  </div>
</template>
<script>
export default {
  name: "Siderbar",
  data() {
    return {
      flag:true
    };
  },
  computed: {
    
  },
  mounted(){
    if(this.$store.state.formInline.role == 1) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  },
  methods: {
    
  }
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
