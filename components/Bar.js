import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { genPlateComponents } from '../utilities/functions/functions';
import Plate from './Plate';

const Bar = ({ weight, thirtyFive }) => {
  //Create array of objects. Each object defines a plate Compnent
  const plates = genPlateComponents(weight, thirtyFive);

  //Last object in plates array is an object of plates as keys and the number of each plate as values
  const plateNumbers = plates[plates.length - 1];

  return (
    <View style={styles.barContainer}>
      <View style={styles.bar}>
        <View style={styles.barLeft}>
          {plates.map((plate, idx) => (
            <Plate
              key={idx}
              color={plate.color}
              width={plate.width}
              height={plate.height}
            />
          ))}
        </View>

        <View style={styles.barCenter} />
        <View style={styles.barRight}>
          {plates.map((plate, idx) => (
            <Plate
              key={idx}
              color={plate.color}
              width={plate.width}
              height={plate.height}
            />
          ))}
        </View>
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  bar: {
    width: 320,
    height: 5,
    backgroundColor: '#595959',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  barLeft: {
    width: 115,
    height: 5,
    backgroundColor: '#595959',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  barRight: {
    width: 115,
    height: 5,
    backgroundColor: '#595959',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  plateNumbers: {
    height: 'auto',
    padding: 20,
    top: 100,
    position: 'absolute',
  },

  plateNumbersText: {
    fontSize: 20,
  },
});

export default Bar;
