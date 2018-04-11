<template>
  <div class="modify-info">
   <h2>修改密码</h2>
   <div class="modify">
      <label class='label'>原密码</label><el-input v-model="pass" type="password" @blur="checkPass"></el-input>
      <label class='label'>新密码</label><el-input v-model="newPass" type="password" prop="pass" @focus="resetTips"></el-input>
      <label class='label'>确认密码</label><el-input v-model="conNewPass" type="password" prop="checkPass" @blur="checkIsSame"></el-input>
      <p class="tip">{{tips}}</p>
   </div>
    <el-button @click="confirm" size="small" type="primary">确定</el-button>
  </div>
</template>

<script>
export default {
  name: "ModifyInfo",
  data() {
    return {
      pass: "",
      newPass: "",
      conNewPass: "",
      tips: "",
      flag: 0
      // flag 用来表示如果原来的密码正确，且两次输入的新密码相符
    };
  },
  methods: {
    checkPass() {
      // 验证pass是否正确
      console.log("dddddd");
    },
    checkIsSame() {
      // 验证两次输入的密码是否正确
      if (this.newPass == this.conNewPass) {
        this.flag = 1;
        console.log(this.flag);
      } else {
        this.tips = "两次输入密码不一致";
      }
    },
    confirm() {
      // 确认
      //to do
      console.log("aaaaa");
      this.$router.push('searchScore')
    },
    resetTips() {
      // 重置tips提示消息
      this.tips = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modify-info {
  h2 {
    color: #409eff;
    text-align: center;
    margin-bottom: 25px;
  }
  .modify {
    width: 320px;
    position: absolute;
    left: 50%;
    margin-left: -120px;
    .label {
      width: 70px;
      display: inline-block;
    }
    .el-input {
      display: inline-block;
      width: 250px;
      margin-bottom: 10px;
    }
    .tip {
      color: #409eff;
    }
  }
  .el-button {
    margin: 170px 0 0 690px;
  }
}
</style>
