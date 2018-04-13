<template>
  <div class="online-plactice">
    <h4>在线练习列表</h4>

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
        prop="people"
        label="发起人"
        width="126"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="project"
        label="科目"
        width="146"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="date"
        label="考试开始的时间"
        width="170"
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
        propoper=""
        label="操作"
        align='center'
        >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handlePractice(scope.$index, scope.row)"
            >练习</el-button>
            <!-- <router-link to="practice">练习</router-link> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "OnlinePractice",
  data() {
    return {
      tableData3: [
        {
          id: "1",
          name: "第一场考试",
          people: "张三",
          project: "数据库原理",
          date: "2016-05-03 03:23:20",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },
        {
          id: "1",
          name: "第一场考试",
          people: "张三",
          project: "数据库原理",
          date: "2016-05-03 03:23:20",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },
        {
          id: "1",
          name: "第一场考试",
          people: "张三",
          project: "数据库原理",
          date: "2016-05-03 03:23:20",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },
        {
          id: "1",
          name: "第一场考试",
          people: "张三",
          project: "数据库原理",
          date: "2016-05-03 03:23:20",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },
        {
          id: "1",
          name: "第一场考试",
          people: "张三",
          project: "数据库原理",
          date: "2016-05-03 03:23:20",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },
        {
          id: "1",
          name: "第一场考试",
          people: "张三",
          project: "数据库原理",
          date: "2016-05-03 03:23:20",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },{
          id: "1",
          name: "第一场考试",
          people: "张三",
          project: "数据库原理",
          date: "2016-05-03 03:23:20",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },{
          id: "1",
          name: "第一场考试",
          people: "张三",
          project: "数据库原理",
          date: "2016-05-03 03:23:20",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },{
          id: "1",
          name: "第一场考试",
          people: "张三",
          project: "数据库原理",
          date: "2016-05-03 03:23:20",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },{
          id: "1",
          name: "第一场考试",
          people: "张三",
          project: "数据库原理",
          date: "2016-05-03 03:23:20",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        },{
          id: "1",
          name: "第一场考试",
          people: "张三",
          project: "数据库原理",
          date: "2016-05-03 03:23:20",
          choiceNum: "10",
          fillNum: "10",
          judgeNum: "10",
          compreNum: "1"
        }
      ]
    };
  },
  methods: {
    handlePractice(index, row) {
      this.$router.push('practice')
      console.log(row.id)
      // to do...
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.online-plactice {
  h4 {
    text-align: center;
    margin-bottom: 10px;
  }
  .el-button {
    span {
      a {
        color: #fff;
      }
    }
  }
}
</style>
