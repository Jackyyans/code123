import { get, post } from "./axios";
export default {
  //  添加自定义token测试接口
  testMyToken(params = {}) {
    return get('/testToken', params);
  },
  // json或FormData格式请求头测试接口
  postHeader(params, isJson) {
    return post('/postHeader', params, isJson)
  },
  // 相同属性、不同值的请求测试接口，url?name=1&name=2&name=3
  sameProperty(params = {}) {
    return get('/sameProperty', params);
  }
};
