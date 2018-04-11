<template>
  <div class="online-practice-text">
    <h3>练习{{id}}</h3>
    <div class="text" v-for="item in examItem">
      <p class="text-id">第{{item.num}}题</p>
      <p class="text-content">{{item.subject}}</p>
      <div class="text-answer">
        <label>选择答案：</label>
        <el-radio-group v-model="item.radio" size="small">
          <el-radio label="1" border>A</el-radio>
          <el-radio label="2" border>B</el-radio>
          <el-radio label="3" border>C</el-radio>
          <el-radio label="4" border>D</el-radio>
        </el-radio-group>
      </div>
    </div> 
    <div class="text">
      <p class="text-id">第5题</p>
      <p class="text-content">已知某一数据库中有两个数据表，它们的主关键字与主关键字之间是一个对应多个的关系，这两个表若想建立关联，应该建立的永久联系是</p>
      <div class="text-answer">
        <label>输入答案：</label>        
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
      </div>
    </div>
    <div class="text">
      <p class="text-id">第5题</p>
      <p class="text-content">已知某一数据库中有两个数据表，它们的主关键字与主关键字之间是一个对应多个的关系，这两个表若想建立关联，应该建立的永久联系是</p>
      <div class="text-answer">
        <label>输入答案：</label>        
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
      </div>
    </div>
    <div class="submit">
      <el-button type="primary" class="submit-answer" @click="submit">提交答案</el-button>
    </div>
    <div class="cancle">
      <el-button type="primary" class="submit-answer" @click="backList">返回练习列表>></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlinePracticeText",
  data() {
    return {
      textarea: "",
      id: 1,
      examItem: [
        {
          num: 1,
          subject:
            "已知某一数据库中有两个数据表，它们的主关键字与主关键字之间是一个对应多个的关系，这两个表若想建立关联，应该建立的永久联系是（）。A.一对一 B.一对多 C.多对多 D.多对一  ",
          radio: ""
        },
        {
          num: 2,
          subject:
            "已知某一数据库中有两个数据表，它们的主关键字与主关键字之间是一个对应多个的关系，这两个表若想建立关联，应该建立的永久联系是（）。A.一对一 B.一对多 C.多对多 D.多对一  ",
          radio: ""
        },
        {
          num: 3,
          subject:
            "已知某一数据库中有两个数据表，它们的主关键字与主关键字之间是一个对应多个的关系，这两个表若想建立关联，应该建立的永久联系是（）。A.一对一 B.一对多 C.多对多 D.多对一  ",
          radio: ""
        },
        {
          num: 4,
          subject:
            "已知某一数据库中有两个数据表，它们的主关键字与主关键字之间是一个对应多个的关系，这两个表若想建立关联，应该建立的永久联系是（）。A.一对一 B.一对多 C.多对多 D.多对一  ",
          radio: ""
        },
        {
          num: 5,
          subject:
            "已知某一数据库中有两个数据表，它们的主关键字与主关键字之间是一个对应多个的关系，这两个表若想建立关联，应该建立的永久联系是（）。A.一对一 B.一对多 C.多对多 D.多对一  ",
          radio: ""
        },
        {
          num: 6,
          subject:
            "已知某一数据库中有两个数据表，它们的主关键字与主关键字之间是一个对应多个的关系，这两个表若想建立关联，应该建立的永久联系是（）。A.一对一 B.一对多 C.多对多 D.多对一  ",
          radio: ""
        }
      ]
    };
  },
  methods: {
    submit() {
      this.$router.push('answer');
      //  to do..
    },
    backList() {
      this.$router.push('onlinePractice')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.online-practice-text {
  position: relative;
  h3 {
    text-align: center;
    margin-bottom: 15px;
  }
  .text {
    width: 1000px;
    margin-left: 130px;
    .text-id {
      line-height: 30px;
      width: 100%;
      background: #eee;
      margin-bottom: 10px;
      padding: 0 10px;
    }
    .text-content {
      padding: 0 10px;
      margin: 5px 0;
    }
    .text-answer {
      padding: 0 10px;
      margin: 20px 0;
    }
  }
  .submit,
  .cancle {
    display: block;
    width: 1020px;
    margin-bottom: 10px;
    height: 45px;
    margin-left: 130px;
    .submit-answer {
      width: 100%;
      height: 100%;
    }
    &:last-child {
      margin-bottom: 100px;
    }
  }
}
</style>
