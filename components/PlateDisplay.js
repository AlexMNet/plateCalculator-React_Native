import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PlateBadge } from './PlateBadge';
import { useHomeContext } from '../context/HomeProvider';

function PlateDisplay({ plateNumbers }) {
  const { setInputWeight, inputWeight, setTargetWeight } = useHomeContext();

  const handleOnPress = (numPlates, type) => {
    const newWeight = inputWeight - type * 2;

    setInputWeight(newWeight);
    setTargetWeight(newWeight);
  };

  return (
    <View style={styles.plateNumbers}>
      {/* //Render 45lb plate */}
      {plateNumbers.fortyFive ? (
        <PlateBadge
          text={'45 LB'}
          number={plateNumbers.fortyFive}
          bg={'plates.45'}
          handleOnPress={() => handleOnPress(plateNumbers.fortyFive, 45)}
        />
      ) : null}
      {/* //Render 35lb plate */}
      {plateNumbers.thirtyFive ? (
        <PlateBadge
          text={'35 LB'}
          number={plateNumbers.thirtyFive}
          bg={'plates.35'}
          handleOnPress={() => handleOnPress(plateNumbers.thirtyFive, 35)}
        />
      ) : null}
      {/* //Render 25lb plate */}
      {plateNumbers.twentyFive ? (
        <PlateBadge
          text={'25 LB'}
          number={plateNumbers.twentyFive}
          bg={'plates.25'}
          handleOnPress={() => handleOnPress(plateNumbers.twentyFive, 25)}
        />
      ) : null}

      {/* //Render 10lb plate */}
      {plateNumbers.ten ? (
        <PlateBadge
          text={'10 LB'}
          number={plateNumbers.ten}
          bg={'plates.10'}
          handleOnPress={() => handleOnPress(plateNumbers.ten, 10)}
        />
      ) : null}

      {/* //Render 5lb plate */}
      {plateNumbers.five ? (
        <PlateBadge
          text={'5 LB'}
          number={plateNumbers.five}
          bg={'plates.5'}
          handleOnPress={() => handleOnPress(plateNumbers.five, 5)}
        />
      ) : null}

      {/* //Render 2.5lb plate */}
      {plateNumbers.twoPointFive ? (
        <PlateBadge
          text={'2.5 LB'}
          number={plateNumbers.twoPointFive}
          bg={'plates.2'}
          handleOnPress={() => handleOnPress(plateNumbers.twoPointFive, 2.5)}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  plateNumbers: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 'auto',
    padding: 0,
    flexWrap: 'wrap',
  },
});

export default PlateDisplay;
