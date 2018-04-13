<template>
  <div class="fabu">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="考试名称">
        <el-input v-model="form.name" @focus="reSetTips"></el-input>
      </el-form-item>
      <el-form-item label="考试课程">
        <el-select v-model="form.subject" placeholder="请选择考试科目" @focus="reSetTips">
          <el-option label="软件工程" value="软件工程"></el-option>
          <el-option label="计算机组成原理" value="计算机组成原理"></el-option>
          <el-option label="数据库原理" value="数据库原理"></el-option>
          <el-option label="数据结构与算法" value="数据结构与算法"></el-option>          
        </el-select>
      </el-form-item>
      <el-form-item label="考试时间" @focus="reSetTips">
        <el-date-picker
          v-model="form.time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="考试形式">
        <el-radio-group v-model="form.type">
          <el-radio label="开卷"></el-radio>
          <el-radio label="闭卷"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button> {{times}}
        <el-button @click="reSetForm">取消</el-button>
        <!-- <el-button type="primary" @click="zuJuan">组卷</el-button> -->
      </el-form-item>
      <!-- <el-form-item class="kaoshihao">此次的考试号为：{{form.kaoshihao}}</el-form-item> -->
    </el-form>
    <p>{{tips}}</p>
  </div>
</template>

<script>
export default {
  name: "fabu",
  data() {
    return {
      form: {
        name: "",
        subject: "",
        time: "",
        type: "",
        kaoshihao: ""
      },
      tips: "",
      zuJuanFlag: false,
      times: ""
    };
  },
  methods: {
    onSubmit() {
      var date = new Date();
      // console.log(this.form)
      if (
        this.form.name &&
        this.form.subject &&
        this.form.time &&
        this.form.type
      ) {
        if (this.form.kaoshihao == "") {
          this.form.kaoshihao =
            "" +
            date.getFullYear() +
            (date.getMonth() + 1) +
            date.getDate() +
            (Math.round(Math.random() * 999999) + 100000);
          this.$store.state.form = this.form;
          // this.$store.state.form.time[0] = this.timeFormat(this.form.time[0]);
          // this.$store.state.form.time[1] = this.timeFormat(this.form.time[1]);
          this.$router.push("txSet");
        } else {
          this.tips = "不要重复创建！";
        }
      } else {
        this.tips = "请输入正确信息！";
      }
    },
    reSetTips() {
      this.tips = "";
    },
    reSetForm() {
      for (var i in this.form) {
        this.form[i] = "";
      }
      this.tips = "";
    },
    // 时间格式的处理
    timeFormat(time) {
      var temp = time.split('.')[0]
      var t = temp.split('T')
      var result;
      for(var i = 0; i < t.length; i++) {
        result += t[i]+" "
      }
      return result;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fabu {
  .el-form {
    width: 380px;
    .kaoshihao {
      color: #409eff;
    }
  }
}
</style>
