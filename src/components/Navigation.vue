<style lang="less">
.navbar-fixed {
  background: #94070A;
  border-radius: 0;
  border: 0;
  margin: 0;
  a {
    color: #fff !important;
    font-size: 14px;
    &:hover {
      background-color: darken(#94070A, 10%) !important;
    }
    &.brand {
      color: #fff;
      &:hover {
        color: #EEE;
        background-color: #94070A !important;
      }
      font-size: 25px;
      font-weight: bold;
      vertical-align: middle;
    }
  }
  .dropdown-menu, .dropdown-toggle {
    background-color: #94070A !important;
  }
}
</style>

<template>
  <vue-nav placement="top" class="navbar-fixed">
    <a slot="brand" href="#" class="navbar-brand brand">Geeklab</a>
    <li slot="right">
      <a href="#">介绍</a>
    </li>
    <vue-dropdown text="预约" slot="right">
      <li><router-link to="activity-apply">预约活动</router-link></li>
      <li><router-link to="">预约设备</router-link></li>
    </vue-dropdown>
    <li slot="right">
      <a href="http://geeklab.pku.edu.cn/file" target="_blank">内部入口</a>
    </li>
  </vue-nav>
</template>

<script>
require('vue-strap').dropdown
export default {
  data() {
    return {
      expand: false
    }
  },
  components: {
    'vue-dropdown': require('vue-strap').dropdown,
    'vue-nav': require('vue-strap').navbar
  },
  watch: {
    $route() {
      this.expand = false
    }
  },
  methods: {
    toggle() {
      this.expand = !this.expand
    }
  }
}
</script>
