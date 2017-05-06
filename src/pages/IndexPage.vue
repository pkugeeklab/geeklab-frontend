<style media="screen" lang="less" scoped>
.background {
  position: fixed;
  min-height: 100%;
  min-width: 100%;
  background: url("../images/background.jpg") no-repeat fixed top;
  background-size: cover;
  overflow: hidden;
}
.content {
  margin: auto;
  text-align: center;
  font-size: 30px;
  a, p {
    font-size: 18px;
    color: #FFFFFF;
    margin: 20px auto;
  }
  padding-top: 10%;
}
footer {
  position: fixed;
  color: #999;
  bottom: 0;
}
</style>

<template>
  <div class="board">
    <div class="background">
      <div class="content">
        <p>极客实验室，让创新更有趣</p>
        <p>找到同道伙伴，共启求知之旅</p>
        <p><b>网站建设中，想要参与，请联系<a href="mailto:xlwyes@pku.edu.cn?subject=报名">xlwyes@pku.edu.cn</a></b></p>
      </div>
      <footer>图片来自 <a href="http://unsplash.com">unsplash.com</a></footer>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
