import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

//This component is a wrapper around the entire app.js
//It has a fn() attached to it that dismisses the keyboard anytime
//the user presses anywhere outside the keyboard
//All children components are rendered in between
// Source https://reactnativecode.com/react-native-hide-dismiss-keyboard/
function HideKeyboard({ children }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
}

export default HideKeyboard;
