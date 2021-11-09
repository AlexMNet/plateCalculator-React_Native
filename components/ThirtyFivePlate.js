import React from 'react';
import { View, Text, ViewComponent, StyleSheet } from 'react-native';

const ThirtyFivePlate = () => {
  return <View style={styles.plate}></View>;
};

const styles = StyleSheet.create({
  plate: {
    width: 10,
    height: 60,
    backgroundColor: '#FCF55F',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 3,
  },
});

export default ThirtyFivePlate;
