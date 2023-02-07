import axios from 'axios';

let defautRequestConfig = {
  baseURL: '/'
}

const defaultRestApi = axios.create(defautRequestConfig);

defaultRestApi.interceptors.request.use(function (config) {
    // config.params = {
    //   locale: "en_US",
    //   '_': new Date().getTime(),
    //   withCredentials: true
    //   };
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export default defaultRestApi;