<template>
  <div class="wrap">
    <div class="lf">
      <router-link to="/moreClick">moreClick</router-link>
    </div>
    <div class="rt">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-size: 13px;
  color: #333;
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
  overflow-y: auto;
  padding: 0 20px;
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
