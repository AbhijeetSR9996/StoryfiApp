import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {FONTS, icons, images} from '../constant';
import SideModal from './drawer/SideModal';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation,route}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const {dataofuser} = route.params;
  console.log("userdata from login",dataofuser);
 
  const {signupdataofuser} = route.params;
  console.log("userdata from signup",signupdataofuser);

  return (
    <ScrollView  style={{backgroundColor:'#F5F5F5'}}>
      <ImageBackground
        source={images.head}
        style={{height: 180, justifyContent: 'flex-start'}}
      />
      <View style={{flexDirection: 'row', position: 'absolute'}}>
        <TouchableOpacity 
        //onPress={()=>navigation.navigate('HomeScreen',dataofuser)}
        >
          <Image source={images.home} style={styles.homeIcon} />
        </TouchableOpacity>
        <View style={{flexDirection: 'column', marginTop: 60, marginLeft: 20}}>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: '#fff',
              fontFamily: 'Poppins-Bold',
            }}>
            {/* Hello {dataofuser.user_data.user_id}! */}
            {/* Hello {signupdataofuser.id}! */}
                Hello !
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#fff',
              fontFamily: 'Rokkitt-Regular',
            }}>
            Lorem Ipsum is simply
          </Text>
        </View>

        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Image source={images.avtar} style={styles.avtar} />
        </TouchableOpacity>
        <SideModal
          data={dataofuser}
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      </View>
      <View>
        <View style={styles.homeImage}>
          <Image source={images.homeMain} />
        </View>
        <View style={styles.headText}>
          <Text style={styles.content}>
            What do you want to do ? Select from Below
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 90,
            marginBottom:50,
            justifyContent:'space-between'
          }}>
          <View style={{flexDirection: 'column'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Instruction')}>
              <Image source={images.newStory} style={styles.newStory} />
              <Text style={styles.bottomText}>Start a new storys</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('StoriesList')}>
              <Image source={images.viewStory} style={styles.viewStory} />
              <Text style={styles.bottomText}>View my stories</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeIcon: {
    marginTop: 70,
    marginLeft: 20,
  },
  avtar: {
    marginTop: 60,
    marginLeft: 90,
  },
  homeImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  headText: {
    position: 'absolute',
    backgroundColor: 'rgba(253, 178, 1, 0.2);',
    marginTop: 290,
    alignSelf: 'center',
    borderRadius: 10,
  },
  content: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 12,
    fontWeight: 400,
    color: '#01031A',
    letterSpacing: 0.5,
    fontFamily: 'Poppins-Regular',
    opacity: 0.75,
  },
  newStory: {
    width: 180,
    height: 150,
  },
  viewStory: {
    width: 180,
    height: 150,
  },
  bottomText: {
    marginLeft: 30,
    fontSize: 16,
    fontWeight: 800,
    lineHeight: 24,
    fontFamily: 'Poppins-Bold',
    color: '#01031A',
    letterSpacing: 0.05,
  },
});
