<style lang="less">
  .time {
    display: block;
    padding: 20px;
  }
  .timeout {
    color: #DDD;
  }
  .hint {
    padding: 20px;
  }
</style>

<template lang="html">
  <div class="board">
    <span>您的预约编号为{{pdfid}}</span>
    <span class="time">剩余时间 {{seconds}} 秒</span>
    <a :href="downloadUrl" :class="{timeout: !seconds}">点击此处下载申请表</a>
    <div class="hint">下载后请核实并由指导老师签字</div>
    <div><b>预约以收到<a href="mailto:geeklab@pku.edu.cn">geeklab@pku.edu.cn</a>的结果为准</b></div>
    <div class="">
      收到邮件后，届时凭申请表和本人学生卡前往极客实验室
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pdfid: null,
      downloadUrl: '',
      seconds: 120
    }
  },
  created() {
    this.pdfid = this.$route.query.pdfid
    this.downloadUrl = 'http://127.0.0.1:5000/get-pdf/' + this.pdfid
    let f = () => {
      if (this.seconds > 0) {
        this.seconds -= 1
        setTimeout(f, 1000)
      } else {
        this.downloadUrl = 'javascript:void(0)'
        this.$router.push({
          path: '/apply-query'
        })
      }
    }
    f()
  }
}
</script>
