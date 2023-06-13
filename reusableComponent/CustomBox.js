import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomBox = ({ content, bgColor }) => {
  return (
    <View>
      <View style={[styles.headText, {backgroundColor: bgColor}]}>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

export default CustomBox;

const styles = StyleSheet.create({
    headText: {
        position: 'absolute',
        backgroundColor: 'rgba(253, 178, 1, 0.2);',
        marginTop: 110,
        alignSelf: 'center',
        borderRadius: 10,
        margin: 10,
      },
      content: {
        padding: 15,
        fontSize: 12,
        fontWeight: 400,
        textAlign: 'center',
        lineHeight: 18,
        color: '#01031A',
        fontFamily:'Poppins-Regular'
      },
});
