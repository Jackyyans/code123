<template>
  <div>
    <span @click="update" class="btn">更新数据</span>
    <div ref="chartBox" style="height: 300px;"></div>
    <p>数据展示：</p>
    <template v-if="obj.name">
      <span>{{ obj.name }}</span>
      （<span style="color: red; font-weight: 700;">{{ obj.value }}</span
      >）
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
    this.addTokenTest();
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
    // 添加自定义token测试
    addTokenTest() {
      Axios.testMyToken().then(res => {
        if (res.code === 0) {
          // do something...
        } else if (res.code !== 302) {
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
