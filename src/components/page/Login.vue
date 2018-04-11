<template>
  <div class="login">
    <h1>黑龙江大学在线考中心</h1>
    <h3>用户登录</h3>
    <el-form :model="formInline" class="demo-form-inline" label-position="left" label-width="50px">
      <el-form-item label="账号">
        <el-input v-model="formInline.id" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item class="radio-box">
        <el-radio v-model="radio" label="1">学生</el-radio>
        <el-radio v-model="radio" label="2">教师</el-radio>
      </el-form-item>
      <el-form-item label="密码" class="pass">
        <el-input type="password" v-model="formInline.pass" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item class='tip-item'>
        <router-link to="ForgetPass"> <span class='tip'>忘记密码</span></router-link>
        <router-link to="registor"><span class='tip'>注册</span></router-link>  
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="login">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formInline: {},
      radio: '1',
    };
  },
  methods: {
    login() {
      // todo....
      this.$router.push('searchScore');
    }
  }
};
</script>
<style scoped lang="scss">
.login {
  position: relative;
  padding-top: 50px;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: url("../../../static/img/bg2.jpg") no-repeat;
  background-size: cover;
  h1,
  h3 {
    color: rgb(255, 208, 0);
    font-size: 40px;
    line-height: 80px;
  }
  h3 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .el-form {
    position: absolute;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    .el-form-item {
      width: 200px;
      .el-select {
        width: 60px;
      }
      .el-button {
        width: 150px;
      }
    }
    .pass {
      margin-bottom: 0px;
    }
    .tip-item {
      height: 30px;
      margin-bottom: 20px;
      .tip {
        font-size: 12px;
        color: #409EFF;
        margin-right: 30px;
      }
    }
    .el-form-item__content {
      margin-left: 0 !important;
      .el-radio + .el-radio {
        margin-left: 0;
      }
    }
    .radio-box {
      .el-radio {
        margin-right: 10px;
      }
    }
  }
}
</style>
