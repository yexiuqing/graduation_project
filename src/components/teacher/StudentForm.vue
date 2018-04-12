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
      <el-table
        :data="tableData"
        height="550"
        border
        align='center'
        >
        <el-table-column
          type="index"
          width="80"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="id"
          label="学号"
          width="100"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="136"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="university"
          label="学院"
          width="126"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="project"
          label="专业"
          width="146"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="class"
          label="班级"
          width="170"
          align='center'>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "StudentForm",
  data() {
    return {
      studentForm: {
        region: ""
      },
      tableData: [
        {
          id: "20146340",
          name: "张娜娜",
          university: "软件",
          project: "软件工程",
          class: "3"
        },{
          id: "20146340",
          name: "张娜娜",
          university: "软件",
          project: "软件工程",
          class: "3"
        },{
          id: "20146340",
          name: "张娜娜",
          university: "软件",
          project: "软件工程",
          class: "3"
        },{
          id: "20146340",
          name: "张娜娜",
          university: "软件",
          project: "软件工程",
          class: "3"
        },{
          id: "20146340",
          name: "张娜娜",
          university: "软件",
          project: "软件工程",
          class: "3"
        },{
          id: "20146340",
          name: "张娜娜",
          university: "软件",
          project: "软件工程",
          class: "3"
        },{
          id: "20146340",
          name: "张娜娜",
          university: "软件",
          project: "软件工程",
          class: "3"
        },
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.student-form {
  .el-table {
    width: 758px;
  }
}
</style>
