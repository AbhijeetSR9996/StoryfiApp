import {StyleSheet, Text, View, TouchableOpacity, Switch} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../reusableComponent/ScreenWrapper';
import {icons, images} from '../../constant';
import Divider from '../../reusableComponent/Divider';
import {TextButton} from '../../reusableComponent';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
// import SettingsData from '../../reusableComponent/SettingsData';

const Settings = ({navigation,route}) => {

  const {userdata} = route.params;
  console.log("userdata from homescreen to settings",userdata.userdata);

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
    <ScrollView>
      <ScreenWrapper
        headerImage={images.head}
        homeIcon={icons.arrowLeft}
        avtar={images.avtar}
        heading={'Setting'}
        navigation={navigation}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />

      <View style={{marginTop: 30}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.heading}>Subscription</Text>
          <TouchableOpacity onPress={() => navigation.navigate('subscription')}>
            <LinearGradient
              colors={['#F68C7D', '#E82005']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.button}>
              <Text style={styles.text}>Subscribe</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={styles.heading}>Account</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 600,
              fontFamily: 'Inter-Regular',
              lineHeight: 19,
              marginTop: 20,
              marginRight: 20,
              color: '#FDB406',
            }}>
            {/* storifi@gmail.com */}
            {userdata.userdata.user_data.email}
          </Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={styles.heading}>Sound</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#079516' : 'red'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}], marginRight: 30}}
          />
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={styles.heading}>System Language</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 600,
              fontFamily: 'Inter-Regular',
              lineHeight: 19,
              marginTop: 20,
              marginRight: 20,
              color: '#000',
            }}>
            English
          </Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={styles.heading}>Theme</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 600,
              fontFamily: 'Inter-Regular',
              lineHeight: 19,
              marginTop: 20,
              marginRight: 20,
              color: '#000',
            }}></Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={styles.heading}>Delete Story</Text>
          <TouchableOpacity>
            <LinearGradient
              colors={['#FFCF5E', '#FDB201']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.button}>
              <Text style={styles.text}>Delete</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20}}>
          <TextButton title={'FAQ'} onPress={() => {
                navigation.navigate('Faq')
              }} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 700,
    color: '#000',
    marginLeft: 20,
    marginTop: 20,
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.5,
    lineHeight: 22,
  },
  button: {
    width: 120,
    marginRight: 20,
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 600,
    textAlign: 'center',
    paddingTop: 10,
  },
});
