import React from 'react';
import InputAndCalcBtn from '../components/InputAndCalBtn';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useHomeContext } from '../context/HomeProvider';
import { useThemeContext } from '../theme/ThemeProvider';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const InputUI = () => {
  const {
    onOpen,
    saveWeight,
    savedWeight,
    clearSavedWeights,
    setModalVisible,
  } = useHomeContext();
  const colorScheme = useThemeContext();

  const styles = getStyles(colorScheme);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.inputWeightWrapper}
      //Get status bar height so elements return to their place after keyboard is dismissed
      keyboardVerticalOffset={getStatusBarHeight() + 74}
    >
      <InputAndCalcBtn />
    </KeyboardAvoidingView>
  );
};

export default InputUI;

const getStyles = (colorScheme) =>
  EStyleSheet.create({
    inputWeightWrapper: {
      width: '100%',
      backgroundColor: colorScheme.background,
      position: 'absolute',
      bottom: 0,
    },
  });
