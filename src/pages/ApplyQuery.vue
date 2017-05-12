<style lang="less">
  .vcenter {
    margin: 0 auto;
  }
  .hint {
    text-align: center;
  }
</style>

<template lang="html">
  <div class="container board">
    <div class="row vcenter">
      <div class="col-md-10 col-md-offset-1 hint">
        输入您的预约编号进行查询
      </div>
      <div class="col-md-10 col-md-offset-1 hint">
        ( 或重新下载表格 )
      </div>
      <div class="input-group col-md-6 col-md-offset-3">
        <input type="text" name="" value="" class="form-control" v-model="pdfid">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button" @click="query">确认</button>
        </span>
      </div>
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
  methods: {
    query() {
      this.$.get('http://127.0.0.1:5000/query-pdf/' + this.pdfid,
        data => {
          console.log(data)
          data = JSON.parse(data)
          if (data.ok) {
            this.$router.push({
              path: '/activity-apply-download',
              query: {
                pdfid: data.ok.pdfid
              }
            })
          } else if (data.error) {
            // solve error
          }
        })
    }
  }
}
</script>
