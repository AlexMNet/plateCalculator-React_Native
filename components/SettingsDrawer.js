import React from 'react';
import { Btn } from '../components/Btn';
import { Text } from 'react-native';
import { Actionsheet, Box, Button, Link } from 'native-base';

const SettingsDrawer = ({
  isOpen,
  onClose,
  thirtyFive,
  handle35OnPress,
  navigation,
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <Box w='100%' h={60} px={4} justifyContent='center'>
          <Text
            fontSize='16'
            color='gray.500'
            _dark={{
              color: 'gray.300',
            }}
          >
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
