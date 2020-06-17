import { validatenull } from "./validate";
//window.CryptoJS = require('crypto-js');
//表单序列化
export const serialize = (data: any) => {
  let list: any[] = [];
  Object.keys(data).forEach(ele => {
    list.push(`${ele}=${data[ele]}`);
  });
  return list.join("&");
};

export const getObjType = (obj: any) => {
  let toString: any = Object.prototype.toString;
  let map: any = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object"
  };
  if (obj instanceof Element) {
    return "element";
  }
  return map[toString.call(obj)];
};
/**
 * 对象深拷贝
 */
export const deepClone = (data: any) => {
  var type = getObjType(data);
  var obj: any;
  if (type === "array") {
    obj = [];
  } else if (type === "object") {
    obj = {};
  } else {
    //不再具有下一层次
    return data;
  }
  if (type === "array") {
    for (var i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]));
    }
  } else if (type === "object") {
    for (let key in data) {
      obj[key] = deepClone(data[key]);
    }
  }
  return obj;
};
/**
 * 设置灰度模式
 */
export const toggleGrayMode = (status: any) => {
  if (status) {
    document.body.className = document.body.className + " grayMode";
  } else {
    document.body.className = document.body.className.replace(" grayMode", "");
  }
};
/**
 * 设置主题
 */
export const setTheme = (name: string) => {
  document.body.className = name;
};

/**
 * 加密处理
 */
export const encryption = (params: any) => {
  let { data, type, param, key } = params;
  let result = JSON.parse(JSON.stringify(data));
  if (type == "Base64") {
    param.forEach((ele: any) => {
      result[ele] = btoa(result[ele]);
    });
  } else if (type == "Aes") {
    param.forEach((ele: any) => {
      result[ele] = window.CryptoJS.AES.encrypt(result[ele], key).toString();
    });
  }
  return result;
};

/**
 * 浏览器判断是否全屏
 */
// export const fullscreenToggel = () => {
//   if (fullscreenEnable()) {
//     exitFullScreen();
//   } else {
//     reqFullScreen();
//   }
// };
/**
 * esc监听全屏
 */
export const listenfullscreen = (callback: Function) => {
  function listen() {
    callback();
  }
  document.addEventListener("fullscreenchange", function() {
    listen();
  });
  document.addEventListener("mozfullscreenchange", function() {
    listen();
  });
  document.addEventListener("webkitfullscreenchange", function() {
    listen();
  });
  document.addEventListener("msfullscreenchange", function() {
    listen();
  });
};
/**
 * 浏览器判断是否全屏
 */
// export const fullscreenEnable = () => {
//   var isFullscreen =
//     document.isFullScreen ||
//     document.mozIsFullScreen ||
//     document.webkitIsFullScreen;
//   return isFullscreen;
// };

/**
 * 浏览器全屏
 */
// export const reqFullScreen = () => {
//   if (document.documentElement.requestFullScreen) {
//     document.documentElement.requestFullScreen();
//   } else if (document.documentElement.webkitRequestFullScreen) {
//     document.documentElement.webkitRequestFullScreen();
//   } else if (document.documentElement.mozRequestFullScreen) {
//     document.documentElement.mozRequestFullScreen();
//   }
// };
/**
 * 浏览器退出全屏
 */
// export const exitFullScreen = () => {
//   if (document.documentElement.requestFullScreen) {
//     document.exitFullscreen();
//   } else if (document.documentElement.webkitRequestFullScreen) {
//     document.webkitCancelFullScreen();
//   } else if (document.documentElement.mozRequestFullScreen) {
//     document.mozCancelFullScreen();
//   }
// };
/**
 * 递归寻找子类的父类
 */

export const findParent = (menu: any, id: number): any => {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].children.length != 0) {
      for (let j = 0; j < menu[i].children.length; j++) {
        if (menu[i].children[j].id == id) {
          return menu[i];
        } else {
          if (menu[i].children[j].children.length != 0) {
            return findParent(menu[i].children[j].children, id);
          }
        }
      }
    }
  }
};
/**
 * 判断2个对象属性和值是否相等
 */

/**
 * 动态插入css
 */

export const loadStyle = (url: string) => {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(link);
};
/**
 * 判断路由是否相等
 */
