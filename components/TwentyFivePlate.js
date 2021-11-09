import React from 'react';
import { View, Text, ViewComponent, StyleSheet } from 'react-native';

const TwentyFivePlate = () => {
  return <View style={styles.plate}></View>;
};

const styles = StyleSheet.create({
  plate: {
    width: 10,
    height: 60,
    backgroundColor: '#009E60',
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export default TwentyFivePlate;
