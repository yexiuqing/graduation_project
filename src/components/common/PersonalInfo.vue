<template>
  <div class="personal-info">
    <div class="info-content">
      <p class="name">姓名：{{personalInfo.name}}</p>
      <p class="id">编号：{{personalInfo.id}}</p>
      <p class="teil">联系电话：{{personalInfo.teil}}</p>
      <p class="email">电子邮箱：{{personalInfo.email}}</p>
      <p class="college">学院：{{personalInfo.college}}</p>
      <p class="speciality">专业：{{personalInfo.speciality}}</p>
      <p class="grade">年级：{{personalInfo.grade}}</p>
    </div>
    <el-button size="mini"><router-link to="searchScore">返回</router-link></el-button>
  </div>
</template>

<script>
export default {
  name: "PersonalInfo",
  data() {
    return {
      personalInfo: {
        name: "张娜娜",
        id: "1234455555",
        teil: "14234243243243",
        email: "1124934298@qq.com",
        college: "软件学院",
        speciality: "软件工程",
        grade: "2014"
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.personal-info {
  position: relative;
  .info-content {
    position: absolute;
    left: 50%;
    margin-left: -160px;
    width: 400px;
    text-align: left;
    line-height: 2;
  }
  .el-button {
    margin: 270px 0 0 650px;
    a {
      color: #606266;
    }
  }
}
</style>
