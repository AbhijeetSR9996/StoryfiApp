import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  useColorScheme,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../reusableComponent/ScreenWrapper';
import {icons, images} from '../constant';
//import AboutInputField from '../../reusableComponent/AboutInputField';
import {TextButton} from '../reusableComponent';
import {ScrollView} from 'react-native-gesture-handler';

const ReviewUs = ({navigation, route}) => {
  const {param1, param2, param3, param4, param5, param6} = route.params;
  console.log('data from contact us', param1);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [help, setHelp] = useState('');

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <ScreenWrapper
          headerImage={images.head}
          homeIcon={icons.arrowLeft}
          avtar={images.avtar}
          heading={'Review Us'}
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
                value={param1}
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
                value={param2}
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
                value={param3}
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
                value={param4}
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
                value={param5}
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
                value={param6}
              />
            </View>
          </View>

          <View style={{marginHorizontal: 20, marginTop: 30, marginBottom: 30}}>
            <TextButton
              title="Confirm"
              onPress={() => {
                navigation.goBack(),
                  Alert.alert('Data saved', 'Team will contact you soon.');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewUs;

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
