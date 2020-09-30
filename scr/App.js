/**
 *
 * @format
 * @flow
 */
import React from 'react';
import AppServiceProvider from './services/App/AppServiceProvider';
import {createAppContainer} from 'react-navigation';
import {ThemeContextProvider} from './core/Theme/ThemeProvider';
import AppContextProvider from './core/App/AppProvider';
import MainSwitchNavigator from './navigators/MainSwitchNavigator';
import './i18n';

const AppContainer = createAppContainer(MainSwitchNavigator);

const App = () => {
  return (
    <>
      <AppServiceProvider>
        <ThemeContextProvider>
          <AppContextProvider>
            <AppContainer />
          </AppContextProvider>
        </ThemeContextProvider>
      </AppServiceProvider>
    </>
  );
};

export default App;
