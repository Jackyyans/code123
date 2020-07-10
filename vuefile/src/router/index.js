import Vue from "vue";
import Router from "vue-router";
import MoreClick from "@/pages/MoreClick";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/moreClick",
      name: "moreClick",
      component: MoreClick
    }
  ]
});
