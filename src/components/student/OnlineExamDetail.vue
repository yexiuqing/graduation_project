<template>
  <div class="online-exam-detail">
    <h3>详细情况</h3>
    <p class="studentInfo">考生：{{sId}}--考试Id：{{ksId}}</p>
    <div class="text" v-for="item in analysis">
      <p class="text-id">第{{item.num}}题</p>
      <p class="text-content">{{item.subject}}</p>
      <p class="correct-answer">【正确答案】：{{item.correctAnswer}}</p>
      <p class="student-answer">【考生答案】：{{item.studentAnswer}}</p>
      <p class="emphasis">【考题考点】：{{item.learningEmphasis}}</p>
    </div> 
     <div class="back" @click="backList">
      <el-button type="primary" class="back-list" >返回成绩列表>></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineExamDetail',
  data () {
    return {
      sId:'234487473734711',
      ksId: 1,
      analysis: [
        {
          num: 1,
          subject:
            "已知某一数据库中有两个数据表，它们的主关键字与主关键字之间是一个对应多个的关系，这两个表若想建立关联，应该建立的永久联系是（）。A.一对一 B.一对多 C.多对多 D.多对一  ",
          correctAnswer: "A",
          studentAnswer: "A",
          learningEmphasis: "数据库表的查找"
        },
        {
          num: 2,
          subject:
            "已知某一数据库中有两个数据表，它们的主关键字与主关键字之间是一个对应多个的关系，这两个表若想建立关联，应该建立的永久联系是（）。A.一对一 B.一对多 C.多对多 D.多对一  ",
          correctAnswer: "A",
          studentAnswer: "A",
          learningEmphasis: "数据库表的查找"
        },
        {
          num: 3,
          subject:
            "关系数据库中的表不必具有的性质是（）。 A.数据项不可再分 B.同一列数据项要具有相同的数据类型 C.记录的顺序可以任意排列 D.字段的顺序不能任意排列",
          correctAnswer: "A",
          studentAnswer: "A",
          learningEmphasis: "数据库表的查找"
        },
        {
          num: 4,
          subject:
            "已知某一数据库中有两个数据表，它们的主关键字与主关键字之间是一个对应多个的关系，这两个表若想建立关联，应该建立的永久联系是（）。A.一对一 B.一对多 C.多对多 D.多对一  ",
          correctAnswer: "A",
          studentAnswer: "A",
          learningEmphasis: "数据库表的查找"
        }
      ]
    }
  },
  methods: {
    backList() {
      // to do 
      this.$router.push('searchScore')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.online-exam-detail {
  h3 {
    text-align: center;
    margin-bottom: 15px;
  }
  .studentInfo {
    text-align: center;
  }
  .text {
    width: 1000px;
    margin-left: 130px;
    &:last-child {
      // margin-bottom: 100px;
    }
  }
  .text-id {
    line-height: 30px;
    width: 100%;
    background: #eee;
    margin: 10px 0;
    padding: 0 10px;
  }
  .text-content {
    padding: 0 10px;
    margin: 5px 0;
  }
  .correct-answer,
  .student-answer,
  .emphasis {
    line-height: 30px;
    width: 100%;
    background: #eee;
    // margin-bottom: 10px;
    padding: 0 10px;
  }
  .back {
    display: block;
    width: 1020px;
    margin:15px 0 100px 130px;
    height: 45px;
    .back-list {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
