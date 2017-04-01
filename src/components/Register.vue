<template>
    <div>
      Register
      <form @submit.prevent="onSubmit">
        <p>
          <label for="username">Username</label>
          <input v-model.trim.lazy="username" placeholder="username" type="text" name="username" value="">
          <label v-if="!usernameIsValid">error</label>
        </p>
        <p>
          <label for="password">Password</label>
          <input v-model.lazy="password" type="password" placeholder="password" name="password" value="">
          <label v-if="!passwordIsValid">error</label>
        </p>
        <button type="submit">OK</button>
      </form>
      <div class="">
        {{username}}
        {{password}}
      </div>
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

</style>
