<template lang="html">
  <div class="row">
    <div class="col-md-12 title">
      <label for="title">标题</label>
      <input type="text" name="title" value="">
    </div>
    <div class="col-md-8 col-md-offset-2 editor-box">
      <mavon-editor class="editor" :toolbars="toolbars"></mavon-editor>
    </div>
    <div class="col-md-7 col-md-offset-3 submit">
      <div class="pull-right">
        <button type="button" name="button" class="btn btn-default">保存</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        subfield: true, // 是否需要分栏
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true // 清空
      }
    }
  }
}
</script>

<style lang="less">
.row {
  padding-top: 10px;
}
.title {
  text-align: center;
}
.editor-box {
  position: fixed;
  top: 100px;
  bottom: 100px;
}
.editor {
  height: 100%;
  width: 90%;
  margin-left: 6%;
}
.submit {
  position: fixed;
  bottom: 40px;
}
</style>
