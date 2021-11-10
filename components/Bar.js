import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Plate from './Plate';

const Bar = ({ weight, thirtyFive }) => {
  const plates = [];

  const plateNumbers = {};

  weight = weight - 45;

  while (weight >= 90) {
    //45lb Plates
    plates.push({ color: '#0F52BA', width: 15, height: 65 });
    plateNumbers['fortyFive'] = plateNumbers['fortyFive'] + 1 || 1;
    weight = weight - 90;
  }

  if (thirtyFive) {
    while (weight >= 70) {
      plates.push({ color: '#FCF55F', width: 15, height: 65 });
      plateNumbers['thirtyFive'] = plateNumbers['thirtyFive'] + 1 || 1;
      weight = weight - 70;
    }
  }

  while (weight >= 50) {
    //25lb Plates
    plates.push({ color: '#009E60', width: 15, height: 65 });
    plateNumbers['twentyFive'] = plateNumbers['twentyFive'] + 1 || 1;
    weight = weight - 50;
  }

  while (weight >= 20) {
    //10lb plates
    plates.push({ color: '#FAF9F6', width: 9, height: 43 });
    plateNumbers['ten'] = plateNumbers['ten'] + 1 || 1;
    weight = weight - 20;
  }

  while (weight >= 10) {
    //5lb plates
    plates.push({ color: '#880808', width: 9, height: 33 });
    plateNumbers['five'] = plateNumbers['five'] + 1 || 1;
    weight = weight - 10;
  }

  while (weight >= 5) {
    //2.5lb plates
    plates.push({ color: 'black', width: 6, height: 25 });
    plateNumbers['twoPointFive'] = plateNumbers['twoPointFive'] + 1 || 1;
    weight = weight - 5;
  }

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
        {/* //Render 35lb plate */}
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
    // borderColor: 'red',
    // borderWidth: 1,
  },

  plateNumbersText: {
    fontSize: 20,
  },
});

export default Bar;
