import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../reusableComponent/ScreenWrapper';
import {icons, images} from '../constant';
import TextButton from '../reusableComponent/TextButton';

const StoriesListScreen = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [data, setData] = useState([
    {
      id: 1,
      image: require('../assets/images/StoryTitle1.png'),
      heading: 'Story title 1',
      buttonLabel: 'View Story',
    },
    {
      id: 2,
      image: require('../assets/images/StoryTitle2.png'),
      heading: 'Story title 2 ',
      buttonLabel: 'View Story',
    },
    {
      id: 3,
      image: require('../assets/images/StoryTitle3.png'),
      heading: 'Story title 3',
      buttonLabel: 'View Story',
    },
    {
      id: 4,
      image: require('../assets/images/StoryTitle4.png'),
      heading: 'Story title 4',
      buttonLabel: 'View Story',
    },
  ]);

  const renderItem = ({item, index}) => (
    <View style={[styles.item, index % 2 === 1 && styles.itemSecondColumn]}>
      <Image source={item.image} resizeMode="contain" />
      <Image
        source={require('../assets/logo/option.png')}
        style={{position: 'absolute', right: 2, top: 5}}
      />

      <Text style={styles.heading}>{item.heading}</Text>
      <TouchableOpacity
        style={[
          styles.button,
          activeIndex === item.id ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => {
          setActiveIndex(item.id);
          navigation.navigate('WelcomeScreen');
        }}>
        <Text
          style={[
            styles.buttonText,
            activeIndex === item.id
              ? styles.activeButtonText
              : styles.inactiveButtonText,
          ]}>
          {item.buttonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView>
      <ScreenWrapper
        headerImage={images.head}
        homeIcon={icons.arrowLeft}
        avtar={images.avtar}
        heading={'My Stories'}
        navigation={navigation}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
      <View style={styles.headText}>
        <Text style={styles.content}>Here is your stories</Text>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 20,
          alignItems:'center'
        }}>
        <FlatList
          data={data}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{ justifyContent: 'space-between' }}
        />
      </View>

      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <TextButton
          title="See All"
          color={['#37C3F2', '#0C98C8']}
          onPress={() => navigation.navigate('ViewStory')}
        />
      </View>
    </ScrollView>
  );
};

export default StoriesListScreen;

const styles = StyleSheet.create({
  headText: {
    backgroundColor: 'rgba(253, 178, 1, 0.2);',
    marginTop: 30,
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
    color: '#01031A',
    letterSpacing: 0.5,
    fontFamily: 'Poppins-Regular',
    opacity: 0.75,
  },
  flatListContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#fff',
    height: 230,
    width: 160,
    paddingBottom: 20,
    overflow: 'hidden',
    margin:5
  },
  itemSecondColumn: {
    marginTop: 30,
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#37C3F2',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonText: {
    color: '#37C3F2',
    fontWeight: 700,
  },
  activeButton: {
    backgroundColor: '#37C3F2',
  },
  inactiveButton: {
    backgroundColor: '#fff',
  },
  activeButtonText: {
    color: '#FFF',
  },
  inactiveButtonText: {
    color: '#37C3F2',
  },
  heading: {
    fontSize: 10,
    fontWeight: 400,
    marginTop: 10,
    color: '#000000',
    fontFamily: 'Inter-Regular',
  },
});
