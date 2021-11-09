import React from 'react';
import { View, Text, ViewComponent, StyleSheet } from 'react-native';

const FortyFivePlate = () => {
  return <View style={styles.plate}></View>;
};

const styles = StyleSheet.create({
  plate: {
    width: 10,
    height: 60,
    backgroundColor: '#0F52BA',
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export default FortyFivePlate;
