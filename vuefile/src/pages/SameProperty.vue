<template>
  <div class="container">
    <h2>怎么发送属性相同，值不同的axios请求(url?name=1&name=2&name=3)?</h2>
    <p>请按F12查看请求头信息</p>
  </div>
</template>

<script>
import Axios from "@/axios";

export default {
  name: 'SameProperty',
  data() {
    return {

    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.testSameProperty()
    },
    // 相同属性、不同值的请求测试，url?name=1&name=2&name=3
    testSameProperty() {
      let params = { name: [1, 2, 3, 5] }
      Axios.sameProperty(params).then(res => {
        if (res.code === 0) {
          // do something...
        } else {
          // do something...
        }
      })
    }
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