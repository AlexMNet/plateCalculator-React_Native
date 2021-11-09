import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Plate from './Plate';

const Bar = ({ weight }) => {
  const plates = [];

  weight = weight - 45;

  while (weight >= 90) {
    //45lb Plates
    plates.push({ color: '#0F52BA', size: 10, height: 60 });
    weight = weight - 90;
  }

  while (weight >= 50) {
    //25lb Plates
    plates.push({ color: '#009E60', size: 10, height: 60 });
    weight = weight - 50;
  }

  while (weight >= 20) {
    //10lb plates
    plates.push({ color: 'black', size: 6, height: 60 });
    weight = weight - 20;
  }

  while (weight >= 10) {
    //5lb plates
    plates.push({ color: 'black', size: 6, height: 35 });
    weight = weight - 10;
  }

  while (weight >= 5) {
    //2.5lb plates
    plates.push({ color: 'black', size: 4, height: 25 });
    weight = weight - 5;
  }

  return (
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
  );
};

const styles = StyleSheet.create({
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
  plate: {},
});

export default Bar;
