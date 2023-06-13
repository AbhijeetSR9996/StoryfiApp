import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../reusableComponent/ScreenWrapper';
import {icons, images} from '../constant';
import {TextButton} from '../reusableComponent';

const ViewStoryScreen = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ScrollView>
      <ScreenWrapper
        headerImage={images.head}
        homeIcon={icons.arrowLeft}
        avtar={images.avtar}
        heading={'Story title 1'}
        navigation={navigation}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
      <View style={{flex: 1, flexDirection: 'row',marginHorizontal:20}}>
        <Image
          source={icons.arrowLeft2}
          style={{marginTop: 100, }}
        />
        <Image source={images.storymain} style={styles.mainImage} />
        <Image source={icons.arrowRight} style={{marginTop: 100}} />
      </View>
      <View style={styles.box}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Story title 1</Text>
        </View>
        <Text style={styles.content}>
          {' '}
          A fairy tale is a short story that belongs to the folklore genre. Such
          stories typically feature magic, enchantments, and A short story is a
          piece of prose fiction that can typically be read in a single sitting
          and focuses on a self-contained incident or series of linked .
        </Text>
      </View>
      <View style={{marginHorizontal: 21}}>
        <TextButton
          title="See All"
          onPress={() => navigation.navigate('customTheme')}
        />
      </View>
    </ScrollView>
  );
};

export default ViewStoryScreen;

const styles = StyleSheet.create({
  mainImage: {
    width: 250,
    height: 250,
    marginTop: 30,
  },
  box: {
    backgroundColor: 'rgba(253, 178, 1, 0.2);',
    margin: 16,
    borderRadius: 20,
    overflow: 'hidden',
  },
  headingContainer: {
    backgroundColor: '#FDB201',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadiusTop: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  content: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 30,
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontWeight: '500',
    fontFamily: 'Inter-Regular',
    letterSpacing: 1,
    fontStyle: 'normal',
    textAlign:'center'
  },
});
