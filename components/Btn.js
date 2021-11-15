import React from 'react';
import { Button, Center, NativeBaseProvider } from 'native-base';
export const Btn = ({ onPress, onLongPress, text }) => {
  return (
    <>
      <Button onPress={onPress} onLongPress={onLongPress}>
        {text}
      </Button>
    </>
  );
};
