import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SideModal from '../src/drawer/SideModal';

const ScreenWrapper = ({
  headerImage,
  homeIcon,
  avtar,
  heading,
  navigation,
  setIsModalVisible,
  isModalVisible,
}) => {
  const handleAvtarPress = () => {
    setIsModalVisible(true);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={headerImage}
        style={{height: 180, justifyContent: 'flex-start'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={homeIcon} style={styles.homeIcon} />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 70,
              fontSize: 20,
              fontWeight: 700,
              color: '#fff',
              letterSpacing: 0.05,
              fontFamily: 'Poppins-Bold',
              lineHeight: 30,
            }}>
            {heading}
          </Text>
          <TouchableOpacity onPress={handleAvtarPress}>
            <Image source={avtar} style={styles.avtar} />
          </TouchableOpacity>
        </View>
        <SideModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  homeIcon: {
    marginTop: 70,
    marginLeft: 19,
  },
  avtar: {
    top: 40,
    right: 20,
  },
});
