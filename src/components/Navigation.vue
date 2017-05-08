<style lang="less" scoped>
.navbar-fixed {
  color: #777;
  background: #94070A;
  border-radius: 0;
  border: 0;
  margin: 0;
  .switch {
      background-color: #94070A;
      &:hover {
        background-color: #50070A;
      }
  }
  .container {
    a:hover {
      color:#fff;
    }
  }
  a {
    color: #aaa;
    font-size: 14px;
    &.v-link-active {
      color: #bb0;
    }
    &.brand {
      color: #fff;
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
  <nav class="navbar navbar-default navbar-fixed" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" @click="toggle" class="navbar-toggle switch">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
    		<a class="navbar-brand brand" href="#">Geeklab</a>
    	</div>
      <div class="collapse navbar-collapse" :class="{in: expand}" aria-expanded="true">
    		<ul class="nav navbar-nav">
    			<li><a href="#">介绍</a></li>
    			<li><router-link to="activity-apply">预约</router-link></li>
          <li><a href="http://geeklab.pku.edu.cn/file">内部入口</a></li>
    		</ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      expand: false
    }
  },
  watch: {
    $route() {
      this.expand = false
    }
  },
  methods: {
    toggle() {
      console.log('toggle')
      this.expand = !this.expand
    }
  }
}
</script>
