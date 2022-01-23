import React from 'react';
import { Btn } from '../components/Btn';
import { Text, View } from 'react-native';
import {
  Actionsheet,
  Box,
  Button,
  Link,
  KeyboardAvoidingView,
} from 'native-base';
import { useHomeContext } from '../context/HomeProvider';
import { useThemeContext } from '../theme/ThemeProvider';
import RNPickerSelect from 'react-native-picker-select';
import barWeights from '../utilities/data/barWeights';

const SettingsDrawer = () => {
  const {
    isOpen,
    onClose,
    thirtyFive,
    handle35OnPress,
    handleOnPressMode,
    modeAddPlates,
    navigation,
    barWeight,
    setBarWeight,
    handleOnChangeBarWeight,
  } = useHomeContext();

  const colorScheme = useThemeContext();

  return (
    <KeyboardAvoidingView style={{ width: '100%', height: 'auto' }}>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content
          style={{ backgroundColor: colorScheme.backgroundSecondary }}
        >
          <Box w='100%' h={60} px={4} justifyContent='center'>
            <Text fontSize='16' style={{ color: colorScheme.textPrimary }}>
              Settings
            </Text>
          </Box>

          <Actionsheet.Item>
            <Btn
              text='35lb Plate'
              onPress={handle35OnPress}
              bgColor={thirtyFive ? '#FCF55F' : '#fefce8'}
              textColor='black'
            />
          </Actionsheet.Item>
          <Actionsheet.Item>
            <Btn
              text='Calc by plate'
              onPress={handleOnPressMode}
              bgColor={modeAddPlates ? '#38bdf8' : '#e0f2fe'}
              textColor='black'
            />
          </Actionsheet.Item>
          <Actionsheet.Item>
            <View
              style={{
                backgroundColor: '#38bdf8',
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text>Bar Weight:</Text>
              <RNPickerSelect
                placeholder={{ label: '45lbs', value: 45, color: 'black' }}
                onValueChange={(value) => setBarWeight(value)}
                value={barWeight}
                items={barWeights}
                useNativeAndroidPickerStyle={false}
                style={{
                  inputIOS: {
                    fontSize: 18,
                    color: '#334155',
                  },
                  placeholder: {
                    color: '#334155',
                  },
                }}
              />
            </View>
          </Actionsheet.Item>
          <Actionsheet.Item>
            <Link
              onPress={() => navigation.navigate('Max')}
              isUnderlined={false}
              _text={{ color: 'blue.500', fontSize: 'xl' }}
            >
              1 Rep Max
            </Link>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </KeyboardAvoidingView>
  );
};

export default SettingsDrawer;
