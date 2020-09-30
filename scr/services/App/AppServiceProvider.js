/**
 *
 * @format
 * @flow
 */
import React from 'react';
import apiService from './AppService';

export const AppServiceContext: Object = React.createContext();

const AppServiceProvider = ({children}: Object) => {
  return (
    <AppServiceContext.Provider
      value={{
        apiService,
      }}>
      {children}
    </AppServiceContext.Provider>
  );
};

export default AppServiceProvider;
