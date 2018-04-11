<template>
  <div class="talk-about">
    <h2>留言列表</h2>
    <p class="addMsg" @click="addMsg">新增留言</p>
    <div class="msg-content" v-for="item in message">
      <span class="stu">【用户】{{item.lsId}} 【留言时间】：{{item.lmsgTime}}</span>
      <el-button size="mini" @click="reply">回复</el-button>      
      <p class="msg">【留言内容】：{{item.lMsg}}</p>
      <p class="reply">【用户】{{item.rsId}} 【回复时间】：{{item.rmsgTime}} <span class="reply-conetnt">【回复内容】：{{item.rMsg}}</span></p>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "TalkAbout",
  data() {
    return {
      message: [
        {
          lsId: "111233",
          lmsgTime: "2018-04-10",
          lMsg:
            "使用 Access 按用户的应用需求设计的结构合理、使用方便、高效的数据库和配套的应用程序系统，属于一种（）。",
          rsId: "467466",
          rmsgTime: "2018-04-18",
          rMsg:
            "A数据库 B数据库管理系统 C数据库应用系统 D数据模型 C 54.二维表由行和列组成，每一行表示关系的一个（）。 A属性 B字段 C集合 D记录 D 55.数据库是（）。"
        },
        {
          lsId: "111233",
          lmsgTime: "2018-04-10",
          lMsg:
            "使用 Access 按用户的应用需求设计的结构合理、使用方便、高效的数据库和配套的应用程序系统，属于一种（）。",
          rsId: "467466",
          rmsgTime: "2018-04-18",
          rMsg:
            "A数据库 B数据库管理系统 C数据库应用系统 D数据模型 C 54.二维表由行和列组成，每一行表示关系的一个（）。 A属性 B字段 C集合 D记录 D 55.数据库是（）。"
        },
        {
          lsId: "111233",
          lmsgTime: "2018-04-10",
          lMsg:
            "使用 Access 按用户的应用需求设计的结构合理、使用方便、高效的数据库和配套的应用程序系统，属于一种（）。",
          rsId: "467466",
          rmsgTime: "2018-04-18",
          rMsg:
            "A数据库 B数据库管理系统 C数据库应用系统 D数据模型 C 54.二维表由行和列组成，每一行表示关系的一个（）。 A属性 B字段 C集合 D记录 D 55.数据库是（）。"
        },
        {
          lsId: "111233",
          lmsgTime: "2018-04-10",
          lMsg:
            "使用 Access 按用户的应用需求设计的结构合理、使用方便、高效的数据库和配套的应用程序系统，属于一种（）。",
          rsId: "467466",
          rmsgTime: "2018-04-18",
          rMsg:
            "A数据库 B数据库管理系统 C数据库应用系统 D数据模型 C 54.二维表由行和列组成，每一行表示关系的一个（）。 A属性 B字段 C集合 D记录 D 55.数据库是（）。"
        },
        {
          lsId: "111233",
          lmsgTime: "2018-04-10",
          lMsg:
            "使用 Access 按用户的应用需求设计的结构合理、使用方便、高效的数据库和配套的应用程序系统，属于一种（）。",
          rsId: "467466",
          rmsgTime: "2018-04-18",
          rMsg:
            "A数据库 B数据库管理系统 C数据库应用系统 D数据模型 C 54.二维表由行和列组成，每一行表示关系的一个（）。 A属性 B字段 C集合 D记录 D 55.数据库是（）。"
        },
        {
          lsId: "111233",
          lmsgTime: "2018-04-10",
          lMsg:
            "使用 Access 按用户的应用需求设计的结构合理、使用方便、高效的数据库和配套的应用程序系统，属于一种（）。",
          rsId: "467466",
          rmsgTime: "2018-04-18",
          rMsg:
            "A数据库 B数据库管理系统 C数据库应用系统 D数据模型 C 54.二维表由行和列组成，每一行表示关系的一个（）。 A属性 B字段 C集合 D记录 D 55.数据库是（）。"
        }
      ]
    };
  },
  methods: {
    addMsg() {
      this.$router.push('addTalkAbout')
    },
    reply() {
      // to do
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.talk-about {
  line-height: 1.5;
  h2 {
    text-align: center;
  }
  .addMsg {
    text-align: center;
    cursor: pointer;
    color: #409eff;
  }
  .msg-content {
    .el-button {
      display: inline-block;
    }
    .reply {
      // margin-bottom: 20px;
    }
    hr {
      margin: 20px 0;
    }
    &:last-child {
      margin-bottom: 100px;
    }
  }
}
</style>
