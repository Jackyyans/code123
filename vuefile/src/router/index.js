import Vue from "vue";
import Router from "vue-router";
import MoreClick from "@/pages/MoreClick";
import FullScreen from "@/pages/FullScreen";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/moreClick",
      name: "moreClick",
      component: MoreClick
    },
    {
      path: "/fullScreen",
      name: "fullScreen",
      component: FullScreen
    }
  ]
});
