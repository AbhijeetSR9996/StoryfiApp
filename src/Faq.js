import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  useColorScheme,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../reusableComponent/ScreenWrapper';
import {icons, images} from '../constant';
//import AboutInputField from '../../reusableComponent/AboutInputField';
import {TextButton} from '../reusableComponent';
import {ScrollView} from 'react-native-gesture-handler';

const Faq = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [viewHeight, setViewHeight] = useState(20);
  const [viewHeightt, setViewHeightt] = useState(20);
  const [viewHeighttt, setViewHeighttt] = useState(20);
  const [viewHeightttt, setViewHeightttt] = useState(20);
  
  const [isPressed,setIsPressed] = useState(false);
  const [isPressedd,setIsPressedd] = useState(false);
  const [isPresseddd,setIsPresseddd] = useState(false);
  const [isPressedddd,setIsPressedddd] = useState(false);

  const changeViewHeight = () => {
    const newHeight = viewHeight === 20 ? 53 : 20; 
    setViewHeight(newHeight);
  };
  const changeViewHeightt = () => {
    const newHeightt = viewHeightt === 20 ? 53 : 20; 
    setViewHeightt(newHeightt);
  };
  const changeViewHeighttt = () => {
    const newHeighttt = viewHeighttt === 20 ? 53 : 20; 
    setViewHeighttt(newHeighttt);
  };
  const changeViewHeightttt = () => {
    const newHeightttt = viewHeightttt === 20 ? 73 : 20; 
    setViewHeightttt(newHeightttt);
  };

  const handlePress = () => {
    changeViewHeight();
    setIsPressed(!isPressed);
  }

  const handlePresss = () => {
    changeViewHeightt();
    setIsPressedd(!isPressedd);
  }

  const handlePressss = () => {
    changeViewHeighttt();
    setIsPresseddd(!isPresseddd);
  }

  const handlePresssss = () => {
    changeViewHeightttt();
    setIsPressedddd(!isPressedddd);
  }

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <ScreenWrapper
          headerImage={images.head}
          homeIcon={icons.arrowLeft}
          avtar={images.avtar}
          heading={'FAQ'}
          navigation={navigation}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />
        <View style={{marginTop: 20}}>
          <View>
            <Text style={styles.label}>
              What is the purpose of Storyfi application?
            </Text>
            <TouchableOpacity
              style={{marginLeft: 345, bottom: 25}}
              onPress={handlePress}>
              <Text style={{left:5}}>{isPressed? '➖':'➕'}</Text>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F0F0F0',
                borderRadius: 10,
                height: viewHeight,
                marginHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -15
              }}>
              <Text
                style={[
                  styles.label,
                  {marginBottom: 10, marginTop: 7, marginRight: 20},
                ]}>
                Storyfi application is introduced for kids of age 3-13 in order
                to tell various educational stories.
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.label}>
              On which platforms Storyfi application works on?
            </Text>
            <TouchableOpacity
              style={{marginLeft: 345, bottom: 25}}
              onPress={handlePresss}>
              <Text style={{left:5}}>{isPressed? '➖':'➕'}</Text>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F0F0F0',
                borderRadius: 10,
                height: viewHeightt,
                marginHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -15
              }}>
              <Text
                style={[
                  styles.label,
                  {marginBottom: 10, marginTop: 7, marginRight: 20},
                ]}>
                Storyfi application is running on both Android and IOS platforms.
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.label}>
              Any subscription plans for Storyfi application?
            </Text>
            <TouchableOpacity
              style={{marginLeft: 345, bottom: 25}}
              onPress={handlePressss}>
              <Text style={{left:5}}>{isPressed? '➖':'➕'}</Text>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F0F0F0',
                borderRadius: 10,
                height: viewHeighttt,
                marginHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -15
              }}>
              <Text
                style={[
                  styles.label,
                  {marginBottom: 10, marginTop: 7, marginRight: 20},
                ]}>
                Storyfi application is providing two subscription plans - monthly and free ad based version.
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.label}>
              Is Storyfi application have any mature content?
            </Text>
            <TouchableOpacity
              style={{marginLeft: 345, bottom: 25}}
              onPress={handlePresssss}>
              <Text style={{left:5}}>{isPressed? '➖':'➕'}</Text>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F0F0F0',
                borderRadius: 10,
                height: viewHeightttt,
                marginHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -15
              }}>
              <Text
                style={[
                  styles.label,
                  {marginBottom: 10, marginTop: 7, marginRight: 20},
                ]}>
                No, Storyfi application is intended to be designed in a way that provides information to kids in a unique format.
              </Text>
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

export default Faq;

const styles = StyleSheet.create({
  label: {
    color: '#01031A',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 18,
    letterSpacing: 1,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 5,
  },
});
