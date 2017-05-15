<template lang="html">
  <div class="row">
    <a href="#" class="col-md-12">返回列表</a>
    <div v-html="html" class="col-md-6 col-md-offset-3 article"></div>
    </div>
  </div>
</template>

<script>
const md = require('markdown-it')()
export default {
  data() {
    return {
      html: ''
    }
  },
  created() {
    let id = this.$route.params.id
    console.log(id)
    this.html = md.render('# ' + id)
  }
}
</script>

<style lang="less" scoped>
  .article {
    text-align: center;
  }
</style>
