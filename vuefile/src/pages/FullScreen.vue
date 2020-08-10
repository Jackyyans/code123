<template>
  <div>
    <el-button type="text" @click="dialogVisible = true"
      >点击打开Dialog</el-button
    >

    <el-dialog ref="demo" title="提示" :visible.sync="dialogVisible">
      <el-select
        v-model="value"
        placeholder="请选择"
        :popper-append-to-body="false"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-button type="primary" size="mini" @click="switchFullScreen">
        {{ isFullScreen ? "退出全屏" : "全屏" }}
      </el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "FullScreen",
  data() {
    return {
      dialogVisible: false,
      isFullScreen: false,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    switchFullScreen() {
      const Dom = this.$refs.demo.$el;

      if (document.fullscreenElement) {
        this.isFullScreen = false;
        document.exitFullscreen();
      } else {
        this.isFullScreen = true;
        Dom.requestFullscreen();
      }
    }
  }
};
</script>
