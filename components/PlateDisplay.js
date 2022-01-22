import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PlateBadge } from './PlateBadge';
import { useHomeContext } from '../context/HomeProvider';

function PlateDisplay({ plateNumbers }) {
  const {
    setInputWeight,
    inputWeight,
    setTargetWeight,
    modeAddPlates,
    thirtyFive,
  } = useHomeContext();

  const handleOnPress = (type) => {
    if (modeAddPlates) {
      if (inputWeight > 0) {
        const newWeight = inputWeight + type * 2;
        setInputWeight(newWeight);
        setTargetWeight(newWeight);
      }

      if (inputWeight === 0 || inputWeight === '') {
        const newWeight = 45 + type * 2;
        setInputWeight(newWeight);
        setTargetWeight(newWeight);
      }
    } else {
      const newWeight = inputWeight - type * 2;

      setInputWeight(newWeight);
      setTargetWeight(newWeight);
    }
  };

  const handleOnLongPress = (type, numOfPlates) => {
    if (modeAddPlates) {
      const newWeight = inputWeight - type * 2;

      setInputWeight(newWeight);
      setTargetWeight(newWeight);
    } else {
      const newWeight = inputWeight - type * numOfPlates * 2;

      setInputWeight(newWeight);
      setTargetWeight(newWeight);
    }
  };

  //Reverse plate calculator
  if (modeAddPlates) {
    return (
      <View>
        <View style={styles.plateNumbers}>
          <PlateBadge
            text={'45 LB'}
            number={plateNumbers.fortyFive || 0}
            bg={'plates.45'}
            handleOnPress={() => handleOnPress(45)}
            handleOnLongPress={() =>
              handleOnLongPress(45, plateNumbers.fortyFive)
            }
          />

          {thirtyFive && (
            <PlateBadge
              text={'35 LB'}
              number={plateNumbers.thirtyFive || 0}
              bg={'plates.35'}
              handleOnPress={() => handleOnPress(35)}
              handleOnLongPress={() => handleOnLongPress(35)}
            />
          )}

          <PlateBadge
            text={'25 LB'}
            number={plateNumbers.twentyFive || 0}
            bg={'plates.25'}
            handleOnPress={() => handleOnPress(25)}
            handleOnLongPress={() => handleOnLongPress(25)}
          />

          <PlateBadge
            text={'10 LB'}
            number={plateNumbers.ten || 0}
            bg={'plates.10'}
            handleOnPress={() => handleOnPress(10)}
            handleOnLongPress={() => handleOnLongPress(10)}
          />

          <PlateBadge
            text={'5 LB'}
            number={plateNumbers.five || 0}
            bg={'plates.5'}
            handleOnPress={() => handleOnPress(5)}
            handleOnLongPress={() => handleOnLongPress(5)}
          />

          <PlateBadge
            text={'2.5 LB'}
            number={plateNumbers.twoPointFive || 0}
            bg={'plates.2'}
            handleOnPress={() => handleOnPress(2.5)}
            handleOnLongPress={() => handleOnLongPress(2.5)}
          />
        </View>
        <Text style={styles.mode}>Mode: Add by plate</Text>
      </View>
    );
  }

  //Normal Plate Caluculator
  return (
    <View style={styles.plateNumbers}>
      {/* //Render 45lb plate */}
      {plateNumbers.fortyFive ? (
        <PlateBadge
          text={'45 LB'}
          number={plateNumbers.fortyFive}
          bg={'plates.45'}
          handleOnPress={() => handleOnPress(45)}
          handleOnLongPress={() =>
            handleOnLongPress(45, plateNumbers.fortyFive)
          }
        />
      ) : null}
      {/* //Render 35lb plate */}
      {plateNumbers.thirtyFive ? (
        <PlateBadge
          text={'35 LB'}
          number={plateNumbers.thirtyFive}
          bg={'plates.35'}
          handleOnPress={() => handleOnPress(35)}
          handleOnLongPress={() =>
            handleOnLongPress(55, plateNumbers.thirtyFive)
          }
        />
      ) : null}
      {/* //Render 25lb plate */}
      {plateNumbers.twentyFive ? (
        <PlateBadge
          text={'25 LB'}
          number={plateNumbers.twentyFive}
          bg={'plates.25'}
          handleOnPress={() => handleOnPress(25)}
          handleOnLongPress={() =>
            handleOnLongPress(25, plateNumbers.twentyFive)
          }
        />
      ) : null}

      {/* //Render 10lb plate */}
      {plateNumbers.ten ? (
        <PlateBadge
          text={'10 LB'}
          number={plateNumbers.ten}
          bg={'plates.10'}
          handleOnPress={() => handleOnPress(10)}
          handleOnLongPress={() => handleOnLongPress(10, plateNumbers.ten)}
        />
      ) : null}

      {/* //Render 5lb plate */}
      {plateNumbers.five ? (
        <PlateBadge
          text={'5 LB'}
          number={plateNumbers.five}
          bg={'plates.5'}
          handleOnPress={() => handleOnPress(5)}
          handleOnLongPress={() => handleOnLongPress(5, plateNumbers.five)}
        />
      ) : null}

      {/* //Render 2.5lb plate */}
      {plateNumbers.twoPointFive ? (
        <PlateBadge
          text={'2.5 LB'}
          number={plateNumbers.twoPointFive}
          bg={'plates.2'}
          handleOnPress={() => handleOnPress(2.5)}
          handleOnLongPress={() =>
            handleOnLongPress(2.5, plateNumbers.twoPointFive)
          }
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
  mode: {
    alignSelf: 'flex-start',
    backgroundColor: '#38bdf8',
    borderRadius: 10,
    color: '#e0f2fe',
    marginTop: 10,
    overflow: 'hidden',
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
});

export default PlateDisplay;
