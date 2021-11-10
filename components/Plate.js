import React from 'react';
import { View, Text, ViewComponent, StyleSheet } from 'react-native';

const Plate = ({ color, width, height }) => {
  return (
    <View
      //   style={styles.plate}
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

// const styles = StyleSheet.create({
//   plate: {
//     height: 60,
//     borderColor: 'grey',
//     borderWidth: 1,
//     borderRadius: 3,
//   },
// });

export default Plate;