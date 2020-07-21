// 处理axios请求地址
const handleBaseURL = () => {
  let baseURL = "";
  if (process.env.NODE_ENV === "production") {
    baseURL = "http://www.code123.com/production";
  } else if (process.env.NODE_ENV === "development") {
    // 开发服务器
    baseURL = "http://www.code123.com/development";
  } else if (process.env.NODE_ENV === "test") {
    // 测试服务器
    baseURL = "http://www.code123.com/test";
  }
  return baseURL;
};

export { handleBaseURL };
