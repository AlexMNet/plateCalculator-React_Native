import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import InputAndCalcBtn from '../components/InputAndCalBtn';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { Button, VStack, IconButton, Icon } from 'native-base';
import { useHomeContext } from '../context/HomeProvider';
import EStyleSheet from 'react-native-extended-stylesheet';

const InputUI = () => {
  const { onOpen, saveWeight, savedWeight, clearSavedWeights } =
    useHomeContext();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.inputWeightWrapper}
      keyboardVerticalOffset={130}
    >
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
            onPress={clearSavedWeights}
          >
            Clear All Weights
          </Button>
        </VStack>
      </View>
      <InputAndCalcBtn />
    </KeyboardAvoidingView>
  );
};

export default InputUI;

const styles = EStyleSheet.create({
  inputWeightWrapper: {
    position: 'absolute',
    bottom: '5%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E8EAED',
  },
  btnsWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '2.5%',
    marginRight: '2%',
  },
});
