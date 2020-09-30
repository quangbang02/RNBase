/**
 *
 * @format
 * @flow
 */
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {BASE_URL} from './const';
import {TOKEN_STORE} from '../../constants/Configs';

const stringFromError = (error): string => {
  let {message} = error;
  const {fields} = error;
  if (!message && fields) {
    Object.keys(fields).forEach(key => {
      let subMessage = `${key.toUpperCase()}:`;
      fields[key].forEach(m => {
        subMessage = `${subMessage}\n${m}`;
      });
      message = `${subMessage}\n`;
    });
  }
  return `${message}\n[${error.code || ''}]`;
};

export const saveToken = async (token: string) => {
  console.log('saveToken', token);

  // initSocket(token);

  await AsyncStorage.setItem(TOKEN_STORE, `Bearer ${token}`);

  APIInstance.defaults.headers = {
    ...APIInstance.defaults.headers,
    Authorization: `Bearer ${token}`,
  };
};

const APIInstance = axios.create({
  timeout: 20000,
  baseURL: BASE_URL,
  paramsSerializer(params) {
    // eslint-disable-next-line no-undef
    const searchParams = new URLSearchParams();
    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(params)) {
      const param = params[key];
      if (param !== undefined) {
        if (Array.isArray(param)) {
          let ids = '';
          param.forEach((p, i) => {
            if (i + 1 === param.length) {
              ids += `${p}`;
            } else {
              ids += `${p},`;
            }
          });
          searchParams.append(key, ids);
        } else {
          searchParams.append(key, param);
        }
      }
    }
    return searchParams.toString();
  },
});

APIInstance.interceptors.request.use(
  config => {
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.log('Request:\n', config);
    }

    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

APIInstance.interceptors.response.use(
  response => {
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.log('Response:\n', response);
    }
    if (response.headers.authorization) {
      saveToken(response.headers.authorization).done();
    }

    return response.data;
  },
  error => {
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.log('Response error:\n', error);
      // eslint-disable-next-line no-console
      console.log('Response error response:\n', error.response);
    }
    const {response} = error;
    if (response) {
      if (response.headers.authorization) {
        saveToken(response.headers.authorization).done();
      }
      const {status, data} = response;
      if (status >= 500) {
        return Promise.reject(
          new Error(
            `Xin lỗi. Rất tiếc vì đã xảy ra sự cố này. Chúng tôi đang xem xét và khắc phục. Vui lòng thử lại sau.\n(code: ${status})`,
          ),
        );
      }
      if (status === 401) {
        return Promise.reject(new Error('Chưa đăng nhập'));
      }
      if (data) {
        return Promise.reject(new Error(data.error));
      }
    }
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(
        new Error('Thời gian kết nối đến máy chủ quá lâu. Vui lòng thử lại.'),
      );
    }
    return Promise.reject(error);
  },
);

AsyncStorage.getItem(TOKEN_STORE).then(result => {
  if (result) {
    APIInstance.defaults.headers = {
      ...APIInstance.defaults.headers,
      Authorization: result,
    };
  }
});

export default APIInstance;
