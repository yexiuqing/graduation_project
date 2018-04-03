<template>
  <div class="registor">
    <h1>在线考试系统</h1>
    <h3>用户注册</h3>
    <div class="registor-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-position="left" label-width="70px"> 
        <el-form-item label="用户角色">
          <el-select v-model="formInline.region">
            <el-option label="学生" value="student"></el-option>
            <el-option label="教师" value="teacher"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="formInline.id" placeholder="学号"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formInline.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="formInline.pass" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="formInline.repass" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registor",
  data() {
    return {
      formInline: {
        region: "",
        id: "",
        name: "",
        pass: "",
        repass: ""
      }
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.registor {
  padding-top: 50px;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: url("../../../static/img/bg1.jpg") no-repeat;
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
  .registor-form {
    .el-form-item {
      display: block; 
      .el-select {
        width: 100px;
      }
      .el-button {
        width: 254px;
      }
    }
  }
}
</style>
