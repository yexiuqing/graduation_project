<template>
  <div class="zujuan-result">
    <!-- {{$store.state.multipleSelection}} -->
    <h2 class="exam-name">{{$store.state.form.subject}}{{$store.state.form.name}}</h2>
    <p class="exam-nav">选择题 {{$store.state.txForm.xzNum}} 题, 判断题 {{$store.state.txForm.pdNum}} 题, 填空题 {{$store.state.txForm.tkNum}} 题, 综合题 {{$store.state.txForm.zhNum}} 题</p>
    <p class="exam-time">考试时间:{{$store.state.form.time[0]}}--{{$store.state.form.time[1]}}</p>
     <el-table
      :data="zjTableData"
      align='center'
      style="width: 100%">
      <el-table-column
        prop="name"
        label="考试名称"
        width="136"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="project"
        label="考试题型"
        width="146"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="timu"
        label="考试问题"
        width="800"
        align='center'>
      </el-table-column>
    </el-table>
    <el-button class="certainFb" type="primary" @click="finishFb">确认发布</el-button>
    <el-button class="cancleFb" type="primary">取消</el-button>    
  </div>
</template>

<script>
export default {
  name: "ZuJuanResult",
  data() {
    return {
      zjTableData: [
        {
          name: "",
          project: "",
          timu: ""
        }
      ]
    };
  },
  methods: {
    finishFb() {
      this.$router.push('finishExam')
    }
  },
  mounted() {
    this.zjTableData = this.$store.state.multipleSelection;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.zujuan-result {
  .exam-name, .exam-nav, .exam-time {
    text-align: center;
    margin-bottom: 20px;
    
  }
  .el-button {
    // float: right;
    margin-top: 30px;
    margin-bottom: 100px;
    display: inline-block;
  }
  .certainFb {
     margin-left: 850px;
  }
  .cancleFb {
     
  }
}
</style>
