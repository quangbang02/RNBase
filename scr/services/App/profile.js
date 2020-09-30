/**
 *
 * @flow
 * @format
 *
 */
import APIInstance from './instance';

const getProfile = async (): Promise<Object> => {
  try {
    return await APIInstance.get('/v1/auth/me');
  } catch (e) {
    throw e;
  }
};

const updateProfile = async (profile): Promise<Object> => {
  try {
    return await APIInstance.put('/v1/profile', profile);
  } catch (e) {
    throw e;
  }
};

export default {
  getProfile,
  updateProfile,
};
