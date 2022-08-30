import axios from "axios"

// 基准地址
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
// `http://127.0.0.1:8888/api/private/v1/`
// http://82.156.30.240:8888/api/private/v1/
//请求前 拦截
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = localStorage.getItem('token')
    // 发送 请求头 token
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});


export default axios;