import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, View, TextInput } from 'react-native';
import { Btn } from './Btn';
import percentages from '../utilities/data/percentages';
import { useHomeContext } from '../context/HomeProvider';

export default function inputAndCalcBtn() {
  const {
    handleOnPress,
    resetValues,
    weight,
    handleValueChange,
    percentage,
    setWeight,
  } = useHomeContext();

  return (
    <View style={styles.inputAndCalcBtnWrapper}>
      <View style={{ width: '100%', margin: 5 }}>
        <Btn
          text={'calculate'}
          onPress={handleOnPress}
          onLongPress={resetValues}
          textColor='#fff'
          bgColor='#0891b2'
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
            placeholder={{ label: 'Percentage', value: 100 }}
            onValueChange={(value) => handleValueChange(value)}
            value={percentage}
            items={percentages}
            useNativeAndroidPickerStyle={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
