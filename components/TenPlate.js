import React from 'react';
import { View, Text, ViewComponent, StyleSheet } from 'react-native';

const TenPlate = () => {
  return <View style={styles.plate}></View>;
};

const styles = StyleSheet.create({
  plate: {
    width: 6,
    height: 60,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export default TenPlate;
