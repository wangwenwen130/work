import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "dist/error.png",
  loading: "/img/common/loading.gif",
  attempt: 1,
  lazyComponent: true
});
//图集查看组件注入
Vue.use(Viewer, {
  defaultOptions: {
    inline: true,
    button: false,
    navbar: true,
    title: false,
    toolbar: true,
    tooltip: true,
    movable: true,
    zoomable: true,
    rotatable: true,
    scalable: true,
    transition: true,
    fullscreen: true,
    keyboard: true,
    url: "data-source"
  }
});
Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
