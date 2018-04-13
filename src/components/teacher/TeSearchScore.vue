<template>
  <!-- 显示和这个老师所授课程相关的所有考试信息，点击查询，渲染的数据刷新，输入学生的学号，只显示这个学生相应课程的所有考试信息 -->
  <div class="tesearch-score">
    <div class="search">
      考试号：<el-input v-model="searchInfo.ksh"></el-input>
      学生学号：<el-input v-model="searchInfo.xh"></el-input>
      <el-button @click="SearchScore">查询</el-button>
    </div>
    <el-table
      :data="searchData"
      height="550"
      border
      align='center'
      style="width: 100%">
      <el-table-column
        prop="id"
        label="考试ID"
        width="130"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="name"
        label="考试名称"
        width="136"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="faqiren"
        label="发起人"
        width="100"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="subject"
        label="科目"
        width="136"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="time"
        label="考试时间"
        width="210"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="choiceNum"
        label="选择题数目"
        width="110"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="fillNum"
        label="填空题数目"
        width="110"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="judgeNum"
        label="判断题数目"
        width="110"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="compreNum"
        label="综合题数目"
        width="110"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="oper"
        label="详细情况"
        align='center'
        >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleDetail(scope.$index, scope.row)"
            >查看</el-button>
        </template>
      </el-table-column>
    </el-table>  
  </div>
</template>

<script>
export default {
  name: "TeSearchScore",
  data() {
    return {
      searchInfo:{
        ksh:"",
        xh: "",
      },
      searchData: [
        {
          id: "10000000000000",
          name: "第一场考试",
          faqiren: "张三",
          subject: "软件工程",
          time: "2018/5/16 08:00:00-10:00:00",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1",
        },
        {
          id: "1",
          name: "第一场考试",
          faqiren: "张三",
          subject: "软件工程",
          time: "2018/5/16 08:00:00-10:00:00",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1",
        },
        {
          id: "1",
          name: "第一场考试",
          faqiren: "张三",
          subject: "计算机组成原理",
          time: "2018/5/16 08:00:00-10:00:00",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1",
        },
        {
          id: "1",
          name: "第一场考试",
          faqiren: "张三",
          subject: "软件工程",
          time: "2018/5/16 08:00:00-10:00:00",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1",
        },
        {
          id: "1",
          name: "第一场考试",
          faqiren: "张三",
          subject: "软件工程",
          time: "2018/5/16 08:00:00-10:00:00",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1",
        },
        {
          id: "1",
          name: "第一场考试",
          faqiren: "张三",
          subject: "软件工程",
          time: "2018/5/16 08:00:00-10:00:00",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1",
        },
      ]
    };
  },
  methods: {
    SearchScore() {
      console.log("查询成绩");
      console.log(this.searchInfo.ksh)
      // to do...
    },
    handleDetail(index, row) {
      // to do...
      this.$router.push('examDetail')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tesearch-score {
  .search {
    margin-left: 290px;
    margin-bottom: 20px;
    .el-input {
      display: inline-block;
      width: 200px;
      margin-right: 20px;
    }
  }
  .el-table {
    // width: 896px !important;
    // margin-left: 166px;
  }
}
</style>
