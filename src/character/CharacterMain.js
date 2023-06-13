import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../reusableComponent/ScreenWrapper';
import {TextButton} from '../../reusableComponent';
import {icons, images} from '../../constant';
import AboutInputField from '../../reusableComponent/AboutInputField';
import TransButton from '../../reusableComponent/TransButton';

const CharacterMain = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handlePress = type => {
    setSelected(type);
  };

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <ScreenWrapper
        headerImage={images.head}
        homeIcon={icons.arrowLeft}
        avtar={images.avtar}
        heading={'Character'}
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
            <Image source={icons.linechar} style={{width: '100%'}} />
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
                <Text style={styles.text1}>Character</Text>
              </View>
              <View>
                <Image source={images.charInvisible} />
                <Text style={styles.text1}>Place</Text>
              </View>
              <View>
                <Image source={images.charInvisible} />
                <Text style={styles.text1}>Theme</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View>
        <View style={styles.headText}>
          <Text style={styles.content}>
            Click the + button to add up to three characters"
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 22,
            letterSpacing: 0.5,
            color: '#000000',
            marginLeft: 25,
            marginTop: 20,
          }}>
          Character name
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('characterMain2')}>
          <ImageBackground
            source={icons.add_theme}
            style={{
              width: 101,
              height: 101,
              marginHorizontal: 25,
              marginTop: 10,
            }}>
            <Image
              source={icons.plus_theme}
              style={{alignSelf: 'center', marginTop: 25}}
            />
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.box, selected === 'male' && styles.selected]}
            onPress={() => handlePress('male')}>
            <Image source={icons.male} style={styles.gender} />
            <Text
              style={[styles.text, selected === 'male' && styles.selectedText]}>
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, selected === 'female' && styles.selected]}
            onPress={() => handlePress('female')}>
            <Image source={icons.female} style={styles.gender} />
            <Text
              style={[
                styles.text,
                selected === 'female' && styles.selectedText,
              ]}>
              Female
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, selected === 'other' && styles.selected]}
            onPress={() => handlePress('other')}>
            <Image source={icons.other} style={styles.gender} />
            <Text
              style={[
                styles.text,
                selected === 'other' && styles.selectedText,
              ]}>
              Other
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 22,
              letterSpacing: 0.5,
              color: '#000000',
              marginTop: 20,
            }}>
            Character name
          </Text>
          <TouchableOpacity style={styles.box}></TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop: 30}}>
        <TransButton title={'Generate Story'} />
        <TextButton
          title={'Continue Customization'}
          onPress={() => navigation.navigate('place')}
        />
      </View>
    </ScrollView>
  );
};

export default CharacterMain;

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
  text1: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    letterSpacing: 0.05,
    color: '#ffffff',
    marginTop: 5,
  },
  container: {
    paddingHorizontal: 20,
  },
  box: {
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    padding: 10,
    width: '100%',
    height: 63,
    marginTop: 10,
  },
  text: {
    color: '#000',
    marginLeft: 80,
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.05,
    fontStyle: 'normal',
    fontWeight: 700,
    marginTop: 10,
  },
  selected: {
    backgroundColor: '#452F9D',
  },
  selectedText: {
    color: '#fff',
  },
  gender: {
    position: 'absolute',
    marginTop: -5,
  },
});
