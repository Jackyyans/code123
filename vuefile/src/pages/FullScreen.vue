<template>
  <div>
    <el-button type="text" @click="dialogVisible = true"
      >点击打开Dialog</el-button
    >

    <el-dialog ref="demo" title="提示" :visible.sync="dialogVisible">
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
      isFullScreen: false
    };
  },
  methods: {
    switchFullScreen() {
      let Dom = this.$refs.demo.$el;

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
