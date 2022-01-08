import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Btn } from '../components/Btn';
import { useHomeContext } from '../context/HomeProvider';

const SavedWeights = () => {
  const { savedWeight, useSavedWeight, removeWeight } = useHomeContext();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 110 }}>
        {savedWeight &&
          savedWeight.map((w, idx) => (
            <Btn
              key={idx}
              text={w}
              onPress={() => useSavedWeight(w)}
              onLongPress={() => removeWeight(w)}
              textColor='#fff'
              bgColor='#0891b2'
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default SavedWeights;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 300,
  },
});
