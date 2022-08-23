
<template>
  <div class="login">
    <!-- 登录 -->
    <div class="login_box">
      <div class="img">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
        ],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    // async loginFn() {
    //   let { username, password } = this.loginForm;
    //   let res = await login({ username, password });
    //   console.log(res);
    //   if (res.meta.status == 200) {
    //     // 保存token
    //     localStorage.setItem("token", res.data.token);
    //     localStorage.setItem("loginToken", username);
    //     this.$router.push("/home");
    //   } else {
    //     alert(res.meta.msg);
    //   }
    // },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          // console.log(this.ruleForm);
          this.$store.dispatch("user/loginFn", this.ruleForm).then(
            () => {
              this.$router.push("/home");
            },
            () => {
              this.ruleForm("ruleForm");
            }
          );
        } else {
          console.log("error submit!!");
          // alert("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style scoped lang='scss'>
.login {
  width: 100%;
  height: 100vh;
  background-color: #2b4b6b;
  display: flex;
  align-items: center;
  justify-content: center;
  .login_box {
    box-shadow: 0 0 10px #ddd;
    width: 400px;
    height: 300px;
    background-color: #fff;
    display: flex;
    // align-items: center;
    justify-content: center;
    position: relative;

    form {
      margin-top: 60px;
      .el-input__inner {
        width: 200px;
      }
    }
    .img {
      position: absolute;
      top: -30px;
      left: 40%;
      width: 100px;
      height: 100px;
      background-color: #fff;
      border-radius: 50%;
      box-sizing: border-box;
      padding: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
