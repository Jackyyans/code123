<template>
  <div class="container">
    <h2>怎么给axios添加自定义的token字段？</h2>
    <p>请按F12查看请求头信息</p>
  </div>
</template>

<script>
import Axios from "@/axios";

export default {
  name: 'CustomToken',
  data() {
    return {

    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.addTokenTest()
    },
    // 添加自定义token测试
    addTokenTest() {
      let name = 'code123'
      Axios.testMyToken({ name: name }).then(res => {
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