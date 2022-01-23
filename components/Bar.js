import React from 'react';
import { View } from 'react-native';
import { genPlateComponents } from '../utilities/functions/functions';
import Plate from './Plate';
import PlateBadgeDisplay from './PlateBadgeDisplay';
import { useHomeContext } from '../context/HomeProvider';
import { useThemeContext } from '../theme/ThemeProvider';
import EStyleSheet from 'react-native-extended-stylesheet';

const Bar = () => {
  const { inputWeight, thirtyFive, barWeight } = useHomeContext();

  const colorScheme = useThemeContext();
  const styles = getStyles(colorScheme);

  //Create array of objects. Each object defines a plate Compnent
  const plates = genPlateComponents(inputWeight, thirtyFive, barWeight);

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
      <PlateBadgeDisplay plateNumbers={plateNumbers} />
    </View>
  );
};

const getStyles = (colorScheme) =>
  EStyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto',
      width: '100%',
    },
    barContainer: {
      height: '9.4rem',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    bar: {
      width: '20rem',
      height: '.31rem',
      backgroundColor: '#595959',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    barLeft: {
      width: '20rem / 3',
      height: '.31rem',
      backgroundColor: '#595959',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    barRight: {
      width: '20rem / 3',
      height: '.31rem',
      backgroundColor: '#595959',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });

export default Bar;
