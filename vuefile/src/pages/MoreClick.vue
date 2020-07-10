<template>
  <div>
    <span @click="update" class="btn">更新数据</span>
    <div id="chart1" ref="charts" style="height: 300px;"></div>
    <div>
      <span>数据展示：</span>
      <template v-if="obj.name"> {{ obj.name }}-{{ obj.val }} </template>
      <template v-else>暂无数据</template>
    </div>
    <p>触发点击的次数：{{ num }}</p>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "MoreClick",
  data() {
    return {
      data: [143, 185],
      obj: {},
      num: 0
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
  },
  methods: {
    update() {
      this.data = [100, 90];
    },
    draw() {
      this.num = 0;
      var options = {
        xAxis: { type: "category", data: ["apple", "orange"] },
        yAxis: {},
        series: [
          {
            type: "bar",
            barWidth: 50,
            data: this.data
          }
        ]
      };
      debugger;
      var dom = this.$refs.charts;
      var myChart = echarts.init(dom);
      myChart.setOption(options);

      myChart.on("click", params => {
        console.log("click", params);
        this.num = this.num + 1;
        this.obj = {
          name: params.name,
          val: params.value
        };
      });
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
