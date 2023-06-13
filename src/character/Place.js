import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ScreenWrapper from '../../reusableComponent/ScreenWrapper';
import {TextButton} from '../../reusableComponent';
import {icons, images} from '../../constant';
import TransButton from '../../reusableComponent/TransButton';

const Place = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [placeData, setPlaceData] = useState([
    {
      id: 1,
      image: require('../../assets/images/beach.png'),
      heading: 'Beach',
    },
    {
      id: 2,
      image: require('../../assets/images/mountain.png'),
      heading: 'Mountain',
    },
    {
      id: 3,
      image: require('../../assets/images/jungle.png'),
      heading: 'Jungle',
    },
    {
      id: 4,
      image: require('../../assets/images/outerspace.png'),
      heading: 'OuterSpace',
    },
    {
      id: 5,
      image: require('../../assets/images/bigcity.png'),
      heading: 'Big City',
    },
    {
      id: 6,
      image: require('../../assets/images/smalltown.png'),
      heading: 'Big City',
    },
    {
      id: 7,
      image: require('../../assets/images/farm.png'),
      heading: 'The Farm',
    },
    {
      id: 8,
      image: require('../../assets/images/desert.png'),
      heading: 'Desert',
    },
  ]);
  const colors = [
    '#FDD1A2',
    '#F8F2EF',
    '#E6FEF6',
    '#FCEFF0',
    '#F2F8F4',
    '#E6FCFE',
    '#E6FCFE',
    '#FFF9F0',
  ];

  useEffect(() => {
    placeFunction();
  });

  const placeFunction = () => {
    let url = `https://storyfy.hirectjob.in/api/get-place`;
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
    const backgroundColor = colors[index % colors.length];
    return (
      <TouchableOpacity style={[styles.itemContainer, {backgroundColor}]}>
        <Image source={{uri: item.place_image}} style={styles.image} />
        <Text style={styles.heading}>{item.place_name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <ScreenWrapper
        headerImage={images.head}
        homeIcon={icons.arrowLeft}
        avtar={images.avtar}
        heading={'Place'}
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
            <Image source={icons.linetheme} style={{width: '100%'}} />
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

      <View style={styles.headText}>
        <Text style={styles.content}>
          Describe any place you want the story to address if you have anything
          . If not just leave it blank.
        </Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          //data={placeData}
          data={data}
          numColumns={3}
          renderItem={renderItem}
          //keyExtractor={item => `${item.id}`}
        />
      </View>

      <View style={{marginTop: 30}}>
        <TransButton title={'Generate Story'} />
        <TextButton
          title={'Continue Customization'}
          onPress={() => navigation.navigate('theme')}
        />
      </View>
    </ScrollView>
  );
};

export default Place;

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
  itemContainer: {
    backgroundColor: '#fff',
    margin: 5,
    width: 100,
    height: 108,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderRadius: 5,
  },
  image: {
    margin: 10,
    alignSelf: 'center',
    height: 50,
    width: 50,
  },
  heading: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'Inter-Regular',
    lineHeight: 17,
    letterSpacing: 0.05,
    color: '#000000',
    textAlign: 'center',
  },
  flatListContainer: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
});
