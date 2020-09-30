/**
 * @flow
 * @format
 */

import APIInstance from './instance';
import auth from './auth';
import user from './user';
import profile from './profile';

const setBaseUrl = (url: string) => {
  APIInstance.baseURL = url;
};

export default {
  setBaseUrl,
  ...auth,
  ...user,
  ...profile,
};
