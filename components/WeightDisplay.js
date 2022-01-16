import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useHomeContext } from '../context/HomeProvider';
import { useThemeContext } from '../theme/ThemeProvider';
import EStyleSheet from 'react-native-extended-stylesheet';

function WeightDisplay() {
  const { inputWeight, targetWeight } = useHomeContext();
  const colorScheme = useThemeContext();

  const styles = getStyles(colorScheme);

  return (
    <View style={styles.testWeightDisplayContainer}>
      <View style={styles.targetWeightWrapper}>
        <View style={styles.targetWeightDisplay}>
          {targetWeight ? (
            <Text style={styles.targetTextPounds}>{targetWeight} lbs</Text>
          ) : null}
        </View>
        <View style={styles.targetWeightText}>
          <Text style={{ color: colorScheme.textPrimary }}>Target Weight</Text>
        </View>
      </View>
      <View style={styles.finalWeightWrapper}>
        <View style={styles.finalWeightDisplay}>
          {inputWeight ? (
            <Text style={styles.finalTextPounds}>{inputWeight} lbs</Text>
          ) : null}
        </View>
        <View style={styles.finalWeightText}>
          <Text style={{ color: colorScheme.textPrimary }}>Final Weight</Text>
        </View>
      </View>
    </View>
  );
}

const getStyles = (colorScheme) =>
  EStyleSheet.create({
    testWeightDisplayContainer: {
      width: '100%',
      height: '10%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    targetWeightWrapper: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    targetWeightDisplay: {
      flex: 0.7,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    targetTextPounds: {
      fontSize: '1.88rem',
      fontWeight: 'bold',
      color: colorScheme.textPrimary,
    },
    targetWeightText: {
      flex: 0.3,
      width: '100%',

      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    finalWeightWrapper: {
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    finalWeightDisplay: {
      flex: 0.7,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    finalTextPounds: {
      fontSize: '1.88rem',
      fontWeight: 'bold',
      color: colorScheme.textPrimary,
    },
    finalWeightText: {
      flex: 0.3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  });

export default WeightDisplay;
