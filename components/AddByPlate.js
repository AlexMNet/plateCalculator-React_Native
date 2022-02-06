import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useHomeContext } from '../context/HomeProvider';
import { PlateBadge } from './PlateBadge';

export default function AddByPlate({ plateNumbers }) {
  const { thirtyFive, handleOnLongPressBadges, handleOnPressBadges } =
    useHomeContext();

  return (
    <View>
      <View style={styles.plateNumberStyles}>
        <PlateBadge
          text={'45 LB'}
          number={plateNumbers.fortyFive || 0}
          bg={'#0F52BA'}
          handleOnPress={() => handleOnPressBadges(45)}
          handleOnLongPress={() =>
            handleOnLongPressBadges(45, plateNumbers.fortyFive)
          }
        />

        {thirtyFive && (
          <PlateBadge
            text={'35 LB'}
            number={plateNumbers.thirtyFive || 0}
            bg={'#FCF55F'}
            handleOnPress={() => handleOnPressBadges(35)}
            handleOnLongPress={() => handleOnLongPress(35)}
          />
        )}

        <PlateBadge
          text={'25 LB'}
          number={plateNumbers.twentyFive || 0}
          bg={'#009E60'}
          handleOnPress={() => handleOnPressBadges(25)}
          handleOnLongPress={() => handleOnLongPressBadges(25)}
        />

        <PlateBadge
          text={'10 LB'}
          number={plateNumbers.ten || 0}
          bg={'#FAF9F6'}
          handleOnPress={() => handleOnPressBadges(10)}
          handleOnLongPress={() => handleOnLongPressBadges(10)}
        />

        <PlateBadge
          text={'5 LB'}
          number={plateNumbers.five || 0}
          bg={'#880808'}
          handleOnPress={() => handleOnPressBadges(5)}
          handleOnLongPress={() => handleOnLongPressBadges(5)}
        />

        <PlateBadge
          text={'2.5 LB'}
          number={plateNumbers.twoPointFive || 0}
          bg={'black'}
          handleOnPress={() => handleOnPressBadges(2.5)}
          handleOnLongPress={() => handleOnLongPressBadges(2.5)}
        />
      </View>
      <Text style={styles.mode}>Mode: Add by plate</Text>
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
