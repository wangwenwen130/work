/**
 * 全局配置文件
 */
export default {
  title: "saber",
  logo: "S",
  key: "saber", //配置主键,目前用于存储
  indexTitle: "未来社区",
  clientId: "saber", // 客户端id
  clientSecret: "saber_secret", // 客户端密钥
  tenantMode: true, // 是否开启租户模式
  lockPage: "/lock",
  tokenTime: 3000,
  //http的status默认放行不才用统一处理的,
  statusWhiteList: [],
  //配置首页不可关闭
  isFirstPage: false,
  fistPage: {
    label: "首页",
    value: "/wel/index",
    params: {},
    query: {},
    meta: {
      i18n: "dashboard"
    },
    group: [],
    close: false
  },
  //配置菜单的属性
  menu: {
    iconDefault: "iconfont icon-caidan",
    props: {
      label: "name",
      path: "path",
      icon: "source",
      children: "children"
    }
  },
  // 流程设计器地址
  flowDesignUrl: "http://10.218.51.215:9999",
  globalUrl: "http://10.215.137.135",
  menhuUrl: [
    // 返回门户页本地开发地址
    // 'http://localhost:1889/',
    // 返回门户页开发环境地址 -- test 测试环境
    // 'http://10.215.137.135:8087/',
    // 返回门户页测试环境地址 -- release 预发布环境
    "http://10.215.137.136:8087/"
    // 返回门户页云上正式环境地址 -- cloud 云上环境
    // 'http://39.170.3.7/'
    // 线下环境-- unline 线下环境
    // 'https://wlsqwelife.ecidi.com'
  ]
};
