<template lang="html">
  <div class="board">
    <a :href="downloadUrl">下载</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      downloadUrl: ''
    }
  },
  created() {
    this.downloadUrl = 'http://127.0.0.1:5000' + this.$route.query.uri
  }
}
</script>

<style lang="less">
</style>
