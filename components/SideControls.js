import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import InputAndCalcBtn from '../components/InputAndCalBtn';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Button, VStack, IconButton, Icon } from 'native-base';
import { useHomeContext } from '../context/HomeProvider';
import { useThemeContext } from '../theme/ThemeProvider';
import EStyleSheet from 'react-native-extended-stylesheet';

const SideControl = () => {
  const {
    onOpen,
    saveWeight,
    savedWeight,
    clearSavedWeights,
    modalVisible,
    setModalVisible,
  } = useHomeContext();
  const colorScheme = useThemeContext();

  const styles = getStyles(colorScheme);

  return (
    <View style={styles.btnsWrapper}>
      {/* future buttons */}
      <VStack space={3} alignItems='flex-end'>
        <IconButton
          onPress={onOpen}
          icon={<Icon as={Ionicons} name='settings-outline' />}
          _icon={{
            color: '#4B5563',
            size: 'md',
          }}
          _pressed={{
            bg: 'transparent',
            _icon: {
              name: 'settings',
            },
          }}
        />

        <Button onPress={saveWeight} size='md' colorScheme='success'>
          Save
        </Button>
        <Button
          size='md'
          colorScheme='amber'
          isDisabled={savedWeight && savedWeight.length === 0}
          onPress={() => setModalVisible(true)}
          onLongPress={clearSavedWeights}
        >
          {'Saved Weights:' + ' ' + savedWeight.length}
        </Button>
      </VStack>
    </View>
  );
};

export default SideControl;

const getStyles = (colorScheme, modalVisible) =>
  EStyleSheet.create({
    btnsWrapper: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'center',
      width: '100%',
      height: 'auto',
      marginTop: 'auto',
    },
  });
