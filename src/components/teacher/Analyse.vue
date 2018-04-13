<template>
  <!-- 显示和这个老师所授课程相关的所有考试信息，点击查询，渲染的数据刷新，输入学生的学号，只显示这个学生相应课程的所有考试信息 -->
  <div class="analyse">
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
        prop="mingti"
        label="试卷命题人"
        width="130"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="subject"
        label="科目名称"
        width="166"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="allNUm"
        label="考生人数"
        width="136"
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
        label="操作"
        align='center'
        >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleDetail(scope.$index, scope.row)"
            >进入查看</el-button>
        </template>
      </el-table-column>
    </el-table>  
  </div>
</template>

<script>
export default {
  name: "Analyse",
  data() {
    return {
      searchInfo: {
        ksh: "",
        xh: ""
      },
      searchData: [
        {
          id: "10000000000000",
          name: "第一场考试",
          mingti: "张三",
          subject: "软件工程",
          allNUm: 45,
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },
        {
          id: "1",
          name: "第一场考试",
          mingti: "张三",
          subject: "软件工程",
          allNUm: 45,
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },
        {
          id: "1",
          name: "第一场考试",
          mingti: "张三",
          subject: "计算机组成原理",
          allNUm: 45,
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },
        {
          id: "1",
          name: "第一场考试",
          mingti: "张三",
          subject: "软件工程",
          allNUm: 45,
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },
        {
          id: "1",
          name: "第一场考试",
          mingti: "张三",
          subject: "软件工程",
          allNUm: 45,
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },
        {
          id: "1",
          name: "第一场考试",
          mingti: "张三",
          subject: "软件工程",
          allNUm: 45,
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        }
      ]
    };
  },
  methods: {
    SearchScore() {
      console.log("查询成绩");
      console.log(this.searchInfo.ksh);
      // to do...
    },
    handleDetail(index, row) {
      // to do...
      this.$router.push("examDetail");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.analyse {
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
