<template>
  <div class="forget-pass">
   <h2>忘记密码请到微信公众号“黑大教务”中通过手机验证码找回</h2>
   <p class="time">{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "ForgetPass",
  data() {
    return {
      msg: ""
    };
  },
  mounted: function() {
    this.backToLogin()
  },
  methods: {
    backToLogin() {
      var time = 6;
      var timer = setInterval(()=> {
        time--;
        if(time >= 0) {
          this.msg = time+'s后返回......'
        } else {
          this.$router.push('login');
           clearTimeout(timer);
        }
      },1000)
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.forget-pass {
  width: 100%;
  height: 100%;
  background: url("../../../static/img/bg2.jpg") no-repeat;
  background-size: cover;
  h2 {
    color: #409eff;
    position: absolute;
    top: 200px;
    left:  200px;
  }
  .time {
    color: #409eff;
    position: absolute;
    top: 240px;
    left:  200px;
    font-size: 24px;
  }
}
</style>
