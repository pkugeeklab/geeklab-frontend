<style lang="less" scoped>
.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  z-index: 10;
  color: #777;
  background: #94070A;
  .container {
    a:hover {
      color:#fff;
    }
  }
  a {
    display: inline-block;
    color: #aaa;
    padding: 0 20px;
    font-size: 14px;
    &.v-link-active {
      color: #fff;
    }
    &.brand {
      color: #fff;
      padding: 0;
      margin-right: 40px;
      font-size: 25px;
      font-weight: bold;
      vertical-align: middle;
    }
  }
}
.signin-header {
  font-size: 26px;
  line-height: 26px;
  .signup {
    font-size: 14px;
    color: #666;
  }
}
.signin-form {
  margin: 20px 0 40px;
  input {
    margin: 10px 0;
  }
}
</style>

<template>
  <nav class="navbar-fixed pure-menu pure-menu-horizontal">
    <div class="container">
      <a href="#" class="brand">Geeklab</a>
      <template>
        <a href="#">介绍</a>
        <!-- <router-link to="/activity-apply">预约</router-link> -->
        <a href="#">反馈</a>
        <a href="http://geeklab.pku.edu.cn/file">内部入口</a>
      </template>
      <div class="dropdown pull-right" style="cursor: pointer;line-height: normal">
        <a href="#" style="padding-top: 6px;">
          <img class="img-circle" width="30" src="../images/avatar.jpeg" alt="头像">
        </a>
        <ul class="dropdown-menu" style="margin: 0;line-height: 20px;">
          <li><a href="#">账号设置</a></li>
          <li><a href="#">退出</a></li>
        </ul>
      </div>
      <div class="pull-right">
        <a href="#">注册</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>
