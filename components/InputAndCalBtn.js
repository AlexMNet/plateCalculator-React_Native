import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, TextInput } from 'react-native';
import { Btn } from './Btn';
import percentages from '../utilities/data/percentages';
import { useHomeContext } from '../context/HomeProvider';
import { useThemeContext } from '../theme/ThemeProvider';
import EStyleSheet from 'react-native-extended-stylesheet';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function inputAndCalcBtn() {
  const {
    handleOnPress,
    resetValues,
    weight,
    handleValueChange,
    percentage,
    setWeight,
  } = useHomeContext();

  const colorScheme = useThemeContext();
  const styles = getStyles(colorScheme);

  return (
    <View style={styles.inputAndCalcBtnWrapper}>
      <View style={{ width: '100%' }}>
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

        <View style={styles.percentageWrapper}>
          <RNPickerSelect
            placeholder={{ label: 'Percentage', value: 100 }}
            onValueChange={(value) => handleValueChange(value)}
            value={percentage}
            items={percentages}
            useNativeAndroidPickerStyle={false}
            style={{
              inputIOS: {
                fontSize: 18,
                fontWeight: 'bold',
                color: colorScheme.textPrimary,
              },
            }}
          />
        </View>
      </View>
    </View>
  );
}

const getStyles = (colorScheme) =>
  EStyleSheet.create({
    inputAndCalcBtnWrapper: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
      marginBottom: '2%',
    },
    input: {
      paddingVertical: '.94rem',
      paddingHorizontal: '.94rem',
      backgroundColor: colorScheme.inputColor,
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: '.05rem',
      color: colorScheme.textPrimary,
      width: '73%',
    },
    percentageWrapper: {
      flex: 1,
      flexDirection: 'row',
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
