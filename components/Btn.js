import React from 'react';
import { Button, Center, NativeBaseProvider } from 'native-base';
export const Btn = ({
  onPress,
  onLongPress,
  text,
  bgColor,
  textColor,
  colorScheme,
  isDisabled,
}) => {
  return (
    <>
      <Button
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ backgroundColor: bgColor, marginVertical: 10 }}
        _text={{
          color: textColor,
        }}
      >
        {text}
      </Button>
    </>
  );
};
