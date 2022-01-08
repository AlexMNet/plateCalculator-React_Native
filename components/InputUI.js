import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import InputAndCalcBtn from '../components/InputAndCalBtn';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { Button, VStack, IconButton, Icon } from 'native-base';
import { useHomeContext } from '../context/HomeProvider';

const InputUI = () => {
  const {
    onOpen,
    saveWeight,
    savedWeight,
    clearSavedWeights,
    handleOnPress,
    resetValues,
    weight,
    handleValueChange,
    percentage,
    setWeight,
    enterWeight,
  } = useHomeContext();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.inputWeightWrapper}
      keyboardVerticalOffset={100}
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
      <InputAndCalcBtn
      // handleOnPress={handleOnPress}
      // resetValues={resetValues}
      // weight={weight}
      // handleValueChange={handleValueChange}
      // percentage={percentage}
      // enterWeight={enterWeight}
      />
    </KeyboardAvoidingView>
  );
};

export default InputUI;

const styles = StyleSheet.create({
  inputWeightWrapper: {
    position: 'absolute',
    bottom: 60,
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
    marginBottom: 10,
    marginRight: 25,
  },
});
