import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import React, {useState,useEffect} from 'react';
import {icons} from '../../constant';
import LinearGradient from 'react-native-linear-gradient';
import {TextButton} from '../../reusableComponent';

const Subscription = ({navigation}) => {
  const [isActive, setIsActive] = useState(false);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   aboutFunction();
  // });

  // const aboutFunction = () => {
  //   let url = `https://storyfy.hirectjob.in/api/get-subscription-plan`;
  //   var headers = {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   };
  //   fetch(url, {
  //     method: 'GET',
  //     headers: headers,
  //   })
  //     .then(Response => Response.json())
  //     .then(Response => {
  //       console.log('Login response ', Response);
  //       if (Response.status_code == 200) {
  //         console.log('response status', Response.data);
  //         setData(Response.category_data);
  //       } else if (Response.status_code == 404) {
  //         console.log('response status', Response);
  //       }
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       console.log('error found', Response);
  //     });
  // };

  const btnClick = () => {
    setIsActive(current => !current);
  };

  const gradientColors = ['#37C3F2', '#0C98C8'];
  const gradientColorss = ['#FFFFFF', '#FFFFFF'];

  return (
    <View style={styles.modalContent}>
      <View style={styles.box}>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={styles.heading}>Subscribe for Premium Features</Text>
          <Text style={styles.para}>
            {' '}
            Protect up to 10 devices with all features
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginHorizontal: 10,
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <TouchableOpacity onPress={btnClick}>
            <LinearGradient
              colors={isActive ? gradientColors : gradientColorss}
              style={{
                alignItems: 'center',
                borderRadius: 13,
                width: 141.15,
                //height: 100,
                height: 98.44,
                borderWidth: 1,
                borderColor: '#F5F5F5',
              }}>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 14.32,
                  fontWeight: 600,
                  fontFamily: 'Poppins-Bold',
                  color: isActive ? '#fff' : '#000',
                }}>
                Annual
              </Text>
              <Text
                style={{
                  // marginTop: 10,
                  fontSize: 16.32,
                  fontWeight: 600,
                  fontFamily: 'Poppins-Bold',
                  color: isActive ? '#fff' : '#000',
                }}>
                $490.00
              </Text>
              <Text
                style={{
                  // marginTop: 10,
                  fontSize: 12.32,
                  fontWeight: 400,
                  fontFamily: 'Poppins-Regular',
                  color: isActive ? '#fff' : '#000',
                }}>
                $49.00/month
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.container}>
            <Text style={styles.text}>50% off</Text>
          </View>

          <TouchableOpacity onPress={btnClick}>
            <LinearGradient
              colors={isActive ? gradientColorss : gradientColors}
              style={{
                alignItems: 'center',
                borderRadius: 13,
                width: 141.15,
                height: 98.44,
                borderWidth: 1,
                borderColor: '#F5F5F5',
              }}>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 14.32,
                  fontWeight: 600,
                  fontFamily: 'Poppins-Bold',
                  color: isActive ? '#000' : '#fff',
                }}>
                Monthly
              </Text>
              <Text
                style={{
                  //marginTop: 10,
                  fontSize: 16.32,
                  fontWeight: 600,
                  fontFamily: 'Poppins-Bold',
                  color: isActive ? '#000' : '#fff',
                }}>
                $49.00
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <TextButton
          title={'Select Subscription'}
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('buyNow')}
        />
      </View>
    </View>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: 'rgba(87, 187, 243, 0.5);',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    margin: 10,
    width: 335,
    height: 400,
  },
  heading: {
    fontSize: 17.9,
    fontWeight: 700,
    fontFamily: 'Poppins-Bold',
    lineHeight: 26.85,
    color: '#01031A',
    marginTop: 20,
  },
  para: {
    fontSize: 12.53,
    fontWeight: 500,
    color: '#01031A',
    letterSpacing: 0.4,
    lineHeight: 19,
    fontFamily: 'Poppins-Regular',
  },
  container: {
    backgroundColor: '#F95FAE',
    borderTopLeftRadius: 8.9,
    borderBottomRightRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: 50,
    height: 25,
    position: 'absolute',
  },
  text: {
    color: '#fff',
    fontWeight: 500,
    fontFamily: 'Poopins-Regular',
    fontSize: 8.94,
    lineHeight: 13,
    fontStyle: 'normal',
  },
});
