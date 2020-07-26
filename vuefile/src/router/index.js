import Vue from "vue";
import Router from "vue-router";
import MoreClick from "@/pages/MoreClick";
import FullScreen from "@/pages/FullScreen";
import TableHeadRender from "@/pages/TableHeadRender";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/moreClick",
      name: "moreClick",
      title: "怎么解决ECharts重复触发点击事件？",
      component: MoreClick
    },
    {
      path: "/fullScreen",
      name: "fullScreen",
      title: "怎么让Vue元素全屏展示？",
      component: FullScreen
    },
    {
      path: "/tableHeadRender",
      name: "tableHeadRender",
      title: "怎么自定义Element的Table组件的列标题？",
      component: TableHeadRender
    }
  ]
});
