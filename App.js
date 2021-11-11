import React, { useState } from 'react';
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
} from 'react-native';
import Bar from './components/Bar';
import HideKeyboard from './components/HideKeyboard';

export default function App() {
  const [weight, setWeight] = useState('');
  const [inputWeight, setInputWeight] = useState('');
  const [thirtyFive, setThirtyFive] = useState(false);

  const handleOnPress = () => {
    setInputWeight(weight);
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
    <HideKeyboard>
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Plate Calculator</Text>

        {/* Barbell */}
        <View style={styles.barbellContainer}>
          <Bar weight={inputWeight} thirtyFive={thirtyFive} />
        </View>

        {/* Main Weight Display */}
        <View style={styles.weightDisplayWrapper}>
          <Text style={styles.weightDisplayText}>{inputWeight}</Text>
          <Text style={styles.lbsText}>{inputWeight ? 'lbs' : null}</Text>
        </View>

        {/* Keyboard and BTNs */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inputWeightWrapper}
        >
          <View style={styles.btnsWrapper}>
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
            <TextInput
              name='input'
              style={styles.input}
              placeholder={'Enter Weight'}
              keyboardType={'number-pad'}
              value={weight}
              onChangeText={(text) => setWeight(text)}
            ></TextInput>
            <TouchableOpacity onPress={handleOnPress}>
              <View style={styles.addBtnWrapper}>
                <Text style={styles.addBtnText}>Calc</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </HideKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#E8EAED',
  },

  title: {
    paddingTop: 100,
    fontSize: 50,
    fontFamily: 'Helvetica',
    fontWeight: '200',
    textAlign: 'center',
  },

  barbellContainer: {
    // borderColor: 'red',
    // borderWidth: 1,
    height: 150,
    width: '100%',
    // marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  weightDisplayWrapper: {
    // borderColor: 'red',
    // borderWidth: 1,
    height: 'auto',
    marginTop: 175,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weightDisplayText: {
    fontSize: 60,
    fontFamily: 'Helvetica',
    fontWeight: '100',
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
    flexDirection: 'row',
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
    width: 250,
  },

  btnsWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
    marginRight: 50,
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
