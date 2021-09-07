// 创建人：Michael
// 创建时间：2020/10/14
// 页面描述：请求封装

import axios from "axios";
// 创建axios实例
const fetch = axios.create({
    baseURL: "http://10.204.42.185:8080/json_demo.json,
});

fetch.interceptors.request.use((config) => {
  console.log(config);

  return config;
});

fetch.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default fetch;
