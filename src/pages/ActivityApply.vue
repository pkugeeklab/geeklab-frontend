<style lang="less">
  .new-profile-form {
    width: 500px;
    margin: auto;
    .text-box {
      display: block;
      position: relative;
      margin: 20px 0;
      input, textarea, .avatarupload {
        display: inline-block;
        vertical-align: middle;
        width: 400px;
      }
      .text-span {
        display: inline-block;
        vertical-align: middle;
        text-align: right;
        padding-right: 20px;
        width: 80px;
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
    <form class="new-profile-form" @submit.prevent="update">
      <label class="text-box">
        <span class="text-span">姓名</span>
        <input type="text">
      </label>
      <label class="text-box">
        <span class="text-span">邮箱</span>
        <input type="text">
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
        <span class="text-span" style="vertical-align: top; padding-top: 10px">个人介绍</span>
        <textarea rows="3" placeholder="请介绍一下您自己！"></textarea>
      </div>
      <div class="save-button text-right">
        <span style="color: #2b8;margin-right: 5px">修改成功</span>
        <button type="button" class="btn btn-default">取消修改</button>
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
        format: 'YYYY-MM-DD HH:mm',
        placeholder: '点击选取时间',
        inputStyle: {
          'display': 'inline-block'
        },
        color: {
          header: '#233',
          headerText: '#f00'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
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
  }

}
</script>
