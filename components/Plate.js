import React from 'react';
import { View } from 'react-native';

const Plate = ({ color, width, height }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 3,
      }}
    ></View>
  );
};

export default Plate;
