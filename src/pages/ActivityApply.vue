<style lang="less">
.new-profile-form {
    width: 520px;
    margin: 20px auto;
    .text-box {
        display: block;
        position: relative;
        margin: 20px 0;
        .avatarupload,
        input,
        textarea {
            display: inline-block;
            vertical-align: middle;
            width: 400px;
        }
        .text-span {
            display: inline-block;
            vertical-align: middle;
            text-align: right;
            padding-right: 20px;
            width: 100px;
            font-size: 14px;
        }
    }
    .save-button {
        padding-right: 15px;
    }
    .error {
        padding-left: 80px;
    }
}
</style>

<template>
<div class="board">
  <h1>活动申请</h1>
  <form class="new-profile-form" @submit.prevent="submit">
    <label class="text-box">
        <span class="text-span">活动名称</span>
        <input type="text" v-model="title">
      </label>
    <label class="text-box">
        <span class="text-span">活动人数</span>
        <input type="text" v-model="people">
      </label>
    <label class="text-box">
        <span class="text-span">申请人姓名</span>
        <input type="text" v-model="username">
      </label>
    <label class="text-box">
        <span class="text-span">联系方式</span>
        <input type="text" v-model="contact">
      </label>
    <label class="text-box">
        <span class="text-span">负责人姓名</span>
        <input type="text" v-model="principal">
      </label>
    <label class="text-box">
        <span class="text-span">联系方式</span>
        <input type="text" v-model="contactplus">
      </label>
    <label class="text-box">
        <span class="text-span">开始时间</span>
        <vue-datepicker :date="startTime" :option="option" :limit="limitStart"></vue-datepicker>
      </label>
    <label class="text-box">
        <span class="text-span">结束时间</span>
        <vue-datepicker :date="endTime" :option="option" :limit="limitEnd"></vue-datepicker>
      </label>
    <div class="text-box">
      <span class="text-span" style="vertical-align: top; padding-top: 10px">活动内容</span>
      <textarea rows="3" placeholder="活动内容" v-model="desc"></textarea>
    </div>
    <div class="text-box">
      <span class="text-span" style="vertical-align: top; padding-top: 10px">补充内容</span>
      <textarea rows="3" placeholder="补充内容" v-model="additional"></textarea>
    </div>
    <div class="save-button text-right">
      <!-- <span style="color: #2b8;margin-right: 5px">修改成功</span> -->
      <button type="button" class="btn btn-default">下载</button>
      <button type="submit" class="btn btn-primary">保存设置</button>
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
        inputStyle: {
          'display': 'inline-block'
        },
        color: {
          header: '#233',
          headerText: '#f00'
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
      }]
    }
  },
  components: {
    'vue-datepicker': require('../components/date-picker.vue')
  },
  watch: {
    startTime: {
      handler: function(val) {
        this.limitEnd[0].from = moment(val.time, 'YYYY-MM-DD HH:mm')
      },
      deep: true
    },
    endTime: {
      handler: function(val) {
        this.limitStart[0].to = moment(val.time, 'YYYY-MM-DD HH:mm')
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
            console.log('ok')
            this.$router.push({
              path: '/activity-apply-download',
              query: {
                uri: data.ok
              }
            })
          } else if (data.error) {
            console.log('error')
            // solve error
          }
        })
    }
  }
}
</script>
