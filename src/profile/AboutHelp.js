import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  useColorScheme,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../reusableComponent/ScreenWrapper';
import {icons, images} from '../../constant';
//import AboutInputField from '../../reusableComponent/AboutInputField';
import {TextButton} from '../../reusableComponent';
import {ScrollView} from 'react-native-gesture-handler';
//import { useNavigation } from '@react-navigation/native';

const AboutHelp = ({navigation, route}) => {
  const {userdata} = route.params;
  console.log('userdata from homescreen to contact us', userdata.userdata);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [help, setHelp] = useState('');
  const [viewHeight, setViewHeight] = useState(63);
  const [isPressed, setIsPressed] = useState(false);

  const changeViewHeight = () => {
    const newHeight = viewHeight === 63 ? 73 : 63;
    setViewHeight(newHeight);
  };

  const handlePress = () => {
    changeViewHeight();
    setIsPressed(!isPressed);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <ScreenWrapper
          headerImage={images.head}
          homeIcon={icons.arrowLeft}
          avtar={images.avtar}
          heading={'Contact Us'}
          navigation={navigation}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />
        <View style={{marginTop: 50}}>
          <View>
            <Text style={styles.label}>Contact reason</Text>
            <View
              style={{
                backgroundColor: '#F0F0F0',
                borderRadius: 10,
                height: 63,
                marginHorizontal: 20,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  fontSize: 18,
                  lineHeight: 22,
                  fontWeight: '600',
                  fontFamily: 'Inter-Regular',
                  letterSpacing: 0.5,
                  color: '#000000',
                  marginHorizontal: 20,
                }}
                placeholderTextColor={'#000000'}
                editable={true}
                value={contact}
                onChangeText={setContact}
              />
            </View>
          </View>

          <View>
            <Text style={styles.label}>Subject</Text>
            <View
              style={{
                backgroundColor: '#F0F0F0',
                borderRadius: 10,
                height: 63,
                marginHorizontal: 20,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  fontSize: 18,
                  lineHeight: 22,
                  fontWeight: '600',
                  fontFamily: 'Inter-Regular',
                  letterSpacing: 0.5,
                  color: '#000000',
                  marginHorizontal: 20,
                }}
                placeholderTextColor={'#000000'}
                editable={true}
                value={subject}
                onChangeText={setSubject}
              />
            </View>
          </View>

          <View>
            <Text style={styles.label}>Your email address</Text>
            <View
              style={{
                backgroundColor: '#F0F0F0',
                borderRadius: 10,
                height: 63,
                marginHorizontal: 20,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  fontSize: 18,
                  lineHeight: 22,
                  fontWeight: '600',
                  fontFamily: 'Inter-Regular',
                  letterSpacing: 0.5,
                  color: '#000000',
                  marginHorizontal: 20,
                }}
                placeholderTextColor={'#000000'}
                editable={true}
                value={userdata.userdata.user_data.email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          <View>
            <Text style={styles.label}>Your name</Text>
            <View
              style={{
                backgroundColor: '#F0F0F0',
                borderRadius: 10,
                height: 63,
                marginHorizontal: 20,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  fontSize: 18,
                  lineHeight: 22,
                  fontWeight: '600',
                  fontFamily: 'Inter-Regular',
                  letterSpacing: 0.5,
                  color: '#000000',
                  marginHorizontal: 20,
                }}
                placeholderTextColor={'#000000'}
                editable={true}
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>

          <View>
            <Text style={styles.label}>Your message</Text>
            <View
              style={{
                backgroundColor: '#F0F0F0',
                borderRadius: 10,
                height: 63,
                marginHorizontal: 20,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  fontSize: 18,
                  lineHeight: 22,
                  fontWeight: '600',
                  fontFamily: 'Inter-Regular',
                  letterSpacing: 0.5,
                  color: '#000000',
                  marginHorizontal: 20,
                }}
                placeholderTextColor={'#000000'}
                editable={true}
                value={message}
                onChangeText={setMessage}
                multiline={true}
                numberOfLines={6}
                maxLength={40}
              />
            </View>
          </View>

          <View>
            <Text style={styles.label}>Your want to talk about</Text>
            <View
              style={{
                backgroundColor: '#F0F0F0',
                borderRadius: 10,
                //height: 63,
                height: viewHeight,
                marginHorizontal: 20,
              }}>
              <TouchableOpacity
                style={{marginLeft: 325, bottom: 20}}
                onPress={handlePress}>
                <Text style={{left: 5}}>{isPressed ? '➖' : '➕'}</Text>
              </TouchableOpacity>
              <TextInput
                style={{
                  flex: 1,
                  fontSize: 18,
                  lineHeight: 22,
                  fontWeight: '600',
                  fontFamily: 'Inter-Regular',
                  letterSpacing: 0.5,
                  color: '#000000',
                  marginHorizontal: 20,
                }}
                placeholderTextColor={'#000000'}
                editable={true}
                value={help}
                onChangeText={setHelp}
              />
            </View>
          </View>

          <View style={{marginHorizontal: 20, marginTop: 30, marginBottom: 30}}>
            <TextButton
              title="Review Us"
              onPress={() =>
                navigation.navigate('ReviewUs', {
                  param1: contact,
                  param2: subject,
                  param3: name,
                  param4: userdata.userdata.user_data.email,
                  param5: message,
                  param6: help,
                })
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutHelp;

const styles = StyleSheet.create({
  label: {
    color: '#01031A',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 18,
    letterSpacing: 1,
    marginLeft: 20,
    marginTop: 20,
  },
});
