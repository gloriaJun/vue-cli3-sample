import axios from 'axios';

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

// request interceptor
service.interceptors.request.use((config) => {
  // Do something before request is sent

  // set header
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
}, (error) => {
  // Do something with request error
  console.log(error);
  return Promise.reject(error);
});

// respone interceptor
service.interceptors.response.use((response) => {
  console.log(response);
  return response;
}, (error) => {
  // Do something with response error
  console.log(error);
  return Promise.reject(error);
});

export default service;

// import store from '@/store/index';
// import i18n from '@/i18n';
// import { API_BASE_URL } from '@/constants';
// import CustomError from '@/utils/error';
// import auth from '@/utils/auth';
//
// // create an axios instance
// const $http = axios.create({
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
//   },
// });
//
// /**
//  * @method set error status
//  * @param statusCode
//  * @param msg
//  * @param desc
//  */
// function setErrorObject(statusCode, msg, desc) {
//   store.commit('app/SET_ERROR', {
//     statusCode: statusCode,
//     errorMessage: msg,
//     description: desc,
//   });
// }
//
// /**
//  * api method wrapper
//  */
// function request(method, url, { params = {}, data = {}, headers = {} } = {}) {
//   return $http({
//     url: url,
//     method: method,
//     header: headers,
//     data: data,
//     params: params,
//   });
// }
//
// /**
//  * request interceptor
//  */
// $http.interceptors.request.use(config => {
//   // set default headers
//   if (typeof config.config !== 'undefined') {
//     config.onUploadProgress = config.config.onUploadProgress;
//     config.cancelToken = config.config.cancelToken;
//   }
//   config.headers['api-key'] = auth.currentApiKey();
//   config.headers['sessionId'] = auth.currentSessionId();
//   // Do something before request is sent
//   return config;
// }, error => {
//   // Do something with request error
//   console.log(error, 'error');
//   error.errorMessage(i18n.t(`error.message.${error.data.code}`));
//   return Promise.reject(error);
// });

/**
 * respone interceptor
 */
// $http.interceptors.response.use(resp => {
//   let data = resp.data;
//   if (new RegExp('^(SUCCESS|ok)$', 'i').test(data.result)) {
//     return data;
//   } else {
//     data.errorMessage = data.code && i18n.t(`error.message.${data.code}`);
//     return Promise.reject(data);
//   }
// }, error => {
//   console.log(error, error.status, !error.status, error.response);
//   if (error.constructor.name === 'Cancel') {
//     return Promise.reject(new CustomError('uploadAborted', 'Aborted upload.'));
//   }
//   if (error.config.url === API_BASE_URL.SERVICE_ROUTER) {
//     return Promise.reject(new CustomError('networkError', error.message));
//   } else if (!error.status && !error.response) {
//     setErrorObject(500, '');
//   }
//
//   let response = error.response;
//   if (response.data.code) {
//     response.data.errorMessage = response.data.code &&
// i18n.t(`error.message.${response.data.code}`);
//   }
//   console.log(response.data, 'error data');
//   if (response.status === 500) {
//     setErrorObject(response.status, response.data.errorMessage, response.desc);
//   } else if (response.status === 401 || response.status === 403) {
//     auth.removeLoginInfo();
//     setErrorObject(response.status, '');
//   }
//   return Promise.reject(response);
// });
//
// /**
//  * export api methods
//  */
// export default {
//   getData(url, args = {}) {
//     return request('get', url, args);
//   },
//   postData(url, args = {}) {
//     return request('post', url, args);
//   },
//   putData(url, args = {}) {
//     return request('put', url, args);
//   },
//   deleteData(url, args = {}) {
//     return request('post', url, args);
//   },
//   patchData(url, args = {}) {
//     return request('patch', url, args);
//   },
//   // uploadFile(url, {data = {}, config = {}} = {}) {
//   //   return $http({
//   //     url: url,
//   //     method: 'POST',
//   //     data: data,
//   //     config: config,
//   //   });
//   // },
// };
