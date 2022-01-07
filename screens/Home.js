import React, { useState } from 'react';
import { Alert, StyleSheet, View, Keyboard } from 'react-native';
import Bar from '../components/Bar';
import SavedWeights from '../components/SavedWeights';
import HideKeyboard from '../components/HideKeyboard';
import WeightDisplay from '../components/WeightDisplay';
import SettingsDrawer from '../components/SettingsDrawer';
import { NativeBaseProvider, useDisclose } from 'native-base';
import InputUI from '../components/InputUI';
import Toast from 'react-native-toast-message';
import toastConfig from '../utilities/toastConfig.js';
import * as Haptics from 'expo-haptics';

export default function Home({ navigation }) {
  const [weight, setWeight] = useState('');
  const [inputWeight, setInputWeight] = useState(0);
  const [thirtyFive, setThirtyFive] = useState(false);
  const [percentage, setPercentage] = useState(100);
  const [targetWeight, setTargetWeight] = useState('');
  const [savedWeight, setSavedWeight] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclose();

  const resetValues = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setInputWeight('');
    setWeight('');
    setTargetWeight('');
    setPercentage(100);
    Keyboard.dismiss();
  };

  const handleValueChange = (value) => {
    setPercentage(value);
    handleOnPress();
  };

  const handleOnPress = () => {
    Haptics.selectionAsync();
    setTargetWeight(Math.floor(weight * (percentage / 100)));

    let finalWeight = Math.floor(weight * (percentage / 100));

    if (finalWeight % 10 < 5 && finalWeight % 10 > 0) {
      finalWeight = finalWeight - (finalWeight % 10);
    }

    if (finalWeight % 10 > 5 && finalWeight % 10 < 10) {
      finalWeight = finalWeight - ((finalWeight % 10) - 5);
    }

    setInputWeight(finalWeight);

    Keyboard.dismiss();
  };

  const handle35OnPress = () => {
    Haptics.selectionAsync();
    setThirtyFive(!thirtyFive);
  };

  const saveWeight = () => {
    Haptics.selectionAsync();
    if (savedWeight.includes(inputWeight)) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      return Alert.alert('Uh oh!😮', 'Weight Already saved!');
    }
    if (inputWeight) {
      setSavedWeight((currWeight) => {
        return [...currWeight, inputWeight];
      });
      Toast.show({
        type: 'success',
        text1: 'Weight saved!',
        text2: `${inputWeight} lbs`,
        visibilityTime: 2000,
      });
    }
  };

  const useSavedWeight = (w) => {
    Haptics.selectionAsync();
    w = w + '';
    setInputWeight(w);
    setTargetWeight(w);
  };

  const removeWeight = (w) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setSavedWeight((prevWeight) => {
      return prevWeight.filter((btn) => btn !== w);
    });
  };
  const clearSavedWeights = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Toast.show({
      type: 'info',
      text1: 'Weights Deleted!',
      visibilityTime: 2000,
    });
    setSavedWeight([]);
  };

  return (
    <NativeBaseProvider>
      <HideKeyboard>
        <View style={styles.container}>
          <WeightDisplay
            inputWeight={inputWeight}
            targetWeight={targetWeight}
          />

          <Bar
            weight={inputWeight}
            thirtyFive={thirtyFive}
            percentage={percentage}
          />

          <SavedWeights
            savedWeight={savedWeight}
            useSavedWeight={useSavedWeight}
            removeWeight={removeWeight}
          />

          <InputUI
            onOpen={onOpen}
            saveWeight={saveWeight}
            savedWeight={savedWeight}
            clearSavedWeights={clearSavedWeights}
            handleOnPress={handleOnPress}
            resetValues={resetValues}
            weight={weight}
            handleValueChange={handleValueChange}
            percentage={percentage}
            setWeight={setWeight}
          />

          <Toast config={toastConfig} />

          <SettingsDrawer
            isOpen={isOpen}
            onClose={onClose}
            thirtyFive={thirtyFive}
            handle35OnPress={handle35OnPress}
            navigation={navigation}
          />
        </View>
      </HideKeyboard>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#E8EAED',
    paddingHorizontal: 20,
  },
});
