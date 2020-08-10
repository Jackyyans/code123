import { get } from "./axios";
export default {
  //  添加自定义token测试接口
  testMyToken(params = {}) {
    return get("/testToken", params);
  }
};
