import React from 'react';
import { Btn } from '../components/Btn';
import { Text } from 'react-native';
import { Actionsheet, Box, Button, Link } from 'native-base';
import { useHomeContext } from '../context/HomeProvider';
import { useThemeContext } from '../theme/ThemeProvider';

const SettingsDrawer = () => {
  const {
    isOpen,
    onClose,
    thirtyFive,
    handle35OnPress,
    handleOnPressMode,
    modeAddPlates,
    navigation,
  } = useHomeContext();

  const colorScheme = useThemeContext();

  return (
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
  );
};

export default SettingsDrawer;
