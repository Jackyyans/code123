<template>
  <div>
    <span @click="update"
          class="btn">更新数据</span>
    <div ref="chartBox"
         style="height: 300px;"></div>
    <p>数据展示：</p>
    <template v-if="obj.name">
      <span>{{ obj.name }}</span>
      （<span style="color: red; font-weight: 700;">{{ obj.value }}</span>）
    </template>
    <template v-else>暂无数据</template>
  </div>
</template>

<script>
import echarts from "echarts";
import Axios from '@/axios'

export default {
  name: "MoreClick",
  data() {
    return {
      data: [143, 185],
      obj: {}
    };
  },
  watch: {
    data: {
      deep: true,
      handler(newVal) {
        this.draw();
      }
    }
  },
  mounted() {
    this.draw();
    this.init();
  },
  methods: {
    update() {
      this.data = [100, 90];
      this.obj = {};
    },
    draw() {
      var options = {
        xAxis: {
          data: ["apple", "orange"]
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            barWidth: 50,
            data: this.data
          }
        ]
      };

      var dom = this.$refs.chartBox;
      var myChart = echarts.init(dom);
      myChart.setOption(options);

      myChart.off("click"); //解除绑定

      myChart.on("click", params => {
        console.log("click", params);

        this.obj = {
          name: params.name,
          value: params.value
        };
      });
    },
    // 初始化
    init() {
      this.addTokenTest();
      this.testPostHeader();
      this.testSameProperty();
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
  }
};
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 8px 15px;
  background-color: orangered;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
</style>
