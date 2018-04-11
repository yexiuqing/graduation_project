<template>
  <div class="fabu">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="考试名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="考试课程">
        <el-select v-model="form.subject" placeholder="请选择考试科目">
          <el-option label="软件工程" value="rg"></el-option>
          <el-option label="计算机组成原理" value="zcyl"></el-option>
          <el-option label="数据库原理" value="sjk"></el-option>
          <el-option label="数据结构与算法" value="jgysf"></el-option>          
        </el-select>
      </el-form-item>
      <el-form-item label="考试时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="考试形式">
        <el-radio-group v-model="form.type">
          <el-radio label="开卷"></el-radio>
          <el-radio label="闭卷"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="reSetForm">取消</el-button>
      </el-form-item>
    </el-form>
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
        date1: "",
        date2: "",
        type: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("ggggg");
      console.log(this.form);
    },
    reSetForm() {
      for (var i in this.form) {
        this.form[i] = "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fabu {
  .el-form {
    width: 330px;
  }
}
</style>
