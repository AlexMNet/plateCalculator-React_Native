import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useHomeContext } from '../context/HomeProvider';
import EStyleSheet from 'react-native-extended-stylesheet';

function WeightDisplay() {
  const { inputWeight, targetWeight } = useHomeContext();

  return (
    <View style={styles.testWeightDisplayContainer}>
      <View style={styles.targetWeightWrapper}>
        <View style={styles.targetWeightDisplay}>
          {targetWeight ? (
            <Text style={styles.targetTextPounds}>{targetWeight} lbs</Text>
          ) : null}
        </View>
        <View style={styles.targetWeightText}>
          <Text>Target Weight</Text>
        </View>
      </View>
      <View style={styles.finalWeightWrapper}>
        <View style={styles.finalWeightDisplay}>
          {inputWeight ? (
            <Text style={styles.finalTextPounds}>{inputWeight} lbs</Text>
          ) : null}
        </View>
        <View style={styles.finalWeightText}>
          <Text>Final Weight</Text>
        </View>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  testWeightDisplayContainer: {
    width: '100%',
    height: '12.5%',
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
    flex: 0.8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  targetTextPounds: {
    fontSize: '1.88rem',
    fontWeight: 'bold',
  },
  targetWeightText: {
    flex: 0.2,
    width: '100%',
    // borderTopWidth: 1,
    // borderTopColor: 'grey',
    alignItems: 'center',
  },
  finalWeightWrapper: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'grey',
    // borderWidth: 1,
  },
  finalWeightDisplay: {
    flex: 0.8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  finalTextPounds: {
    fontSize: '1.88rem',
    fontWeight: 'bold',
  },
  finalWeightText: {
    flex: 0.2,
    width: '100%',
    alignItems: 'center',
  },
});

export default WeightDisplay;
