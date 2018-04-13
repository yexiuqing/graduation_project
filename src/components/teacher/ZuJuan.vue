<template>
  <div class="zu-juan">
   <p>您已选：选择题 {{$store.state.txForm.xzNum}} 题共 {{$store.state.txForm.xzScore}} 分,  判断题 {{$store.state.txForm.pdNum}} 题共 {{$store.state.txForm.pdScore}} 分, 填空题 {{$store.state.txForm.tkNum}} 题共 {{$store.state.txForm.tkScore}} 分, 综合题 {{$store.state.txForm.zhNum}} 题共 {{$store.state.txForm.zhScore}} 分</p>
    <el-table
      :data="zjTableData"
      align='center'
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="考试名称"
        width="136"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="project"
        label="考试题型"
        width="146"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="timu"
        label="考试问题"
        width="800"
        align='center'>
      </el-table-column>
    </el-table>
    <el-button type="primary" size="small" @click="handleSelectionResult">确定组卷</el-button>
    <el-button  size="small" @click="comeBack">返回上一级</el-button>  
    <el-button  size="small" @click="cancle">取消</el-button>
      
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    
  </div>
</template>

<script>
export default {
  name: "ZuJuan",
  data() {
    return {
      zjTableData: [
        {
          name: "计算机组成原理",
          project: "选择题",
          timu:
            "43.有关字段的数据类型不包括（）A字段大小可用于设置文本,数字或自动编号等类型字段的最大容量 B 可对任意类型的字段设置默认值属性 C 有效性规则属性是用于限制此字段输入值的表达式 D 不同的字段类型,其字段属性有所不同"
        },
        {
          name: "计算机组成原理",
          project: "选择题",
          timu:
            "43.有关字段的数据类型不包括（）A字段大小可用于设置文本,数字或自动编号等类型字段的最大容量 B 可对任意类型的字段设置默认值属性 C 有效性规则属性是用于限制此字段输入值的表达式 D 不同的字段类型,其字段属性有所不同"
        },
        {
          name: "计算机组成原理",
          project: "选择题",
          timu:
            "43.有关字段的数据类型不包括（）A字段大小可用于设置文本,数字或自动编号等类型字段的最大容量 B 可对任意类型的字段设置默认值属性 C 有效性规则属性是用于限制此字段输入值的表达式 D 不同的字段类型,其字段属性有所不同"
        },
        {
          name: "计算机组成原理",
          project: "判断题",
          timu:
            "43.有关字段的数据类型不包括（）A字段大小可用于设置文本,数字或自动编号等类型字段的最大容量 B 可对任意类型的字段设置默认值属性 C 有效性规则属性是用于限制此字段输入值的表达式 D 不同的字段类型,其字段属性有所不同"
        },
        {
          name: "计算机组成原理",
          project: "选择题",
          timu:
            "43.有关字段的数据类型不包括（）A字段大小可用于设置文本,数字或自动编号等类型字段的最大容量 B 可对任意类型的字段设置默认值属性 C 有效性规则属性是用于限制此字段输入值的表达式 D 不同的字段类型,其字段属性有所不同"
        },
        {
          name: "计算机组成原理",
          project: "选择题",
          timu:
            "43.有关字段的数据类型不包括（）A字段大小可用于设置文本,数字或自动编号等类型字段的最大容量 B 可对任意类型的字段设置默认值属性 C 有效性规则属性是用于限制此字段输入值的表达式 D 不同的字段类型,其字段属性有所不同"
        },
        {
          name: "计算机组成原理",
          project: "判断题",
          timu:
            "43.有关字段的数据类型不包括（）A字段大小可用于设置文本,数字或自动编号等类型字段的最大容量 B 可对任意类型的字段设置默认值属性 C 有效性规则属性是用于限制此字段输入值的表达式 D 不同的字段类型,其字段属性有所不同"
        },
        {
          name: "计算机组成原理",
          project: "选择题",
          timu:
            "43.有关字段的数据类型不包括（）A字段大小可用于设置文本,数字或自动编号等类型字段的最大容量 B 可对任意类型的字段设置默认值属性 C 有效性规则属性是用于限制此字段输入值的表达式 D 不同的字段类型,其字段属性有所不同"
        },
        {
          name: "计算机组成原理",
          project: "综合题",
          timu:
            "43.有关字段的数据类型不包括（）A字段大小可用于设置文本,数字或自动编号等类型字段的最大容量 B 可对任意类型的字段设置默认值属性 C 有效性规则属性是用于限制此字段输入值的表达式 D 不同的字段类型,其字段属性有所不同"
        },
        {
          name: "计算机组成原理",
          project: "选择题",
          timu:
            "43.有关字段的数据类型不包括（）A字段大小可用于设置文本,数字或自动编号等类型字段的最大容量 B 可对任意类型的字段设置默认值属性 C 有效性规则属性是用于限制此字段输入值的表达式 D 不同的字段类型,其字段属性有所不同"
        },
        {
          name: "计算机组成原理",
          project: "选择题",
          timu:
            "43.有关字段的数据类型不包括（）A字段大小可用于设置文本,数字或自动编号等类型字段的最大容量 B 可对任意类型的字段设置默认值属性 C 有效性规则属性是用于限制此字段输入值的表达式 D 不同的字段类型,其字段属性有所不同"
        },
        {
          name: "计算机组成原理",
          project: "综合题",
          timu:
            "43.有关字段的数据类型不包括（）A字段大小可用于设置文本,数字或自动编号等类型字段的最大容量 B 可对任意类型的字段设置默认值属性 C 有效性规则属性是用于限制此字段输入值的表达式 D 不同的字段类型,其字段属性有所不同"
        },
        {
          name: "计算机组成原理",
          project: "选择题",
          timu:
            "43.有关字段的数据类型不包括（）A字段大小可用于设置文本,数字或自动编号等类型字段的最大容量 B 可对任意类型的字段设置默认值属性 C 有效性规则属性是用于限制此字段输入值的表达式 D 不同的字段类型,其字段属性有所不同"
        }
      ],
      multipleSelection: [],
      xzNum: 0,
      tkNum: 0,
      pdNum: 0,
      zhNum: 0,
      tip: "",
      message: ""
    };
  },
  methods: {
    // 获取勾选的题目
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.$store.state.multipleSelection = this.multipleSelection;
    },
    // 处理选题完成
    handleSelectionResult() {
      var len = this.multipleSelection.length;
      for (var i = 0; i < len; i++) {
        if (this.multipleSelection[i].project == "选择题") {
          this.xzNum < this.$store.state.txForm.xzNum
            ? this.xzNum++
            : (this.tip = "选择题数量达到");
        } else if (this.multipleSelection[i].project == "填空题") {
          this.tkNum < this.$store.state.txForm.tkNum
            ? this.tkNum++
            : (this.tip = "填空题数量达到");
        } else if (this.multipleSelection[i].project == "判断题") {
          this.pdNum < this.$store.state.txForm.pdNum
            ? this.pdNum++
            : (this.tip = "判断题数量达到");
        } else {
          this.zhNum < this.$store.state.txForm.zhNum
            ? this.zhNum++
            : (this.tip = "判断题数量达到");
        }
      }
      if (
        // (this.xzNum =
        //   this.$store.state.txForm.xzNum &&
        //   this.tkNum == this.$store.state.txForm.tkNum &&
        //   this.pdNum == this.$store.state.txForm.pdNum &&
        //   this.zhNum == this.$store.state.txForm.zhNum)
        1
        
      ) {
        this.message =
          "选择题 " +
          this.$store.state.txForm.xzNum +
          "题共" +
          this.$store.state.txForm.xzScore +
          "分, 判断题 " +
          this.$store.state.txForm.pdNum +
          "题共" +
          this.$store.state.txForm.pdScore +
          "分, 填空题" +
          this.$store.state.txForm.tkNum +
          "题共" +
          this.$store.state.txForm.tkScore +
          "分, 综合题" +
          this.$store.state.txForm.zhNum +
          "题共" +
          this.$store.state.txForm.zhScore +
          "分 ------------" +
          "您已选：选择题 " +
          this.xzNum +
          "题, 判断题 " +
          this.pdNum +
          "题, 填空题 " +
          this.tkNum +
          "题, 综合题 " +
          this.zhNum +
          "题";
        this.openCorrectWin();
      } else {
        this.message = "您选的题目数量不符合";
        this.openWin();
      }
    },
    // 返回上上一级页面
    comeBack() {
      this.$router.push("txSet");
    },
    // 取消发布，跳回到发布页面
    cancle() {
      this.$router.push("fabu");
    },
    // 选的题目以符合要求
    openCorrectWin() {
      this.$alert(this.message, "确认组卷", {
        confirmButtonText: "确定",
        showCancelButton: true,
        callback: action => {
          this.$router.push("zujuanResult");
        }
      });
    },
    // 弹窗---题目未复核要求
    openWin() {
      this.$alert(this.message, "确认组卷", {
        confirmButtonText: "确定",
        showCancelButton: true
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.zu-juan {
  .el-table {
    margin-bottom: 20px;
  }
  el-button {
    display: inline-block;
  }
  .el-pagination {
    float: right;
    display: inline-block;
    margin-bottom: 130px;
  }
}
</style>
