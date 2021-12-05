import React, { useState, useEffect } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  ViewComponent,
} from 'react-native';
import Bar from './components/Bar';
import HideKeyboard from './components/HideKeyboard';
import RNPickerSelect from 'react-native-picker-select';
import percentages from './utilities/data/percentages';
import WeightDisplay from './components/WeightDisplay';
import { NativeBaseProvider } from 'native-base';
import { Btn } from './components/Btn';
import InputAndCalcBtn from './components/InputAndCalBtn';
import Toast from 'react-native-toast-message';
import toastConfig from './utilities/toastConfig.js';
import * as Haptics from 'expo-haptics';

export default function App() {
  const [weight, setWeight] = useState('');
  const [inputWeight, setInputWeight] = useState(0);
  const [thirtyFive, setThirtyFive] = useState(false);
  const [percentage, setPercentage] = useState(100);
  const [targetWeight, setTargetWeight] = useState('');
  const [savedWeight, setSavedWeight] = useState([]);

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

          {/* Barbell */}

          <Bar
            weight={inputWeight}
            thirtyFive={thirtyFive}
            percentage={percentage}
          />

          {/* Saved  weights */}
          <View style={{ flexDirection: 'row', height: 300 }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
              {savedWeight.map((w, idx) => (
                <Btn
                  key={idx}
                  text={w}
                  onPress={() => useSavedWeight(w)}
                  onLongPress={() => removeWeight(w)}
                  textColor='#fff'
                  bgColor='#0891b2'
                />
              ))}
            </ScrollView>
          </View>

          {/* Keyboard and BTNs */}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.inputWeightWrapper}
          >
            {/* Dislay an alert everytime a weight is saved. Alert is active only
            for a few seconds. */}
            <View>
              {savedWeight.length > 0 && (
                <Btn
                  text='clear saved weights'
                  onPress={clearSavedWeights}
                  bgColor='#F59E0B'
                  textColor='#fff'
                />
              )}
            </View>
            <View style={styles.btnsWrapper}>
              {/* future buttons */}

              <Btn
                text='Save'
                onPress={saveWeight}
                bgColor='#10b981'
                textColor='#fff'
              />
              <Btn
                text='35lb Plate'
                onPress={handle35OnPress}
                bgColor={thirtyFive ? '#FCF55F' : '#fefce8'}
                textColor='black'
              />
            </View>
            <InputAndCalcBtn
              handleOnPress={handleOnPress}
              resetValues={resetValues}
              weight={weight}
              handleValueChange={handleValueChange}
              percentage={percentage}
              setWeight={setWeight}
            />
          </KeyboardAvoidingView>
          <Toast config={toastConfig} />
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

  title: {
    paddingTop: 100,
    fontSize: 50,
    fontFamily: 'Helvetica',
    fontWeight: '200',
    textAlign: 'center',
  },

  testWeightDisplayContainer: {
    width: '100%',
    paddingTop: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  barbellContainer: {
    height: 150,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  weightDisplayWrapper: {
    height: 'auto',
    marginTop: 175,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weightTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  weightDisplayText: {
    fontSize: 40,
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },

  targetText: {
    fontSize: 12,
    color: 'grey',
  },

  lbsText: {
    color: 'green',
  },

  inputWeightWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E8EAED',
  },

  inputAndCalcBtnWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 285,
  },

  btnsWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
    marginRight: 25,
  },
  toggleBtnWrapper: {
    padding: 5,
    height: 30,
    backgroundColor: '#FCF55F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },

  toggleBtnText: {
    fontSize: 10,
    fontWeight: 'bold',
  },

  addBtnWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#0275d8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addBtnText: {
    color: '#fff',
  },
});
