<template>
  <div>
    Register
    <form @submit.prevent="onSubmit">
      <p>
        <label for="username">Username</label>
        <input  placeholder="username" type="text" name="username" value="">
        <label v-if="!usernameIsValid">error</label>
      </p>
      <p>
        <label for="password">Password</label>
        <input v-model.lazy="password" type="password" placeholder="password" name="password" value="">
      </p>
      <button type="submit">OK</button>
    </form>
    <form class="new-profile-form">
      <label class="text-box">
        <span class="text-span">用户名</span>
        <input type="text">
      </label>
      <label class="text-box">
        <span class="text-span">邮箱验证</span>
        <input type="text">
      </label>
      <label class="text-box">
        <span class="text-span">当前密码</span>
        <input type="password">
      </label>
      <label class="text-box">
        <span class="text-span">修改密码</span>
        <input type="password">
      </label>
      <div class="save-button text-right">
        <button type="button" class="btn btn-default">取消修改</button>
        <button type="submit" class="btn btn-primary">保存设置</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    usernameIsValid() {
      return this.username !== ''
    },
    passwordIsValid() {
      return this.password !== ''
    }
  },
  methods: {
    onSubmit() {
      console.log('submit')
      if (!this.username) {
        return
      }
      this.$.post('http://127.0.0.1:5000/register',
              {username: this.username, password: this.password},
              data => {
                console.log(data)
                if (data) {
                  this.$router.push('Login')
                }
              })
    }
  }
}
</script>

<style>
.new-profile-form {
   width: 500px;
   margin: 80px auto;
   .text-box {
     display: block;
     position: relative;
     margin: 20px 0;
     input, textarea, .avatarupload {
       display: inline-block;
       vertical-align: middle;
       width: 400px;
     }
     .text-span {
       display: inline-block;
       vertical-align: middle;
       text-align: right;
       padding-right: 20px;
       width: 80px;
       font-size: 14px;
     }
   }
   .save-button {
     padding-right: 15px;
   }
   .error {
     padding-left: 80px;
   }
 }

</style>
