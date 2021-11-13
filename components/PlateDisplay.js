import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PlateDisplay({ plateNumbers }) {
  return (
    <View style={styles.plateNumbers}>
      {/* //Render 45lb plate */}
      {plateNumbers.fortyFive ? (
        <Text style={styles.plateNumbersText}>
          {plateNumbers.fortyFive + ': 45lbs'}
        </Text>
      ) : null}
      {/* Render 35lb plate */}
      {plateNumbers.thirtyFive ? (
        <Text style={styles.plateNumbersText}>
          {plateNumbers.thirtyFive + ': 35lbs'}
        </Text>
      ) : null}
      {/* //Render 25lb plate */}
      {plateNumbers.twentyFive ? (
        <Text style={styles.plateNumbersText}>
          {plateNumbers.twentyFive + ': 25lbs'}
        </Text>
      ) : null}
      {/* //Render 10lb plate */}
      {plateNumbers.ten ? (
        <Text style={styles.plateNumbersText}>
          {plateNumbers.ten + ': 10lbs'}
        </Text>
      ) : null}
      {/* //Render 5lb plate */}
      {plateNumbers.five ? (
        <Text style={styles.plateNumbersText}>
          {plateNumbers.five + ': 5lbs'}
        </Text>
      ) : null}
      {/* //Render 2.5lb plate */}
      {plateNumbers.twoPointFive ? (
        <Text style={styles.plateNumbersText}>
          {plateNumbers.twoPointFive + ': 2.5lbs'}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  plateNumbersContainer: {},
  plateNumbers: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    padding: 20,
    top: 30,
    // backgroundColor: 'blue',
  },

  plateNumbersText: {
    fontSize: 20,
  },
});

export default PlateDisplay;
