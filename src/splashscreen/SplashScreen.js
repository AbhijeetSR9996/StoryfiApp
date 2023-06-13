import React from 'react';
import {Image, ImageBackground} from 'react-native';
import { COLORS, images } from '../../constant';


const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 1000);
  }, []);

  return (
    <ImageBackground
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      source={images.splashBg}>
      <Image source={images.logo} style={{tintColor: COLORS.white}} />
    </ImageBackground>
  );
};

export default SplashScreen;
