<template>
  <div class="student-form">
    <el-form>
      <el-form-item label="学生班级">
        <el-select v-model="studentForm.region" placeholder="请选择学生班级">
          <el-option label="2014级软件构造2班" value="shanghai"></el-option>
          <el-option label="2014级软件构造3班" value="shanghai"></el-option>          
          <el-option label="2014级数据结构1班" value="beijing"></el-option>
          <el-option label="2014级数据结构2班" value="beijing"></el-option>
          <el-option label="2014级数据结构3班" value="beijing"></el-option>
          <el-option label="2014级数据库1班" value="beijing"></el-option>
          <el-option label="2014级数据库2班" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "StudentForm",
  data() {
    return {
      studentForm: {
        region:'',
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.student-form {
}
</style>
