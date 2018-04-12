<template>
  <div class="tixing-set">
   <el-form ref="form" :model="txForm" :rules="rules" label-width="100px">
      <el-form-item label="此次考试号">{{$store.state.kaoshihao}}</el-form-item>
      <el-form-item label="选择题数量" >
        <el-col :span='8'>
          <el-form-item>
            <el-select v-model="txForm.xzNum" placeholder="请选择选择题数量" @focus="reSetTips">
              <el-option label="5" value="5"></el-option>
              <el-option label="10" value="10"></el-option>
              <el-option label="15" value="15"></el-option>
              <el-option label="20" value="20"></el-option>          
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6" >
          <el-form-item prop="xzScore">
            总分值：<el-input v-model="txForm.xzScore" placeholder="总分值"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="判断题数量">
        <el-col :span="8">
          <el-form-item>
            <el-select v-model="txForm.pdNum" placeholder="请选择判断题数量" @focus="reSetTips">
              <el-option label="5" value="5"></el-option>
              <el-option label="10" value="10"></el-option>
              <el-option label="15" value="15"></el-option>
              <el-option label="20" value="20"></el-option>          
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item prop="pdScore">
            总分值：<el-input v-model="txForm.pdScore" placeholder="总分值"></el-input>
          </el-form-item>
        </el-col>  
      </el-form-item>
      <el-form-item label="填空题数量">
        <el-col :span="8">
          <el-form-item>
            <el-select v-model="txForm.tkNum" placeholder="请选择填空题数量" @focus="reSetTips">
              <el-option label="5" value="5"></el-option>
              <el-option label="10" value="10"></el-option>          
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item prop="tkScore">
            总分值：<el-input v-model="txForm.tkScore" placeholder="总分值"></el-input> 
          </el-form-item>
        </el-col> 
      </el-form-item>
      <el-form-item label="综合题数量">
        <el-col :span="8">
          <el-form-item>
            <el-select v-model="txForm.zhNum" placeholder="请选择综合题数量" @focus="reSetTips">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>          
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item prop="zhScore">
            总分值：<el-input v-model="txForm.zhScore" placeholder="总分值"></el-input> 
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="组卷形式">
        <el-select v-model="txForm.type" placeholder="请选择组卷形式" @focus="reSetTips">
          <el-option label="手动组卷" value="1"></el-option>
          <el-option label="系统组卷" value="2"></el-option>        
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onCertain">确定</el-button>
        <el-button @click="reSetForm">取消</el-button>
      </el-form-item>
      <el-form-item>
        <p class="tip">{{tip}}</p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "TixingSet",
  data() {
    return {
      txForm: {
        xzNum: "",
        xzScore: "",
        pdNum: "",
        pdScore: "",
        tkNum: "",
        tkScore: "",
        zhNum: "",
        zhScore: "",
        type: ""
      },
      tip:"",
      rules: {
        xzScore: [
          { required: true, message: "请输入选择题分值", trigger: "blur" },
          { min: 1, max: 100, message: "分值在 1 到 100 之间", trigger: "blur" }
        ],
        pdScore: [
          { required: true, message: "请输入判断题分值", trigger: "blur" },
          { min: 1, max: 100, message: "分值在 1 到 100 之间", trigger: "blur" }
        ],
        tkScore: [
          { required: true, message: "请输入填空题分值", trigger: "blur" },
          { min: 1, max: 100, message: "分值在 1 到 100 之间", trigger: "blur" }
        ],
        zhScore: [
          { required: true, message: "请输入综合题分值", trigger: "blur" },
          { min: 1, max: 100, message: "分值在 1 到 100 之间", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onCertain() {
      this.$store.state.txForm = this.txForm;
      if (
        // this.txForm.xzNum &&
        // this.txForm.xzScore &&
        // this.txForm.pdNum &&
        // this.txForm.pdScore &&
        // this.txForm.tkNum &&
        // this.txForm.tkScore &&
        // this.txForm.zhNum &&
        // this.txForm.zhScore &&
        // this.txForm.type
        1
      ) {
        if (this.txForm.type == 1) {
          this.$router.push("zujuan");
        } else {
          console.log("系统将为您按条件随机抽题组卷");
          // this.tip =  "系统将为您按条件随机抽题组卷";
          var time = 16;
            var stop = setInterval(()=> {
              time --;
              if(time >= 0) {
                this.tip ="系统正在按您条件随机抽题组卷中......  " + time + " s后跳转到试卷页面";
              } else {
                this.$router.push("zujuanResult")
                clearInterval(stop)
              }
              
            },1000)
          
        }
      } else {
        this.tip = "请输入完整正确信息！"
      }
    },
    reSetForm() {},
    reSetTips() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tixing-set {
  .el-form {
    .el-form-item {
      .el-input {
        width: 100px;
        display: inline-block;
      }
      .tip {
        font-size: 18px;
        color: #409eff
      }
    }
  }
}
</style>
