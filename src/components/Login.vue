<template>
  <div>
    Login
    <form @submit.prevent="onSubmit">
      <p>
        <label for="username">Username</label>
        <input v-model.trim.lazy="username" placeholder="username" type="text" name="username" value="">
      </p>
      <p>
        <label for="password">Password</label>
        <input v-model.lazy="password" type="password" placeholder="password" name="password" value="">
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
  methods: {
    onSubmit() {
      console.log('login')
    }
  }
}
</script>

<style>

</style>
