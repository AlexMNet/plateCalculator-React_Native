import React, { useState, useEffect } from 'react';
import {
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

export default function App() {
  const [weight, setWeight] = useState('');
  const [inputWeight, setInputWeight] = useState('');
  const [thirtyFive, setThirtyFive] = useState(false);
  const [percentage, setPercentage] = useState(100);
  const [targetWeight, setTargetWeight] = useState('');
  const inputAccessoryViewID = 'uniqueID';
  const [open, setOpen] = useState(true);

  const resetValues = () => {
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

  //Toggle Btn STyles
  const toggleWrapper = {
    padding: 5,
    height: 30,
    backgroundColor: thirtyFive ? '#FCF55F' : '#FFFFF0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#c0c0c0',
    borderWidth: 1,
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

          {/* Keyboard and BTNs */}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.inputWeightWrapper}
          >
            <View style={styles.btnsWrapper}>
              {/* future buttons */}
              {/* <TouchableOpacity onPress={handleOnPress}>
              <View style={styles.addBtnWrapper}>
                <Text style={styles.addBtnText}>Calc</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOnPress}>
              <View style={styles.addBtnWrapper}>
                <Text style={styles.addBtnText}>Calc</Text>
              </View>
            </TouchableOpacity> */}
              <TouchableOpacity onPress={() => setThirtyFive(!thirtyFive)}>
                <View style={{ ...toggleWrapper }}>
                  <Text style={styles.toggleBtnText}> 35lb plate</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.inputAndCalcBtnWrapper}>
              <View style={{ width: '100%', margin: 5 }}>
                <Btn
                  text={'calculate'}
                  onPress={handleOnPress}
                  onLongPress={resetValues}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <TextInput
                  name='input'
                  style={styles.input}
                  placeholder={'Enter Weight'}
                  keyboardType={'number-pad'}
                  value={weight}
                  onChangeText={(text) => setWeight(text)}
                  clearButtonMode={'always'}
                  keyboardAppearance={'dark'}
                  returnKeyLabel={'Calculate'}
                ></TextInput>

                <View>
                  <RNPickerSelect
                    style={styles.picker}
                    placeholder={{ label: 'Percentage', value: 100 }}
                    onValueChange={handleValueChange}
                    value={percentage}
                    items={percentages}
                    useNativeAndroidPickerStyle={false}
                  />
                </View>
                {/* <TouchableOpacity
                onPress={handleOnPress}
                onLongPress={resetValues}
              >
                <View style={styles.addBtnWrapper}>
                  <Text style={styles.addBtnText}>Calc</Text>
                </View>
              </TouchableOpacity> */}
              </View>
            </View>
          </KeyboardAvoidingView>
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
