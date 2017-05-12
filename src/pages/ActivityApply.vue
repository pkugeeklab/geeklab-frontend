<style lang="less">
.form-header {
  margin: 12px auto;
  text-align: center;
}
@media (min-width: 769px) {
  .form-body{
    margin-left: -150px;
  }
}
textarea {
  resize: none;
}
.error {
  border-color: #F00;
}
</style>

<template>
<div class="container-fluid">
  <div class="row form-header">
    <h1 class="col-md-12 col-sm-12">活动预约</h1>
  </div>
  <form class="form-horizontal form-body" @submit.prevent="submit">
    <div class="form-group">
      <label class="col-md-2 col-md-offset-2 control-label" for="title">活动名称</label>
      <div class="col-md-2">
        <input type="text" class="form-control" v-model="title" id="title" :class="{error: error.title}">
      </div>
      <label class="col-md-2 control-label" for="people">活动人数</label>
      <div class="col-md-2">
        <input type="text" class="form-control" v-model="people" id="people" :class="{error: error.people}">
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-2 col-md-offset-2 control-label" for="username">申请人姓名</label>
      <div class="col-md-2">
        <input type="text" class="form-control" v-model="username" id="username" :class="{error: error.username}">
      </div>
      <label class="col-md-2 control-label" for="contact">联系方式</label>
      <div class="col-md-2">
        <input type="text" class="form-control" v-model="contact" id="contact" :class="{error: error.contact}">
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-2 col-md-offset-2 control-label" for="principal">负责人姓名</label>
      <div class="col-md-2">
        <input type="text" class="form-control" v-model="principal" id="principal" :class="{error: error.principal}">
      </div>
      <label class="col-md-2 control-label" for="contactplus">联系方式</label>
      <div class="col-md-2">
        <input type="text" class="form-control" v-model="contactplus" id="contactplus" :class="{error: error.contactplus}">
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-2 col-md-offset-2 control-label">开始时间</label>
      <div class="col-md-2">
        <vue-datepicker
          :date="startTime"
          :option="option"
          :limit="limitStart">
        </vue-datepicker>
      </div>
      <label class="col-md-2 control-label">结束时间</label>
      <div class="col-md-2">
        <vue-datepicker
          :date="endTime"
          :option="option"
          :limit="limitEnd">
        </vue-datepicker>
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-2 col-md-offset-2 control-label" for="desc">活动内容</label>
      <div class="col-md-6">
        <textarea rows="4" placeholder="活动内容" class="form-control" v-model="desc" id="desc" :class="{error: error.desc}"></textarea>
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-2 col-md-offset-2 control-label" for="additional">补充内容</label>
      <div class="col-md-6">
        <textarea rows="3" placeholder="补充内容" class="form-control" v-model="additional" id="additional" :class="{error: error.additional}"></textarea>
      </div>
    </div>
    <div class="col-md-10">
      <div class="pull-right">
        <button type="button" class="btn btn-default">下载</button>
        <button type="submit" class="btn btn-primary">保存设置</button>
      </div>
    </div>
  </form>
</div>
</template>

<script>
const moment = require('moment')
export default {
  data() {
    return {
      url: '',
      username: '',
      contact: '',
      title: '',
      desc: '',
      people: '',
      principal: '',
      additional: '',
      item: '',
      contactplus: '',
      startTime: {
        time: ''
      },
      endTime: {
        time: ''
      },
      option: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD-HH-mm',
        placeholder: '点击选取时间',
        inputClass: [
          'form-control'
        ],
        inputStyle: {},
        color: {
          header: '#94070A',
          headerText: '#DDD'
        },
        overlayOpacity: 0.5,
        dismissible: true
      },
      limitStart: [{
        type: 'fromto',
        from: moment(),
        to: null
      }],
      limitEnd: [{
        type: 'fromto',
        from: moment()
      }],
      error: {}
    }
  },
  components: {
    'vue-datepicker': require('../components/date-picker.vue')
  },
  watch: {
    startTime: {
      handler: function(val) {
        console.log(moment(val.time, 'YYYY-MM-DD HH:mm').add(-1, 'D'))
        this.limitEnd[0].from = moment(val.time, 'YYYY-MM-DD HH:mm').add(-1, 'd')
      },
      deep: true
    },
    endTime: {
      handler: function(val) {
        this.limitStart[0].to = moment(val.time, 'YYYY-MM-DD HH:mm').add(1, 'd')
      },
      deep: true
    },
    error: {
      handler: function(val) {
        if (val.starttime || val.endtime) {
          this.option.inputStyle = { 'border-color': '#F00' }
        } else {
          this.option.inputStyle = {}
        }
      },
      deep: true
    }
  },
  methods: {
    submit() {
      console.log('submit')
      let uploadData = {
        username: this.username,
        contact: this.contact,
        title: this.title,
        desc: this.desc,
        people: this.people,
        principal: this.principal,
        additional: this.additional,
        item: '',
        contactplus: this.contactplus,
        starttime: this.startTime.time,
        stoptime: this.endTime.time
      }
      this.$.post('http://127.0.0.1:5000/gen-pdf/activity',
        uploadData,
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
            this.error = data.error
          }
        })
    }
  }
}
</script>
