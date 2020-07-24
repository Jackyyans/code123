<template>
  <div class="wrap">
    <div class="lf" ref="letfDom" style="width: 280px;">
      <router-link to="/moreClick"
        >怎么解决ECharts重复触发点击事件？</router-link
      >
      <router-link to="/fullScreen">怎么让Vue元素全屏展示？</router-link>
      <div class="touch-div" ref="moveDom">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="rt">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      letfDom: null,
      clientStartX: 0
    };
  },
  mounted() {
    this.letfDom = this.$refs.letfDom;
    let moveDom = this.$refs.moveDom;

    moveDom.onmousedown = e => {
      this.clientStartX = e.clientX;
      e.preventDefault();

      document.onmousemove = e => {
        this.moveHandle(e.clientX, this.letfDom);
      };

      document.onmouseup = e => {
        document.onmouseup = null;
        document.onmousemove = null;
      };
    };
  },
  methods: {
    moveHandle(nowClientX, letfDom) {
      let computedX = nowClientX - this.clientStartX;
      let leftBoxWidth = parseInt(letfDom.style.width);
      let changeWidth = leftBoxWidth + computedX;

      if (changeWidth < 280) {
        changeWidth = 280;
      }

      if (changeWidth > 400) {
        changeWidth = 400;
      }

      letfDom.style.width = changeWidth + "px";

      this.clientStartX = nowClientX;
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-size: 13px;
  font-family: "Courier New", Courier, monospace;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

.wrap {
  width: 100%;
  height: 100%;
  display: flex;
}

.wrap .lf {
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  width: 280px;
  padding: 0 20px;
  position: relative;
}

.wrap .lf .touch-div {
  position: absolute;
  top: 0;
  height: 100%;
  left: 100%;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: col-resize;
}

.wrap .lf .touch-div span {
  width: 2px;
  background: #bbb;
  margin: 0 2px;
  height: 15px;
}

.wrap .lf a {
  display: block;
  padding: 8px 0;
  word-break: break-word;
}

.wrap .rt {
  height: 100%;
  overflow-y: auto;
  flex: 1;
  padding: 20px;
}
</style>
