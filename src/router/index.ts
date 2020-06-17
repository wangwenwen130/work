import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout.vue";
import NotFound from "@/views/NotFound.vue";
import request from "./axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/feature"
  },
  {
    path: "/index",
    name: "index",
    component: Layout,
    children: [
      {
        path: "/feature",
        name: "feature",
        component: () => import("@/views/FeatureList.vue")
      },
      {
        path: "/account",
        name: "account",
        component: () => import("@/views/AccountCenter.vue")
      },
      {
        path: "/advice",
        name: "advice",
        component: () => import("@/views/AdviceAndOpinion.vue")
      }
    ]
  },
  {
    path: "/404",
    name: "notfound",
    component: NotFound
  },
  {
    path: "/*",
    redirect: { path: "/404" }
  }
];

const router = new VueRouter({
  routes
});

export default router;
