import React, { useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { lightColors, darkColors } from './colorThemes';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    Appearance.getColorScheme() === 'dark' ? darkColors : lightColors
  );

  const handleAppearanceChange = () => {
    if (Appearance.getColorScheme() === 'dark') {
      setTheme(darkColors);
    } else {
      setTheme(lightColors);
    }
  };

  useEffect(() => {
    Appearance.addChangeListener(handleAppearanceChange);

    return () => Appearance.removeChangeListener(handleAppearanceChange);
  });

  // if (Appearance.getColorScheme() === 'dark') {
  //   setTheme(darkColors);
  // } else {
  //   setTheme(lightColors);
  // }

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeContext, ThemeProvider };
