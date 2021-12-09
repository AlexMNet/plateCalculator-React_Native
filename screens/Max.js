import React, { useState } from 'react';
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
import {
  NativeBaseProvider,
  useDisclose,
  Actionsheet,
  Box,
  Button,
  VStack,
  IconButton,
  Icon,
} from 'native-base';
import { Btn } from '../components/Btn';
import HideKeyboard from '../components/HideKeyboard';
import tw from 'twrnc';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Max({ navigation }) {
  const [inputWeight, setInputWeight] = useState('');
  const [reps, setReps] = useState('');
  const [result, setResult] = useState('');

  const handlePress = () => {
    if (+inputWeight <= 0) return alert('Weight must be greater than zero!');

    let kg = +inputWeight / 2.2046;

    let max = kg / (1.0278 - 0.0278 * reps);

    let result = max * 2.2046;

    result = result.toFixed(1);

    setResult(result);

    Keyboard.dismiss();
  };

  const reset = () => {
    setInputWeight('');
    setReps('');
    setResult('');
    Keyboard.dismiss();
  };

  return (
    <NativeBaseProvider>
      <HideKeyboard>
        <View style={tw`flex flex-col h-full justify-between py-10`}>
          <View style={tw`mt-10`}>
            {result ? (
              <Text style={tw`text-center text-8xl text-green-400`}>
                {result} <Text style={tw`text-black text-3xl`}>lbs</Text>
              </Text>
            ) : (
              <Text style={tw`text-center text-3xl`}>
                Enter Weight To Find Out Max
              </Text>
            )}
          </View>
          <View style={tw`mx-auto`}>
            <MaterialCommunityIcons
              name='weight-lifter'
              size={100}
              color='#0891b2'
            />
          </View>
          <KeyboardAvoidingView
            // style={tw` `}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={110}
          >
            <View style={tw`px-5`}>
              <TextInput
                name='input'
                placeholder={'Weight'}
                keyboardType={'number-pad'}
                value={inputWeight}
                onChangeText={(input) => setInputWeight(input)}
                clearButtonMode={'always'}
                keyboardAppearance={'dark'}
                returnKeyLabel={'Calculate'}
                style={tw`rounded-full border-2 border-gray-400 p-5 mb-5`}
              />
              <TextInput
                name='input'
                placeholder={'Reps'}
                keyboardType={'number-pad'}
                value={reps}
                onChangeText={(input) => setReps(input)}
                clearButtonMode={'always'}
                keyboardAppearance={'dark'}
                returnKeyLabel={'Calculate'}
                style={tw`rounded-full border-2 border-gray-400 p-5 mb-5`}
              />
              <Button
                style={tw`w-full bg-blue-500`}
                size='lg'
                onPress={handlePress}
                onLongPress={reset}
              >
                <Text style={tw`text-white text-xl`}>Calculate</Text>
              </Button>
            </View>
          </KeyboardAvoidingView>
        </View>
      </HideKeyboard>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
