/**
 *
 * @format
 * @flow
 */
import React, {useContext, useState} from 'react';
import {fonts, metrics} from './CommonStyles';
import THEMES from './themes.json';

const ThemeContext: Object = React.createContext();

export const theme = THEMES[0];

export const ThemeContextProvider = ({children}: Object) => {
  const [themeID, setThemeID] = useState(THEMES[0].key);
  // eslint-disable-next-line no-shadow
  const getTheme = themeID => THEMES.find(theme => theme.key === themeID);
  const _theme = getTheme(themeID);
  return (
    <ThemeContext.Provider
      value={{
        theme: {
          ..._theme,
          fonts,
          metrics,
        },
        themeID,
        setThemeID,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function withTheme(Component: any) {
  return (props: Object) => {
    const {themeID, setThemeID} = useContext(ThemeContext);

    // eslint-disable-next-line no-shadow
    const getTheme = themeID => THEMES.find(theme => theme.key === themeID);
    // eslint-disable-next-line no-shadow
    const setTheme = themeID => setThemeID(themeID);

    return (
      <Component
        {...props}
        themes={THEMES}
        theme={{
          ...getTheme(themeID),
          fonts,
          metrics,
        }}
        setTheme={setTheme}
      />
    );
  };
}

export const useTheme = () => useContext(ThemeContext);
