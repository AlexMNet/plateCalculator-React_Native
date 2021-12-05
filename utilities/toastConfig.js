import React from 'react';
import { View, Text } from 'react-native';
import { CheckIcon, InfoOutlineIcon, WarningTwoIcon } from 'native-base';

import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';

const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#10B981' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 25,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 20,
        fontWeight: '400',
      }}
      renderLeadingIcon={() => (
        <CheckIcon size={5} color='#10b981' mt='2' ml='2' />
      )}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: '#DC2626' }}
      text1Style={{
        fontSize: 25,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 20,
        fontWeight: '400',
      }}
      renderLeadingIcon={() => (
        <WarningTwoIcon size={5} color='#DC2626' mt='2' ml='2' />
      )}
    />
  ),
  info: (props) => (
    <InfoToast
      {...props}
      style={{ borderLeftColor: '#0891b2' }}
      text1Style={{
        fontSize: 25,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 20,
        fontWeight: '400',
      }}
      renderLeadingIcon={() => (
        <InfoOutlineIcon size={5} color='#0891b2' mt='2' ml='2' />
      )}
    />
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  //   tomatoToast: ({ text1, props }) => (
  //     <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
  //       <Text>{text1}</Text>
  //       <Text>{props.uuid}</Text>
  //     </View>
  //   ),
};

export default toastConfig;
