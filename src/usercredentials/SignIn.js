import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Modal, Alert} from 'react-native';
import {COLORS, icons} from '../../constant';
import {InputFeild, TextButton} from '../../reusableComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const [countryModal, setCountryModal] = useState(false);
  const [mobile, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showconfirm, setShowconfirm] = useState(false);
  const [countryCode, setCountryCode] = useState(''); 

  const countryList = [
    {name: 'India', code: 'IN', dialCode: '+91'},
    {name: 'United States', code: 'US', dialCode: '+1'},
    {name: 'United Kingdom', code: 'GB', dialCode: '+44'},
  ]; // Add more countries here];

  // Mobile Number Validation
  const handleNumberChange = value => {
    // Accept only numbers
    if (/^\d{0,10}$/.test(value) || value === '') {
      setNumber(value);
    }
  };

  const renderCountryCodeModal = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={countryModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.transparentBlack1,
          }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              padding: 20,
              borderRadius: 10,
              width: '80%',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontWeight: '700',
                fontSize: 18,
                color: '#000',
                marginBottom: 20,
              }}>
              Select a Country
            </Text>
            {countryList.map(country => (
              <TouchableOpacity
                key={country.code}
                onPress={() => {
                  // Set the selected country code
                  setCountryCode(country.dialCode);
                  setCountryModal(false);
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontWeight: '400',
                    fontSize: 16,
                    color: '#000',
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.lightGray,
                  }}>
                  {`${country.name} (${country.dialCode})`}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    );
  };
 
  const handleLogin = async () => {
      if (mobile == '') {
      Alert.alert('Error', 'Mobile number is required.');
      return;
      }
      else if (mobile.length < 10) {
      Alert.alert('Error', 'Enter a valid mobile number.');  
      }
      else if (password == '') {
        Alert.alert('Error', 'Password is required.');
        return;
        } 
      else if (password.length < 6) {
        Alert.alert('Error', 'Minimum 6 character is allowed.');  
        }
      else {
        loginFunction();
      }
  }

  const loginFunction = () => {
    let url = `https://storyfy.hirectjob.in/api/login-user`
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
      mobile: mobile,
      password: password,
      }),
      headers: headers,
    })
    .then((Response) => Response.json())
    .then((Response) => {
      console.log('Login response ',Response)
      if(Response.status_code == 200){
        console.log('response status',Response)
        Alert.alert('Login successfull')
        navigation.navigate('HomeScreen',{dataofuser:Response})
      }
      else if(Response.status_code == 404) {
        Alert.alert('Login failed. Please try again.')
        console.log('response status',Response)
      }
    })
    .catch ((error) => {
          console.error(error);
          Alert.alert('An error occurred. Please try again.');
          console.log('error found',Response)
        })
  }


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
        justifyContent: 'space-between',
      }}>
      <View>
        <Text
          style={{
            marginTop: 84,
            fontFamily: 'Poppins-Bold',
            fontWeight: '700',
            fontSize: 25,
            lineHeight: 32,
            color: '#01031A',
          }}>
          Welcome to our story {'\n'}world
        </Text>
        <View
          style={{
            marginTop: 38,
          }}>
          <InputFeild
            placeholder="88"
            lable="Mobile Number"
            icon={icons.call}
            value={mobile}
            onChange={handleNumberChange}
            keyboardType='numeric'
            countryCodeComponent={
              <TouchableOpacity
                style={{
                  marginHorizontal: 12.67,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => setCountryModal(true)}>
                <Text
                  style={{
                    fontFamily: 'Rokkitt-Regular',
                    fontWeight: '400',
                    fontSize: 14,
                    lineHeight: 15.92,
                    color: '#57BBF3',
                  }}>
                  {countryCode}
                </Text>

                <Image
                  source={icons.arrow_down}
                  style={{tintColor: '#02141F', marginLeft: 6.54}}
                />
              </TouchableOpacity>
            }
          />
          <InputFeild
            placeholder="*******"
            lable="Password"
            value={password}
            onChange={setPassword}
            secureTextEntry={!showconfirm}
            icon={icons.lock}
            appendComponent={
            <TouchableOpacity onPress={() => setShowconfirm(!showconfirm)}>
              {showconfirm ? (
                    <Image source={icons.eye_slash} />
                  ) : (
                    <Image source={icons.eye_slash} />
                  )}
            </TouchableOpacity>}
          />
          <View style={{marginTop: 50}}>
            <TextButton title="Continue" onPress={handleLogin} />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Rokkitt-Regular',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 28,
            color: '#7D7D7D',
          }}>
          Want to create an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={{
              marginLeft: 5,
              textTransform: 'uppercase',
              fontFamily: 'Poppins-Regular',
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 28,
              color: '#57BBF3',
              marginTop: 2,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {renderCountryCodeModal()}
    </View>
  );
};

export default SignIn;
