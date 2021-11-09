import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FortyFivePlate from './FortyFivePlate';
import ThirtyFivePlate from './ThirtyFivePlate';
import TwentyFivePlate from './TwentyFivePlate';
import TenPlate from './TenPlate';

const Bar = () => {
  return (
    <View style={styles.bar}>
      <View style={styles.barLeft}>
        <FortyFivePlate style={styles.plate} />
        <FortyFivePlate style={styles.plate} />
        <ThirtyFivePlate style={styles.plate} />
        <TwentyFivePlate style={styles.plate} />
        <TenPlate style={styles.plate} />
      </View>

      <View style={styles.barCenter} />
      <View style={styles.barRight}>
        <FortyFivePlate style={styles.plate} />
        <FortyFivePlate style={styles.plate} />
        <ThirtyFivePlate style={styles.plate} />
        <TwentyFivePlate style={styles.plate} />
        <TenPlate style={styles.plate} />
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
