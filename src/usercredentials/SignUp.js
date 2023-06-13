import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
  Modal
} from 'react-native';
import {COLORS, icons, images} from '../../constant';
import {InputFeild, TextButton} from '../../reusableComponent';

const SignUp = ({navigation}) => {
  const [countryModal, setCountryModal] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [mobile, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showconfirm, setShowconfirm] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showconfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // added state variable

  const countryList = [
    {name: 'India', code: 'IN', dialCode: '+91'},
    {name: 'United States', code: 'US', dialCode: '+1'},
    {name: 'United Kingdom', code: 'GB', dialCode: '+44'},
  ]; // Add more countries here];

  // Password Validation
  const handleConfirmPasswordChange = value => {
    setConfirmPassword(value);
    setPasswordsMatch(value === password);
  };

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

  const strongRegex = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  );

  const handleSignUp = async () => {
    if (mobile == '') {
    Alert.alert('Error', 'Mobile number is required.');
    return;
    }
    else if (mobile.length < 10) {
    Alert.alert('Error', 'Enter a valid mobile number.');  
    }
    else if (email == '') {
      Alert.alert('Error', 'Email is required.');
      return;
    }
    else if (!strongRegex.test(email)) {
      Alert.alert('Error', 'Enter a valid email.');
      return;
    }
    else if (password == '') {
      Alert.alert('Error', 'Password is required.');
      return;
    } 
    else if (password.length < 6) {
      Alert.alert('Error', 'Minimum 6 character is allowed.');  
    }
    else if (confirmPassword == '') {
      Alert.alert('Error', 'Confirm Password is required.');
      return;
    }
    else if (confirmPassword.length < 6) {
      Alert.alert('Error', 'Minimum 6 character is allowed.');  
    } 
    else if (!passwordsMatch) {
      Alert.alert("Passwords do not match!");

      return;
    }
    else {
      SignUpFunction();
    }
}

  const SignUpFunction = () => {
    let url = `https://storyfy.hirectjob.in/api/user-register`;
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        mobile: mobile,
        email: email,
        password: password,
      }),
      headers: headers,
    })
      .then(Response => Response.json())
      .then(Response => {
        setIsLoading(false);
        console.log('Signup Response', Response);
        if (Response.status_code == 200) {
          console.log('response status', Response);
          Alert.alert('User Created Successfully');
          navigation.navigate('HomeScreen', {signupdataofuser: Response});
        } else if (Response.status_code == 404) {
          Alert.alert('User already exist');
          console.log('response status', Response);
        }
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Error', 'Something went wrong. Please try again later.');
        setIsLoading(false); // stop the loader
      });
  };

  return (
    <ScrollView style={{backgroundColor: '#F5F5F5'}}>
      <View
        style={{
          flex: 1,
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
            Create Account
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
              placeholder="*********"
              title="Email"
              lable="Email ID"
              value={email}
              onChange={setEmail}
              icon={icons.sms}
              code={true}
            />
            <InputFeild
              placeholder="*******"
              title="Password"
              lable="Password"
              value={password}
              onChange={setPassword}
              secureTextEntry={!showconfirm}
              appendComponent={
                <TouchableOpacity onPress={() => setShowconfirm(!showconfirm)}>
                  {showconfirm ? (
                    <Image source={icons.eye_slash} />
                  ) : (
                    <Image source={icons.eye_slash} />
                  )}
                </TouchableOpacity>
              }
              icon={icons.lock}
            />
            <InputFeild
              placeholder="*******"
              title="New Password"
              lable="New Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              secureTextEntry={!showconfirmPassword}
              appendComponent={
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showconfirmPassword)}>
                  {showconfirmPassword ? (
                    <Image source={icons.eye_slash} />
                  ) : (
                    <Image source={icons.eye_slash} />
                  )}
                </TouchableOpacity>
              }
              icon={icons.lock}
            />
            {/* {passwordsMatch ? ( <Text>Passwords match!</Text> ) : ''} */}
            <View style={{marginTop: 50}}>
              <TextButton title="Continue" onPress={handleSignUp} />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 50,
          }}>
          <Text
            style={{
              fontFamily: 'Rokkitt-Regular',
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 28,
              color: '#7D7D7D',
            }}>
            If you already have an account
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text
              style={{
                marginLeft: 5,
                textTransform: 'uppercase',
                fontFamily: 'Poppins-Regular',
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 28,
                color: '#57BBF3',
                marginTop: 3,
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        {renderCountryCodeModal()}
      </View>
    </ScrollView>
  );
};

export default SignUp;
