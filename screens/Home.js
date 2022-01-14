import React from 'react';
import { View, Appearance } from 'react-native';
import Bar from '../components/Bar';
import SavedWeights from '../components/SavedWeights';
import HideKeyboard from '../components/HideKeyboard';
import WeightDisplay from '../components/WeightDisplay';
import SettingsDrawer from '../components/SettingsDrawer';
import { NativeBaseProvider } from 'native-base';
import InputUI from '../components/InputUI';
import Toast from 'react-native-toast-message';
import toastConfig from '../utilities/toastConfig.js';
import { HomeProvider } from '../context/HomeProvider';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useThemeContext } from '../theme/ThemeProvider';

export default function Home({ navigation }) {
  const colorScheme = useThemeContext();

  const styles = getStyles(colorScheme);

  return (
    <NativeBaseProvider>
      <HomeProvider>
        <HideKeyboard>
          <View style={styles.container}>
            <WeightDisplay />
            <Bar />
            <SavedWeights />
            <InputUI />
            <Toast config={toastConfig} />
            <SettingsDrawer />
          </View>
        </HideKeyboard>
      </HomeProvider>
    </NativeBaseProvider>
  );
}

const getStyles = (colorScheme) =>
  EStyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: colorScheme.background,
      paddingHorizontal: '3%',
    },
  });

// const styles = EStyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     // backgroundColor: '#E8EAED',
//     paddingHorizontal: '3%',
//   },
// });
