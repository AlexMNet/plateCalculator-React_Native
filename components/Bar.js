import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Plate from './Plate';

const Bar = ({ weight, thirtyFive }) => {
  const plates = [];

  const plateNumbers = {};

  weight = weight - 45;

  while (weight >= 90) {
    //45lb Plates
    plates.push({ color: '#0F52BA', size: 10, height: 60 });
    plateNumbers['fortyFive'] = plateNumbers['fortyFive'] + 1 || 1;
    weight = weight - 90;
  }

  if (thirtyFive) {
    while (weight >= 70) {
      plates.push({ color: '#FCF55F', size: 10, height: 60 });
      plateNumbers['thirtyFive'] = plateNumbers['thirtyFive'] + 1 || 1;
      weight = weight - 70;
    }
  }

  while (weight >= 50) {
    //25lb Plates
    plates.push({ color: '#009E60', size: 10, height: 60 });
    plateNumbers['twentyFive'] = plateNumbers['twentyFive'] + 1 || 1;
    weight = weight - 50;
  }

  while (weight >= 20) {
    //10lb plates
    plates.push({ color: '#FAF9F6', size: 6, height: 40 });
    plateNumbers['ten'] = plateNumbers['ten'] + 1 || 1;
    weight = weight - 20;
  }

  while (weight >= 10) {
    //5lb plates
    plates.push({ color: '#880808', size: 6, height: 30 });
    plateNumbers['five'] = plateNumbers['five'] + 1 || 1;
    weight = weight - 10;
  }

  while (weight >= 5) {
    //2.5lb plates
    plates.push({ color: 'black', size: 4, height: 22 });
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
              size={plate.size}
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
              size={plate.size}
              height={plate.height}
            />
          ))}
        </View>
      </View>
      <View style={styles.plateNumbers}>
        <Text>
          {plateNumbers.fortyFive ? plateNumbers.fortyFive + ': 45lbs' : null}
        </Text>
        <Text>
          {plateNumbers.thirtyFive ? plateNumbers.thirtyFive + ': 35lbs' : null}
        </Text>
        <Text>
          {plateNumbers.twentyFive ? plateNumbers.twentyFive + ': 25lbs' : null}
        </Text>
        <Text>{plateNumbers.ten ? plateNumbers.ten + ': 10lbs' : null}</Text>
        <Text>{plateNumbers.five ? plateNumbers.five + ': 5lbs' : null}</Text>
        <Text>
          {plateNumbers.twoPointFive
            ? plateNumbers.twoPointFive + ': 2.5lbs'
            : null}
        </Text>
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
    marginTop: 60,
  },
});

export default Bar;
