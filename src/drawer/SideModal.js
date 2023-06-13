import React from 'react';
import {Modal, StyleSheet, View, TouchableOpacity} from 'react-native';
import CustomDrawerContent from './CustomDrawerContend';

const SideModal = ({visible, children, onClose, onPress,data}) => {

  //const {data} = route.params;
  console.log("userdata from homescreen",data);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContainer}>
          <CustomDrawerContent userdata={data}/>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    position: 'absolute',
    top: 30,
    right: 0,
    width: '70%',
    height: '90%',
    transform: [{rotate: '-4.22deg'}],
    marginRight: -30,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(87, 187, 243, 0.5)',
  },
});

export default SideModal;
