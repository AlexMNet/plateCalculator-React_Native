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
} from 'react-native';
import Bar from './components/Bar';

export default function App() {
  const [weight, setWeight] = useState('');
  const [inputWeight, setInputWeight] = useState('');

  const handleOnPress = () => {
    setInputWeight(weight);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plate Calculator</Text>
      <View style={styles.barbellContainer}>
        <Bar weight={inputWeight} thirtyFive={false} />
      </View>

      <View style={styles.weightDisplayWrapper}>
        <Text style={styles.weightDisplayText}>{inputWeight}</Text>
        <Text style={styles.lbsText}>{inputWeight ? 'lbs' : null}</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputWeightWrapper}
      >
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
            <Text style={styles.addBtnText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
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
    height: 100,
    width: 100,
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  weightDisplayWrapper: {
    marginTop: 70,
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 200,
  },
  addBtnWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addBtnText: {},
});
