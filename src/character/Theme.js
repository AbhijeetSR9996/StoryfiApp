import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ScreenWrapper from '../../reusableComponent/ScreenWrapper';
import {TextButton} from '../../reusableComponent';
import {icons, images} from '../../constant';
import TransButton from '../../reusableComponent/TransButton';

const Theme = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);

  const [themeData, setThemeData] = useState([
    {
      id: 1,
      image: require('../../assets/images/children1.png'),
      heading: 'Children Anxiety',
    },
    {
      id: 2,
      image: require('../../assets/images/Anger.png'),
      heading: 'Anger',
    },
    {
      id: 3,
      image: require('../../assets/images/loss.png'),
      heading: 'Loss of a loved one',
    },
    {
      id: 4,
      image: require('../../assets/images/children2.png'),
      heading: 'Children Anxiety',
    },
    {
      id: 5,
      image: require('../../assets/images/Anger2.png'),
      heading: 'Anger',
    },
    {
      id: 6,
      image: require('../../assets/images/loss2.png'),
      heading: 'Loss of a loved one',
    },
    {
      id: 7,
      image: require('../../assets/images/children3.png'),
      heading: 'Children Anxiety',
    },
    {
      id: 8,
      image: require('../../assets/images/Anger3.png'),
      heading: 'Anger',
    },
    {
      id: 9,
      image: require('../../assets/images/loss3.png'),
      heading: 'Loss of a loved one',
    },
  ]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const handlePress = index => {
    setSelectedItemIndex(index);
  };

  useEffect(() => {
    themeFunction();
  });

  const themeFunction = () => {
    let url = `https://storyfy.hirectjob.in/api/get-theme`;
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
        console.log('response ', Response);
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

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handlePress(index)}
        style={[
          styles.itemContainer,
          selectedItemIndex === index && {
            backgroundColor: 'orange',
          },
        ]}>
        <Image source={{uri: item.theme_image}} style={styles.image} />
        <Text
          style={[
            styles.heading,
            selectedItemIndex === index && {color: 'white'},
          ]}>
          {item.theme_name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={{backgroundColor: '#fff'}}
      showsHorizontalScrollIndicator={false}>
      <ScreenWrapper
        headerImage={images.head}
        homeIcon={icons.arrowLeft}
        avtar={images.avtar}
        heading={'Theme'}
        navigation={navigation}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />

      <View style={{marginTop: 20}}>
        <ImageBackground
          source={images.costumTheme}
          style={{height: 140}}
          resizeMode="contain">
          <View
            style={{
              flexDirection: 'column',
              marginTop: 30,
              marginHorizontal: 40,
              justifyContent: 'space-between',
            }}>
            <Image source={icons.linePlace} style={{width: '100%'}} />
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                marginTop: 10,
                width: '100%',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}>
              <View>
                <Image source={images.charVisible} />
                <Text style={styles.text}>Character</Text>
              </View>
              <View>
                <Image source={images.charTheme} />
                <Text style={styles.text}>Place</Text>
              </View>
              <View>
                <Image source={images.charPlace} />
                <Text style={styles.text}>Theme</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View>
        <View style={styles.headText}>
          <Text style={styles.content}>
            "Please select a common childhood challenge that you child may be
            facing. If your child is facing something else select the Custom
            Theme button"
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 10,
            alignItems: 'center',
          }}>
          <FlatList
            //data={themeData}
            data={data}
            numColumns={3}
            renderItem={renderItem}
            //keyExtractor={item => `${item.id}`}
          />
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <TransButton
          title={'Custom Theme'}
          onPress={() => navigation.navigate('customTheme')}
        />
        <TextButton
          title={'Generate story'}
          onPress={() => navigation.navigate('WelcomeScreen')}
        />
      </View>
    </ScrollView>
  );
};

export default Theme;

const styles = StyleSheet.create({
  headText: {
    backgroundColor: 'rgba(253, 178, 1, 0.2);',
    borderRadius: 10,
    width: '90%',
    paddingHorizontal: 20,
    marginLeft: 20,
  },
  content: {
    padding: 10,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 400,
    fontFamily: 'Poppins-Regular',
    lineHeight: 18,
    letterSpacing: 0.5,
    color: '#01031A',
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    letterSpacing: 0.05,
    color: '#ffffff',
    marginTop: 5,
  },
  flatListContainer: {
    // marginHorizontal: 20,
    marginTop: 10,
  },
  itemContainer: {
    backgroundColor: '#fff',
    margin: 5,
    width: 101,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 10,
  },
  heading: {
    fontSize: 12,
    fontWeight: 700,
    fontFamily: 'Poppins-Regular',
    lineHeight: 18,
    letterSpacing: 0.05,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
    marginHorizontal: 10,
    marginTop: 5,
  },
  image: {
    margin: 10,
    alignSelf: 'center',
    height: 50,
    width: 50,
  },
});
