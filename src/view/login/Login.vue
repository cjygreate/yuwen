<template>
    <div id="root">
        <el-form id="form" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input id="username" type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input id="password" type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button @click="register">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
    
</template>

<script>
  export default {
    data() {
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        let data = this.ruleForm;
        this.$axios({
            method: 'post',
            url: '/api/verse/user/login',
            data: data
        }).then((res) => {
            if(res.data.code == 200) {
                console.log(res.data.object)
                localStorage.setItem("token", res.data.object);
                this.$router.push({
                    path: '/personPage'
                })
            }
        }).catch((err) => {
            console.log(err)
            this.$router.push({
              path: '/personPage'
            })
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      login() {
          
      },
      register() {
        this.$router.push({
          path: '/register'
        })
      }
    }
  }
</script>

<style>

    #form {

        margin-top: 10%;
        margin-left: 35%;
    }

    #username {
        width: 300px;
    }
    #password {
        width: 300px;
    }
    
    #root {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image:url(../../assets/login.png);
    }

</style>