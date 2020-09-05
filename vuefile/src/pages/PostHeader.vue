<template>
  <div class="container">
    <h2>怎么让axios发送json格式的请求数据？</h2>
    <p>请按F12查看请求头信息</p>
  </div>
</template>

<script>
import Axios from "@/axios";

export default {
  name: 'PostHeader',
  data() {
    return {

    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.testPostHeader()
    },
    // json或FormData格式请求头测试
    testPostHeader() {
      let params = {
        name: 'code123',
        id: 9527
      }
      Axios.postHeader(params, true).then(res => {
        if (res.code === 0) {
          // do something...
        } else {
          // do something...
        }
      })
    },
  },
}
</script>

<style>
  .container h2 {
    margin-bottom: 25px;
    font-size: 20px;
    color: #007fff;
  }
  .container p {
    font-size: 14px;
  }
</style>