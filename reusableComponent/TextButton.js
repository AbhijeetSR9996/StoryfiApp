import React from 'react';
import {TouchableOpacity, Text, Image, ImageBackground} from 'react-native';
import {images} from '../constant';

const TextButton = ({button, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={images.buttonBlue}
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
            // color: COLORS.white,
            color: '#fff',
            marginBottom:25,
            textTransform: 'capitalize',
          }}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default TextButton;
