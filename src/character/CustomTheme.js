import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../reusableComponent/ScreenWrapper';
import {icons, images} from '../../constant';
import CustomBox from '../../reusableComponent/CustomBox';
import LinearGradient from 'react-native-linear-gradient';
import {TextButton} from '../../reusableComponent';

const CustomTheme = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
    <ScrollView>
      <ScreenWrapper
        headerImage={images.head}
        homeIcon={icons.arrowLeft}
        avtar={images.avtar}
        heading={'Custom Theme'}
        navigation={navigation}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
      <View style={styles.headText}>
        <Text style={styles.contentMain}>
          Below are some examples Custom Theme place enter your theme in the
          text box below
        </Text>
      </View>
      <View>
        <CustomBox
          content={
            'ex. A child that struggles going to the dentist because they are scared.'
          }
          bgColor="#FFDFE2"
        />
      </View>
      <View style={{marginTop: 80}}>
        <CustomBox
          content={
            'Ex. A child that just had a new sibling and is struggling with the lack of attention'
          }
          bgColor="#D0FFF0"
        />
      </View>
      <View style={{marginTop: 80}}>
        <CustomBox
          content={
            'Ex. A child that just had a new sibling and is struggling with the lack of attention'
          }
          bgColor="#D6E4FF"
        />
      </View>
      <View style={styles.box}>
        <View>
          <LinearGradient
            colors={['#0ABF1D', '#0ABF1D']}
            style={styles.headingContainer}>
            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
              <Text style={styles.heading}>Enter Custom Theme</Text>
              <Image source={icons.edit} />
            </View>
          </LinearGradient>
        </View>
        <Text style={styles.content}>Children's Anxiety</Text>
      </View>
      <View style={{margin: 20}}>
        <TextButton
          title={'Generate story'}
          onPress={() => navigation.navigate('WelcomeScreen')}
        />
      </View>
    </ScrollView>
  );
};

export default CustomTheme;

const styles = StyleSheet.create({
  headText: {
    position: 'absolute',
    backgroundColor: 'rgba(253, 178, 1, 0.2);',
    marginTop: 200,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 10,
  },
  contentMain: {
    padding: 15,
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'center',
    lineHeight: 18,
    color: '#01031A',
    fontFamily: 'Poppins-Regular',
  },
  box: {
    backgroundColor: '#DDFFE0',
    margin: 16,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 200,
  },
  headingContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadiusTop: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: 1,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    // marginLeft: 50,
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
    marginBottom: 20,
  },
});
