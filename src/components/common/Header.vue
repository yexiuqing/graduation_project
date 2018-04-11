<template>
    <div class="header">
        <div class="logo">
            <!-- <span class="logo-img"></span> -->
            黑龙江大学在线考试系统
        </div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/user.jpeg">
                    {{username}}{{info}},您好！
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item ><router-link to="personalInfo">个人信息</router-link></el-dropdown-item>
                    <el-dropdown-item ><router-link to="modifyInfo">修改密码 </router-link></el-dropdown-item>
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      name: "linxin",
      info: "同学"
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    }
  },
  methods: {
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        this.$router.push("/login");
      }
    }
  }
};
</script>
<style scoped lang="scss">
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 20px;
  line-height: 70px;
  background:url('../../../static/img/timg.jpeg') no-repeat;
  background-size: cover;
  color: #fff;
  .logo {
    float: left;
    width: 360px;
    text-align: center;
  }
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.user-info .user-logo {
  position: absolute;
  left: 0;
  top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-menu__item {
  text-align: center;
  a {
      color: #606266 ;
    }
}
</style>



