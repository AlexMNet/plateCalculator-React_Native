import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { useThemeContext } from '../theme/ThemeProvider';

const SafeArea = ({ children }) => {
  const colorScheme = useThemeContext();
  return (
    <SafeAreaView
      edges={['top', 'left', 'right', 'bottom']}
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: colorScheme.background,
      }}
    >
      <StatusBar barStyle={colorScheme.statusBar} />
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
