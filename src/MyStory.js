import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {icons, images} from '../constant';
import ScreenWrapper from '../reusableComponent/ScreenWrapper';
import TextButton from '../reusableComponent/TextButton';
import {BlurView} from '@react-native-community/blur';

const MyStory = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [data, setData] = useState([
    {
      id: 1,
      image: require('../assets/images/magicLamp.png'),
      largeImage: require('../assets/images/MagicLampLarge.png'),
      heading: 'The Magic Lamp',
      story:
        'A child finds an old lamp and when they rub it, a genie appears and offers to take them on a magical journey to find a hidden treasure.',
      buttonLabel: 'See Story Details',
    },
    {
      id: 2,
      image: require('../assets/images/Enchanted.png'),
      largeImage: require('../assets/images/MagicLampLarge.png'),
      heading: 'The Enchanted Forest',
      story:
        'A child finds an old lamp and when they rub it, a genie appears and offers to take them on a magical journey to find a hidden treasure.',
      buttonLabel: 'See Story Details',
    },
    {
      id: 3,
      image: require('../assets/images/UnderWater.png'),
      largeImage: require('../assets/images/MagicLampLarge.png'),
      heading: 'The Underwater Kingdom ',
      story:
        'A child finds an old lamp and when they rub it, a genie appears and offers to take them on a magical journey to find a hidden treasure.',
      buttonLabel: 'See Story Details',
    },
    {
      id: 4,
      image: require('../assets/images/Dragons.png'),
      largeImage: require('../assets/images/MagicLampLarge.png'),
      heading: 'The Dragons Hoard',
      story:
        'A child finds an old lamp and when they rub it, a genie appears and offers to take them on a magical journey to find a hidden treasure.',
      buttonLabel: 'See Story Details',
    },
  ]);

  const renderItem = ({item, index}) => (
    <View style={[styles.item, index % 2 === 1 && styles.itemSecondColumn]}>
      <Image source={item.image} resizeMode="contain" />
      <Text style={styles.heading}>{item.heading}</Text>
      <TouchableOpacity
        style={[
          styles.button,
          activeIndex === item.id ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => {
          setActiveIndex(item.id);
          setModalVisible(true);
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
    <ScrollView style={{backgroundColor: '#F5F5F5'}}>
      <ScreenWrapper
        headerImage={images.head}
        homeIcon={icons.arrowLeft}
        avtar={images.avtar}
        heading={'Select a Story Option'}
        navigation={navigation}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />

      <View style={{marginTop: 40}}>
        <FlatList
          data={data}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>

      <View style={{marginHorizontal: 21, marginTop: 30}}>
        <TouchableOpacity onPress={() => navigation.navigate('customizeStory')}>
          <ImageBackground
            source={images.buttonOrange}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 100,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Rokkit-Regular',
                fontSize: 14,
                fontWeight: '700',
                lineHeight: 23.44,
                color: '#fff',
                marginBottom: 25,
                textTransform: 'capitalize',
              }}>
              Continue
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <View>
          <TextButton
            title="Give me new ideas"
            color={['#37C3F2', '#0C98C8']}
            onPress={() => navigation.navigate('MyStory')}
          />
        </View>
      </View>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <BlurView
          style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
          blurType="light"
          blurAmount={10}>
          <View style={styles.modalContent}>
            <View style={styles.box}>
              <Image
                source={data.find(item => item.id === activeIndex)?.largeImage}
              />
              <Text style={styles.modalHeading}>
                {data.find(item => item.id === activeIndex)?.heading}
              </Text>
              <ScrollView style={styles.modalBody}>
                <Text
                  style={{
                    margin: 15,
                    fontSize: 12,
                    fontWeight: 400,
                    lineHeight: 25,
                    letterSpacing: 1,
                    color: '#000',
                    textAlign: 'center',
                  }}>
                  {data.find(item => item.id === activeIndex)?.story}
                </Text>
              </ScrollView>
              <View>
                <TextButton title="Select this story" />
              </View>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <Image source={icons.close} />
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </Modal>
    </ScrollView>
  );
};

export default MyStory;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 20,
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#fff',
    height: 220,
    // width: 'auto',
    overflow: 'hidden',
  },
  itemSecondColumn: {
    marginTop: 30,
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
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: 700,
    lineHeight: 11.3,
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
    color: 'black',
    fontFamily: 'Inter-Regular',
    lineHeight: 12,
    letterSpacing: 0.05,
  },
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
    height: 406,
    width: 350,
  },
  modalHeading: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'Inter-Regular',
    lineHeight: 19,
    color: '#011D26',
    textAlign: 'center',
    color: '#011D26',
  },
  modalBody: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
