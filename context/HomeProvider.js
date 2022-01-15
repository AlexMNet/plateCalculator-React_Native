import React, { useState, useContext } from 'react';
import { useDisclose } from 'native-base';
import { Alert, Keyboard } from 'react-native';
import Toast from 'react-native-toast-message';

import * as Haptics from 'expo-haptics';

const AppContext = React.createContext();

const HomeProvider = ({ children }) => {
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

  // const enterWeight = (w) => {
  //   setWeight(w);
  // };

  return (
    <AppContext.Provider
      value={{
        weight,
        setWeight,
        setInputWeight,
        inputWeight,
        thirtyFive,
        percentage,
        targetWeight,
        setTargetWeight,
        savedWeight,
        saveWeight,
        clearSavedWeights,
        handleOnPress,
        resetValues,
        handleValueChange,
        percentage,
        isOpen,
        onOpen,
        onClose,
        handle35OnPress,
        useSavedWeight,
        removeWeight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Custom hook to eliminate the need for having to import AppContext and useContext anywhere we need our data
export const useHomeContext = () => {
  return useContext(AppContext);
};

export { AppContext, HomeProvider };
