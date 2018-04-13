<template>
  <div class="panfen">
    <div class="search">
      考试号：<el-input></el-input>
      <el-button @click="certain">确定</el-button>
    </div>
    <el-table
      :data="tableData3"
      height="550"
      align='center'
      style="width: 100%">
      <el-table-column
        prop="id"
        label="考试ID"
        width="200"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="xuehao"
        label="学号"
        width="200"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="answerId"
        label="试卷答案编号"
        width="200"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="oper"
        label="操作"
        align='center'
        width="200"
        >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleDetail(scope.$index, scope.row)"
            >进入批改</el-button>
        </template>
      </el-table-column>
    </el-table>  
  </div>
</template>

<script>
export default {
  name: "Panfen",
  data() {
    return {
      tableData3: [
        {
          id: "1",
          xuehao: "201333333",
          answerId: "1"
        },
        {
          id: "1",
          xuehao: "201333333",
          answerId: "1"
        },
        {
          id: "1",
          xuehao: "201333333",
          answerId: "1"
        },
        {
          id: "1",
          xuehao: "201333333",
          answerId: "1"
        },
        {
          id: "1",
          xuehao: "201333333",
          answerId: "1"
        },
        {
          id: "1",
          xuehao: "201333333",
          answerId: "1"
        }
      ]
    };
  },
  methods: {
    certain() {
      console.log("查询成绩");
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
.panfen {
  .search {
    margin-left: 400px;
    margin-bottom: 20px;
    .el-input {
      display: inline-block;
      width: 200px;
    }
  }
  .el-table {
    width: 896px !important;
    margin-left: 166px;
  }
}
</style>
