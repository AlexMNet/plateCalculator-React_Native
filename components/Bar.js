import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { genPlateComponents } from '../utilities/functions/functions';
import Plate from './Plate';
import PlateDisplay from './PlateDisplay';

const Bar = ({ weight, thirtyFive }) => {
  //Create array of objects. Each object defines a plate Compnent
  const plates = genPlateComponents(weight, thirtyFive);

  //Last object in plates array is an object of plates as keys and the number of each plate as values
  const plateNumbers = plates[plates.length - 1];

  return (
    <View style={styles.container}>
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
      </View>
      <PlateDisplay plateNumbers={plateNumbers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    width: '100%',
  },
  barContainer: {
    height: 150,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
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
});

export default Bar;
