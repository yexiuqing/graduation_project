<template>
  <div class="online-exam-login">
    <h2>请输入考试号</h2>
    <div class="kaoshi-content">
      
        考试号：
      <el-input v-model="kaoshihao" placeholder="请输入13位数字考试号" @focus="reSetTip">
      </el-input>
      <el-button @click="checkKsh">确定</el-button>
      <p class="tip">{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlineExamLogin",
  data() {
    return {
      kaoshihao: "",
      message: ''
    };
  },
  methods: {
    checkKsh() {
      var reg = /^\d{13}$/
      if(reg.test(this.kaoshihao)) {
        // 输入的符合要求
        // to do...
        this.$router.push('exam')
      } else {
        this.message = '考试号错误，请重新输入'
      }
    },
    reSetTip() {
      this.message = '';
    }
  }
};
</script>

<style scoped lang="scss">
.online-exam-login {
  display: table;
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .kaoshi-content {
    display:table-ceil;
    vertical-align:center;
    .el-input {
      display: inline-block;
      width: 300px;
    }
    .tip {
      color: #f00;
      margin: 10px 0;
    }
  }
}
</style>
