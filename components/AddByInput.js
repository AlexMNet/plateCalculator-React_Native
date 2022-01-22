import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useHomeContext } from '../context/HomeProvider';
import { PlateBadge } from './PlateBadge';

export default function AddByInput({ plateNumbers }) {
  const { handleOnLongPressBadges, handleOnPressBadges } = useHomeContext();

  return (
    <View style={styles.plateNumberStyles}>
      {/* //Render 45lb plate */}
      {plateNumbers.fortyFive ? (
        <PlateBadge
          text={'45 LB'}
          number={plateNumbers.fortyFive}
          bg={'plates.45'}
          handleOnPress={() => handleOnPressBadges(45)}
          handleOnLongPress={() =>
            handleOnLongPressBadges(45, plateNumbers.fortyFive)
          }
        />
      ) : null}
      {/* //Render 35lb plate */}
      {plateNumbers.thirtyFive ? (
        <PlateBadge
          text={'35 LB'}
          number={plateNumbers.thirtyFive}
          bg={'plates.35'}
          handleOnPress={() => handleOnPressBadges(35)}
          handleOnLongPress={() =>
            handleOnLongPressBadges(55, plateNumbers.thirtyFive)
          }
        />
      ) : null}
      {/* //Render 25lb plate */}
      {plateNumbers.twentyFive ? (
        <PlateBadge
          text={'25 LB'}
          number={plateNumbers.twentyFive}
          bg={'plates.25'}
          handleOnPress={() => handleOnPressBadges(25)}
          handleOnLongPress={() =>
            handleOnLongPressBadges(25, plateNumbers.twentyFive)
          }
        />
      ) : null}

      {/* //Render 10lb plate */}
      {plateNumbers.ten ? (
        <PlateBadge
          text={'10 LB'}
          number={plateNumbers.ten}
          bg={'plates.10'}
          handleOnPress={() => handleOnPressBadges(10)}
          handleOnLongPress={() =>
            handleOnLongPressBadges(10, plateNumbers.ten)
          }
        />
      ) : null}

      {/* //Render 5lb plate */}
      {plateNumbers.five ? (
        <PlateBadge
          text={'5 LB'}
          number={plateNumbers.five}
          bg={'plates.5'}
          handleOnPress={() => handleOnPressBadges(5)}
          handleOnLongPress={() =>
            handleOnLongPressBadges(5, plateNumbers.five)
          }
        />
      ) : null}

      {/* //Render 2.5lb plate */}
      {plateNumbers.twoPointFive ? (
        <PlateBadge
          text={'2.5 LB'}
          number={plateNumbers.twoPointFive}
          bg={'plates.2'}
          handleOnPress={() => handleOnPressBadges(2.5)}
          handleOnLongPress={() =>
            handleOnLongPressBadges(2.5, plateNumbers.twoPointFive)
          }
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  plateNumberStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 'auto',
    padding: 0,
    flexWrap: 'wrap',
  },
});
