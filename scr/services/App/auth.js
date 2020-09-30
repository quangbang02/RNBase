/**
 *
 * @flow
 * @format
 *
 */
import AsyncStorage from '@react-native-community/async-storage';
import APIInstance, {saveToken} from './instance';
import {TOKEN_STORE} from '../../constants/Configs';

export type FirebaseLoginRequest = {
  idToken: string,
  deviceName: string,
  deviceId: string,
};

const loginByFirebase = async (req: FirebaseLoginRequest): Promise<Object> => {
  try {
    const result = await APIInstance.post('/v1/auth/firebase', req);
    await saveToken(result.token.accessToken);
    return result;
  } catch (e) {
    throw e;
  }
};

const babyTrainee = async (): Promise<Object> => {
  try {
    const result = await APIInstance.get('/v1/auth/fake/trainee');
    await saveToken(result.token.accessToken);
    return result;
  } catch (e) {
    throw e;
  }
};

const babyCoach = async (): Promise<Object> => {
  try {
    const result = await APIInstance.get('/v1/auth/fake/coach');
    await saveToken(result.token.accessToken);
    return result;
  } catch (e) {
    throw e;
  }
};

const logout = async (deviceId: string): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(TOKEN_STORE);
    await APIInstance.post('/v1/auth/logout', {
      deviceId,
    });
    APIInstance.defaults.headers = {
      ...APIInstance.defaults.headers,
      Authorization: undefined,
    };
    return true;
  } catch (e) {
    throw e;
  }
};

export default {
  loginByFirebase,
  babyTrainee,
  babyCoach,
  logout,
};
