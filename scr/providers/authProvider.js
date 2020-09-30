/**
 *
 * @flow
 * @format
 *
 */
import auth from '@react-native-firebase/auth';
import {useState, useEffect} from 'react';
import createUseContext from 'constate';
import {useAppService} from '../services/App';
import AsyncStorage from '@react-native-community/async-storage';
import {TOKEN_STORE} from '../constants/Configs';
import APIInstance from '../services/App/instance';
import DeviceInfo from 'react-native-device-info';

interface AuthState {
  initialized: false;
  token: string;
  currentUser: Object;
}

const initState: AuthState = {
  token: undefined,
  currentUser: undefined,
};

export const useAuth = createUseContext(() => {
  const [authStore, setAuthStore] = useState(initState);
  if (__DEV__) {
    useEffect(() => {
      console.log('auth changed', authStore);
    }, [authStore]);
  }

  const {apiService} = useAppService();

  useEffect(() => {
    AsyncStorage.getItem(TOKEN_STORE)
      .then(token => {
        if (token) {
          APIInstance.defaults.headers = {
            ...APIInstance.defaults.headers,
            Authorization: token,
          };
          apiService
            .getUser()
            .then(user => {
              setAuthStore(oldState => ({
                ...oldState,
                initialized: true,
                token: token,
                currentUser: user,
              }));
            })
            .catch(() => {
              setAuthStore(oldState => ({
                ...oldState,
                initialized: true,
              }));
            });
          return;
        }
        setAuthStore(oldState => ({
          ...oldState,
          initialized: true,
        }));
      })
      .catch(() => {
        setAuthStore(oldState => ({
          ...oldState,
          initialized: true,
        }));
      });
  }, []);

  return [
    authStore,
    setAuthStore,
    {
      logout: async () => {
        try {
          const deviceId = await DeviceInfo.getUniqueId();
          await apiService.logout(deviceId);
          setAuthStore(oldStore => ({
            ...oldStore,
            token: undefined,
            currentUser: undefined,
          }));
          auth()
            .signOut()
            .catch(() => {
              //
            });
        } catch (e) {
          throw e;
        }
      },
    },
  ];
});
