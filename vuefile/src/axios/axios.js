import axios from "axios";
import QS from "qs";
import { Loading, Message } from "element-ui";
import { handleBaseURL } from "./config";

// 超时时间
axios.defaults.timeout = 6000;
// 跨域携带cookie、HTTP认证及客户端SSL证明等，当配置了 withCredentials = true时，必须在后端增加 response 头信息Access-Control-Allow-Origin，且必须指定域名，而不能指定为*！！！
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

// axios请求地址
const baseURL = handleBaseURL();
// 根据环境设置接口路径
axios.defaults.baseURL = baseURL;
// 发送的默认的数据请求格式
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

let loading = null;
// 请求拦截
axios.interceptors.request.use(
  config => {
    loading = Loading.service({
      text: "正在加载中......",
      fullscreen: true
    });
    // 这个token是随便编的
    const token = "sdsklssdfkdlsfkkskjfskfj";
    // 添加自定义token字段，mytoken
    config.headers.myToken = token;
    // 添加其他自定义字段，otherParams
    const otherParams = "sdfsf44545456456";
    config.headers.otherParams = otherParams;
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      // to do something...
      // 请求成功后关闭加载框
      if (loading) {
        loading.close();
      }
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    // 请求成功后关闭加载框
    if (loading) {
      loading.close();
    }
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 无操作权限
        case 401:
          Message({
            showClose: true,
            message: "对不起，你无操作权限",
            type: "error"
          });
          break;

        // 404请求不存在
        case 404:
          Message({
            showClose: true,
            message: "页面不存在！",
            type: "error"
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          Message({
            showClose: true,
            message: error.response.data.message,
            type: "error"
          });
      }
      return Promise.reject(error.response);
    }
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {String} responseType [服务器响应的数据类型， 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream']
 */
export function get(url, params = {}, responseType) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
        responseType: responseType,
        // 用于发送这种格式的请求，url?ids=1&ids=2&id=3
        paramsSerializer: params => {
          return QS.stringify(params, { indices: false });
        }
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Boolean} json [true：json格式请求头；false：FormData格式请求头]
 */
export function post(url, params = {}, json = false) {
  // json格式请求头
  const headerJSON = {
    "Content-Type": "application/json"
  };
  // FormData格式请求头
  const headerFormData = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  };
  return new Promise((resolve, reject) => {
    axios
      .post(url, json ? JSON.stringify(params) : QS.stringify(params), {
        headers: json ? headerJSON : headerFormData
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
