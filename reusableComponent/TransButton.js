import {TouchableOpacity, Text, Image, ImageBackground} from 'react-native';
import {images} from '../constant';

import React from 'react'

const TransButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={images.buttontTrance}
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
            color: '#37C3F2',
            marginBottom:25,
            textTransform: 'capitalize',
          }}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default TransButton