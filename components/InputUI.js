import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import InputAndCalcBtn from '../components/InputAndCalBtn';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Button, VStack, IconButton, Icon } from 'native-base';
import { useHomeContext } from '../context/HomeProvider';
import { useThemeContext } from '../theme/ThemeProvider';
import EStyleSheet from 'react-native-extended-stylesheet';

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
      keyboardVerticalOffset={115}
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
