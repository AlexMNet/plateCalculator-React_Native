import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PlateBadge } from './PlateBadge';

function PlateDisplay({ plateNumbers }) {
  return (
    <View style={styles.plateNumbers}>
      {/* //Render 45lb plate */}
      {plateNumbers.fortyFive ? (
        <PlateBadge
          text={'45 LB'}
          number={plateNumbers.fortyFive}
          bg={'plates.45'}
        />
      ) : null}
      {/* //Render 35lb plate */}
      {plateNumbers.thirtyFive ? (
        <PlateBadge
          text={'35 LB'}
          number={plateNumbers.thirtyFive}
          bg={'plates.35'}
        />
      ) : null}
      {/* //Render 25lb plate */}
      {plateNumbers.twentyFive ? (
        <PlateBadge
          text={'25 LB'}
          number={plateNumbers.twentyFive}
          bg={'plates.25'}
        />
      ) : null}

      {/* //Render 10lb plate */}
      {plateNumbers.ten ? (
        <PlateBadge text={'10 LB'} number={plateNumbers.ten} bg={'plates.10'} />
      ) : null}

      {/* //Render 5lb plate */}
      {plateNumbers.five ? (
        <PlateBadge text={'5 LB'} number={plateNumbers.five} bg={'plates.5'} />
      ) : null}

      {/* //Render 2.5lb plate */}
      {plateNumbers.twoPointFive ? (
        <PlateBadge
          text={'2.5 LB'}
          number={plateNumbers.twoPointFive}
          bg={'plates.2'}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  plateNumbersContainer: {},
  plateNumbers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
