import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import ScreenWrapper from '../../reusableComponent/ScreenWrapper';
import {icons, images} from '../../constant';
import {TextButton} from '../../reusableComponent';

const AboutUs = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    aboutFunction();
  });

  const aboutFunction = () => {
    let url = `https://storyfy.hirectjob.in/api/get-about-us`;
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(Response => Response.json())
      .then(Response => {
        console.log('Login response ', Response);
        if (Response.status_code == 200) {
          console.log('response status', Response.category_data);
          setData(Response.category_data);
        } else if (Response.status_code == 404) {
          console.log('response status', Response);
        }
      })
      .catch(error => {
        console.error(error);
        console.log('error found', Response);
      });
  };

  return (
    <ScrollView>
      <ScreenWrapper
        headerImage={images.head}
        homeIcon={icons.arrowLeft}
        avtar={images.avtar}
        heading={'About Us'}
        navigation={navigation}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
      {data.map((item, index) => {
        return (
          <View style={styles.mainContainer}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                //source={item.logo}
                source={images.about}
                //style={{height:100,width:100}}
                //resizeMode='cover'
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.heading}>Storyfi</Text>
              <Text style={styles.version}> Version {item.version}</Text>
              <Text style={styles.contend}>{item.description}</Text>

              <Text style={styles.link}>{item.url}</Text>

              <Text style={styles.link}>{item.help}</Text>
            </View>

            <View style={{marginHorizontal: 21, marginTop: 30}}>
              <TextButton
                title="Review Us" //onPress={() => navigation.navigate('AboutUs')}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
  },
  heading: {
    fontSize: 40,
    fontWeight: 400,
    lineHeight: 40,
    color: '#000',
    textAlign: 'center',
  },
  version: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 20,
    color: '#26B3E2',
    marginTop: 40,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contend: {
    margin: 18,
    lineHeight: 25,
    fontWeight: 400,
    color: '#000',
    textAlign: 'center',
  },
  link: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'Rokkit-Regular',
    lineHeight: 23,
    color: '#26B3E2',
    marginTop: 20,
  },
});
