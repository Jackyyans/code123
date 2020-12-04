import Vue from "vue";
import Router from "vue-router";
import MoreClick from "@/pages/MoreClick";
import FullScreen from "@/pages/FullScreen";
import TableHeadRender from "@/pages/TableHeadRender";
import CustomToken from "@/pages/CustomToken";
import PostHeader from "@/pages/PostHeader";
import SameProperty from "@/pages/SameProperty";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/moreClick",
      name: "moreClick",
      meta: {
        title: "怎么解决ECharts重复触发点击事件？"
      },
      component: MoreClick
    },
    {
      path: "/fullScreen",
      name: "fullScreen",
      meta: {
        title: "怎么让Vue元素全屏展示？"
      },
      component: FullScreen
    },
    {
      path: "/tableHeadRender",
      name: "tableHeadRender",
      meta: {
        title: "怎么自定义Element的Table组件的列标题？"
      },
      component: TableHeadRender
    },
    {
      path: "/customToken",
      name: "customToken",
      meta: {
        title: "怎么给axios添加自定义的token字段？"
      },
      component: CustomToken
    },
    {
      path: "/postHeader",
      name: "postHeader",
      meta: {
        title: "怎么让axios发送json格式的请求数据？"
      },
      component: PostHeader
    },
    {
      path: "/sameProperty",
      name: "sameProperty",
      meta: {
        title: "怎么发送属性相同，值不同的axios请求(url?name=1&name=2&name=3)?"
      },
      component: SameProperty
    }
  ]
});
