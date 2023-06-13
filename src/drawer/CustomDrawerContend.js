import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, Share} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {icons, images} from '../../constant';

const CustomDrawerContent = (userdata) => {
  //const props = {userdata};
  console.log("userdata ",userdata);
  const navigation = useNavigation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check and share our application with your family and friends...',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 20}}>
        <Image source={images.modalProfile} />
        <View style={{flexDirection: 'column', marginLeft: 10}}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 17.32,
              lineHeight: 26,
              letterSpacing: 0.11,
              color: '#000000',
              transform: [{rotate: '-4.22deg'}],
            }}>
            Jhon Nike
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: 12.32,
              lineHeight: 18,
              letterSpacing: 0.11,
              color: '#117BDE',
              transform: [{rotate: '-4.22deg'}],
            }}>
            View Profile
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen',{userdata})}>
        <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 20}}>
          <Image source={icons.profileHome} />
          <Text style={styles.title}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('about')}>
        <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 20}}>
          <Image source={icons.profileAbout} />
          <Text style={styles.title}>About Us</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('aboutHelp',{userdata})}>
        <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 20}}>
          <Image source={icons.profileContact} />
          <Text style={styles.title}>Contact Us</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onShare()}>
        <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 20}}>
          <Image source={icons.profileShare} />
          <Text style={styles.title}>Share</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('setting',{userdata})}>
        <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 20}}>
          <Image source={icons.profileSetting} />
          <Text style={styles.title}>Setting</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('subscription')}>
        <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 20}}>
          <Image source={icons.profileSubs} />
          <Text style={styles.title}>Subscriptions</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 29,
    borderBottomLeftRadius: 29,
  },
  title: {
    fontSize: 13.86,
    fontWeight: 400,
    fontFamily: 'Poppins-Regular',
    marginBottom: 16,
    fontStyle: 'normal',
    letterSpacing: 0.11,
    lineHeight: 21,
    color: 'rgba(0, 0, 0, 0.5)',
    transform: [{rotate: '-4.22deg'}],
    marginLeft:20
  },
});

export default CustomDrawerContent;
