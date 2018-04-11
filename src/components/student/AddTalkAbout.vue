<template>
  <div class="add-talkabout">
   <h2>{{addOrRrply}}</h2>
   <el-input
   type="textarea"
   :rows='6'
   placeholder="请输入留言内容"
   v-model="addMessage">
   </el-input>
   <el-button type="primary" @click="submitMsg">提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'AddTalkAbout',
  data () {
    return {
      addMessage: '',
      addOrRrply: '新增留言' 
      // addOrRrply进来先判断是留言还是回复消息
    }
  },
  methods: {
    submitMsg() {
      this.$router.push('talkAbout')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.add-talkabout {
  position: relative;
  .el-textarea {
    width: 600px;
    margin: 15px 0;
  }
  .el-button{
    position: absolute;
    margin: 180px 0 0 -70px;
  }
}
</style>
