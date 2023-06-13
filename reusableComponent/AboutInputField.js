import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';

const AboutInputField = ({
  label,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
  multiline,
  icon,
  appendComponent,
  numberOfLines,
  maxLength,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View
        style={{
          backgroundColor: '#F0F0F0',
          borderRadius: 10,
          height: 63,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            position: 'absolute',
            right: 15,
            marginTop: -25,
          }}>
          <TextInput
            style={{
              flex: 1,
              fontSize: 18,
              lineHeight: 22,
              fontWeight: '600',
              fontFamily: 'Inter-Regular',
              letterSpacing: 0.5,
              color: '#000000',
              left: 80,
            }}
            placeholderTextColor={'#000000'}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            multiline={multiline}
            numberOfLines={numberOfLines}
            maxLength={maxLength}
          />

          {appendComponent}
        </View>
      </View>
    </View>
  );
};

export default AboutInputField;
const styles = StyleSheet.create({
  label: {
    color: '#01031A',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 18,
    letterSpacing: 1,
    marginLeft: 20,
    marginTop: 20,
  },
});
