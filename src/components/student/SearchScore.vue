<template>
  <div class="search-score">
    <div class="search">
      考试号：<el-input></el-input>
      <el-button @click="SearchScore">查询</el-button>
    </div>
    <el-table
      :data="tableData3"
      height="550"
      border
      align='center'
      style="width: 100%">
      <el-table-column
        prop="id"
        label="考试ID"
        width="100"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="name"
        label="考试名称"
        width="136"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="choiceScore"
        label="选择题得分"
        width="110"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="fillScore"
        label="填空题得分"
        width="110"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="judgeScore"
        label="判断题得分"
        width="110"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="compreScore"
        label="综合题得分"
        width="110"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="allScore"
        label="总分"
        width="110"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="oper"
        label="详细情况"
        align='center'
        width="110"
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
  name: "SearchScore",
  data() {
    return {
      tableData3: [
        {
          id: "1",
          name: "第一场考试",
          choiceScore: "10",
          fillScore: "10",
          judgeScore: "10",
          compreScore: "1",
          allScore: "77"
        },
        {
          id: "1",
          name: "第一场考试",
          choiceScore: "10",
          fillScore: "10",
          judgeScore: "10",
          compreScore: "1",
          allScore: "77"
        },
        {
          id: "1",
          name: "第一场考试",
          choiceScore: "10",
          fillScore: "10",
          judgeScore: "10",
          compreScore: "1",
          allScore: "77"
        },
        {
          id: "1",
          name: "第一场考试",
          choiceScore: "10",
          fillScore: "10",
          judgeScore: "10",
          compreScore: "1",
          allScore: "77"
        },
        {
          id: "1",
          name: "第一场考试",
          choiceScore: "10",
          fillScore: "10",
          judgeScore: "10",
          compreScore: "1",
          allScore: "77"
        }
      ]
    };
  },
  methods: {
    SearchScore() {
      console.log("查询成绩");
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
.search-score {
  .search {
    margin-left: 360px;
    margin-bottom: 20px;
    .el-input {
      display: inline-block;
      width: 300px;
    }
  }
  .el-table {
    width: 896px !important;
    margin-left: 166px;
  }
}
</style>
