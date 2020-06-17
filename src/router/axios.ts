/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
import axios from "axios";
import store from "@/store/";
import router from "./index";
// import { serialize } from "@/util/util";
import { getToken } from "@/util/auth";
import website from "@/config/website";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { Base64 } from "js-base64";

const request = axios.create();

request.defaults.timeout = 10000;
//返回其他状态吗
request.defaults.validateStatus = function(status: any) {
  return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
request.defaults.withCredentials = true;
// NProgress Configuration
NProgress.configure({
  showSpinner: false
});
//HTTP request 拦截
request.interceptors.request.use(
  (config: any) => {
    NProgress.start(); // start progress bar
    // meta属性路由暂时没用到
    // const meta = config.meta || {};
    // const isToken = meta.isToken === false;
    config.headers["Authorization"] = `Basic ${Base64.encode(
      `${website.clientId}:${website.clientSecret}`
    )}`;
    if (getToken() && getToken() !== "undefined") {
      config.headers["Blade-Auth"] = "bearer " + getToken(); // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
    }
    //headers中配置serialize为true开启序列化，暂时没用到
    // if (config.method === "post" && meta.isSerialize === true) {
    //   config.data = serialize(config.data);
    // }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
//HTTP response 拦截
request.interceptors.response.use(
  (res: any) => {
    NProgress.done();
    const status = res.data.code || 200;
    const statusWhiteList = website.statusWhiteList || [];
    const message = res.data.msg || res.data.message || "未知错误";
    //如果在白名单里则自行catch逻辑处理 暂未用到
    // if (statusWhiteList.includes(status)) return Promise.reject(res);
    //如果是401则跳转到登录页面
    if (status === 401) {
      router.push({ path: "/" });
    }
    if (status !== 200 && status !== 400) {
      // store.dispatch("FedLogOut").then(() => router.push({ path: "/login" }));
      // 如果请求为非200否者默认统一处理
      if (message !== "缺失令牌,鉴权失败") {
        //console.log("auth error")
      }
      return Promise.reject(new Error(message));
    }
    return res.data;
  },
  (error: any) => {
    NProgress.done();
    const res = {
      data: {
        name: "vue-test"
      }
    };
    return res;
    // return Promise.reject(new Error(error));
  }
);

export default request;

