/**
 *
 * @flow
 * @format
 *
 */
import APIInstance from './instance';

const getUser = async () => {
  try {
    return await APIInstance.get('/v1/auth/me');
  } catch (e) {
    throw e;
  }
};

export default {
  getUser,
};
