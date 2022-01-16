import React from 'react';
import { Alert, Modal, Text, Pressable, View } from 'react-native';
import { Button } from 'native-base';
import { useHomeContext } from '../context/HomeProvider';
import { useThemeContext } from '../theme/ThemeProvider';
import EStyleSheet from 'react-native-extended-stylesheet';
import SavedWeights from './SavedWeights';

const SavedWeightsModal = () => {
  const { modalVisible, setModalVisible, savedWeight } = useHomeContext();
  const colorScheme = useThemeContext();
  const styles = getStyles(colorScheme);

  //When modal is not visible it still takes space
  //So only render this component when modal is set to visible
  if (!modalVisible) return null;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Saved Weights!</Text>
            <Text style={styles.subTitleText}>Count: {savedWeight.length}</Text>
            <SavedWeights />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SavedWeightsModal;

const getStyles = (colorScheme) =>
  EStyleSheet.create({
    centeredView: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      height: 'auto',
      marginTop: '50%',
      backgroundColor: colorScheme.backgroundSecondary,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
      position: 'absolute',
      bottom: '5%',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '500',
      color: colorScheme.textPrimary,
    },
    subTitleText: {
      color: colorScheme.textPrimary,
    },
  });