export const diff = (obj1: any, obj2: any): boolean => {
  delete obj1.close;
  var o1 = obj1 instanceof Object;
  var o2 = obj2 instanceof Object;
  if (!o1 || !o2) {
    /*  判断不是对象  */
    return obj1 === obj2;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
    //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
  }

  for (var attr in obj1) {
    var t1 = obj1[attr] instanceof Object;
    var t2 = obj2[attr] instanceof Object;
    if (t1 && t2) {
      return diff(obj1[attr], obj2[attr]);
    } else if (obj1[attr] !== obj2[attr]) {
      return false;
    }
  }
  return true;
};
/**
 * 根据字典的value显示label
 */
export const findByvalue = (dic: any, value: any) => {
  let result: any = "";
  if (validatenull(dic)) return value;
  if (
    typeof value == "string" ||
    typeof value == "number" ||
    typeof value == "boolean"
  ) {
    let index = 0;
    index = findArray(dic, value);
    if (index != -1) {
      result = dic[index].label;
    } else {
      result = value;
    }
  } else if (value instanceof Array) {
    result = [];
    let index = 0;
    value.forEach(ele => {
      index = findArray(dic, ele);
      if (index != -1) {
        result.push(dic[index].label);
      } else {
        result.push(value);
      }
    });
    result = result.toString();
  }
  return result;
};
/**
 * 根据字典的value查找对应的index
 */
export const findArray = (dic: any, value: any) => {
  for (let i = 0; i < dic.length; i++) {
    if (dic[i].value == value) {
      return i;
    }
  }
  return -1;
};
/**
 * 生成随机len位数字
 */
export const randomLenNum = (len: any, date: any) => {
  let random = "";
  random = Math.ceil(Math.random() * 100000000000000)
    .toString()
    .substr(0, len ? len : 4);
  if (date) random = random + Date.now();
  return random;
};
/**
 * 打开小窗口
 */
// export const openWindow = (url: string, title: any, w: any, h: any) => {
//   // Fixes dual-screen position                            Most browsers       Firefox
//   const dualScreenLeft =
//     // window.screenLeft !== undefined ? window.screenLeft : screen.left;
//   const dualScreenTop =
//     // window.screenTop !== undefined ? window.screenTop : screen.top;

//   const width = window.innerWidth
//     ? window.innerWidth
//     : document.documentElement.clientWidth
//     ? document.documentElement.clientWidth
//     : screen.width;
//   const height = window.innerHeight
//     ? window.innerHeight
//     : document.documentElement.clientHeight
//     ? document.documentElement.clientHeight
//     : screen.height;

//   const left = width / 2 - w / 2 + dualScreenLeft;
//   const top = height / 2 - h / 2 + dualScreenTop;
//   const newWindow = window.open(
//     url,
//     title,
//     "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=" +
//       w +
//       ", height=" +
//       h +
//       ", top=" +
//       top +
//       ", left=" +
//       left
//   );

//   // Puts focus on the newWindow
// //   if (window.focus) {
// //     newWindow.focus();
// //   }
// };

// export interface Callback {
//   (this: any, ...args: any[]): void;
// }

// /**
//  * 函数防抖
//  *
//  * @export
//  * @param {Function} fn
//  * @param {number} wait 等待时间，单位为毫秒
//  * @param {boolean} [leading=false] 是否首次触发
//  * @returns
//  */
export function debounce(
  fn: Function,
  wait: number,
  leading = false
): Callback {
  let timer: number;
  let lastCallTime: number;
  let isInvoked: boolean = false;
  return function debounced(this: any, ...args: any[]) {
    const context = this;
    const thisCallTime = Date.now();
    if (leading) {
      if (!isInvoked) {
        fn.apply(context, args);
        isInvoked = true;
      }
      if (thisCallTime - lastCallTime >= wait) {
        fn.apply(context, args);
      }
      lastCallTime = Date.now();
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), wait);
  };
}

/**
 * 函数节流
 *
 * @export
 * @param {Function} fn
 * @param {number} threshold
 * @returns {Callback}
 */
interface Callback {
  (this: any, ...args: any[]): void;
}

export function throttle(fn: Function, threshold: number): Callback {
  let lastCallTime: number;
  let isInvoked = false;
  return function throttled(this: any, ...args: any[]) {
    const thisCallTime = Date.now();
    if (!isInvoked) {
      fn.apply(this, args);
      lastCallTime = Date.now();
      isInvoked = true;
    }
    if (thisCallTime - lastCallTime >= threshold) {
      fn.apply(this, args);
      lastCallTime = Date.now();
    }
  };
}
