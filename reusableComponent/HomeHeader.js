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

const {width, height} = Dimensions.get('window');

const HomeHeader = ({
  headerImage,
  homeIcon,
  avtar,
  greeting,
  description,
  onPress,
}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={headerImage}
        style={{height: 180, justifyContent: 'flex-start'}}
      />
      <View style={{flexDirection: 'row', position: 'absolute'}}>
        <TouchableOpacity onPress={onPress}>
          <Image source={homeIcon} style={styles.homeIcon} />
        </TouchableOpacity>
        <View style={{flexDirection: 'column', marginTop: 60, marginLeft: 20}}>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: '#fff',
              fontFamily: 'Poppins-Bold',
            }}>
            {greeting}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#fff',
              fontFamily: 'Rokkitt-Regular',
            }}>
            {description}
          </Text>
        </View>
        <Image source={avtar} style={styles.avtar} />
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  homeIcon: {
    marginTop: 70,
    marginLeft: 20,
  },
  avtar: {
    marginTop: 60,
    marginLeft: 90,
  },
});
