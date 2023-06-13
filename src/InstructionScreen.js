import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../reusableComponent/ScreenWrapper';
import {icons, images} from '../constant';
import TextButton from '../reusableComponent/TextButton';
import TransButton from '../reusableComponent/TransButton';

const InstructionScreen = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  return (
    <SafeAreaView >
      <ScrollView style={{backgroundColor:'#F5F5F5'}}>
        <ScreenWrapper
          headerImage={images.head}
          homeIcon={icons.arrowLeft}
          avtar={images.avtar}
          heading={'Instructions'}
          navigation={navigation}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />
        <View>
          <View style={styles.headText}>
            <Text style={styles.content}>
              You can customize with theme, character, setting, special
              situation.
            </Text>
          </View>
        </View>
        <Image
          source={images.board}
          style={{ marginTop: 20,alignSelf:'center',marginBottom:20}}
          resizeMode="cover"
        />
        <Text style={styles.text}>
          Type here : Ex. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonum Lorem ipsum dolor sit amet, consectetuer adipi
          scing elit, sed diam nonum Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed{' '}
        </Text>
        <View style={{position: 'absolute', marginLeft: 30, marginTop: 480}}>
          <Image source={images.instructor} />
        </View>
        <View style={{marginTop: 170}}>
          <TextButton
            title={'Generic story'}
            onPress={() => navigation.navigate('WelcomeScreen')}
          />
          <TransButton
            title={'Customize story'}
            onPress={() => navigation.navigate('Dashboard')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InstructionScreen;

const styles = StyleSheet.create({
  headText: {
    backgroundColor: 'rgba(253, 178, 1, 0.2);',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 15,
  },
  content: {
    padding: 10,
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'center',
    color: '#01031A',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 400,
    color: '#000',
    lineHeight: 21,
    letterSpacing: 1,
    paddingHorizontal: 60,
    position: 'absolute',
    marginTop: 330,
  },
  instructorImage: {
    marginHorizontal: 30,
    position: 'absolute',
  },
});
