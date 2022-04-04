import axios from 'axios';
import {handleNotification} from '../services/Notifications';

class HttpClient {
  constructor(baseURL, contentType = 'application/json-patch+json') {
    this.instance = axios.create({
      headers: {
        Accept: '*/*',
        'Content-Type': contentType,
      },
      baseURL,
      transformRequest: [
        function (data, headers) {
          // console.log(headers);
          const token = sessionStorage?.getItem('ship');
          // if (token)
          // headers.Authorization = `Bearer ${token}`;
          headers.Authorization = `Bearer $sldjkfhjksdhfjkshdfjkhsdjkfhsdjkhfjksdhfkjsdhfjkh`;
          // check for formData
          // if (headers['Content-Type'] === 'multipart/form-data') {
          //   const formData = new FormData();
          //   for (const key in data) {
          //     formData.append(key, data[key]);
          //   }
          //   return formData;
          // }
          //  else {
          return JSON.stringify(data);
          // }
        },
      ],
    });

    this._initializeResponseInterceptor();
  }

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  _handleResponse = ({data}) => {
    if (data?.statusCode !== 'OK' && data?.statusMessage) {
      handleNotification('error', 'ناموفق', data.statusMessage);
    }
    return data;
  };

  _handleError = error => {
    if (error?.response?.status === 401) {
      sessionStorage.clear('ship');
      localStorage.removeItem('ship');
      localStorage.removeItem('ship');
      if (localStorage.getItem('ship')) {
        localStorage.removeItem('ship');
      }
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }

    if (error?.response?.data && error?.response?.status !== 401) {
      handleNotification(
        'error',
        'ناموفق',
        error?.response?.data?.errorMessages
          ? error?.response?.data?.errorMessages[0]
            ? error?.response?.data.statusMessage[0]
            : error?.response?.data?.title
          : error?.response?.data?.statusMessage,
      );
    }
    return Promise.reject(error);
  };
}

export default HttpClient;
