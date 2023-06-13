import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const InputFeild = ({
  lable,
  placeholder,
  icon,
  value,
  onChange,
  keyboardType,
  autoCapitalize,
  multiline,
  numberOfLines,
  editable,
  autoCompleteType,
  appendComponent,
  countryCodeComponent,
  secureTextEntry,
}) => {
  return (
    <View
      style={{
        height: 53,
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#01031A',
        borderRadius: 10,
        marginBottom: 23,
      }}>
      <View
        style={{
          marginLeft: 17.67,
          alignSelf: 'flex-start',
          backgroundColor: '#F5F5F5',
          paddingHorizontal: 10,
          marginTop: -8,
        }}>
        <Text
          style={{
            fontFamily: 'Rokkitt-Regular',
            fontWeight: '500',
            fontSize: 12,
            lineHeight: 13.64,
            color: '#01031A',
          }}>
          {lable}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 17.67,
          marginTop: -5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={icon}
          style={{
            tintColor: '#02141F',
            width: 16.64,
            height: 16.67,
            marginRight: 12.67,
          }}
        />
        {countryCodeComponent}
        <TextInput
          style={{
            flex: 1,
            fontSize: 16,
            lineHeight: 18.19,
            fontWeight: '400',
            fontFamily: 'Rokkitt-Regular',
            color: 'black',
          }}
          placeholder={placeholder}
          placeholderTextColor={'#02141F'}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={text => onChange(text)}
          value={value}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default InputFeild;
