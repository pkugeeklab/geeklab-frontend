<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import './styles/main.less'
export default {
  name: 'app',
  components: {
    navigation: require('@/components/Navigation')
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
.board {
  padding-top: 44px;
  text-align: center;
}
</style>
