import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextButton from './TextButton'

const SettingsData = ({heading,buttonTitle,text}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, }}>
    <Text style={styles.heading}>{heading}</Text>
    {buttonTitle ? (
    <View style={styles.button}>
      <TextButton title={buttonTitle} color={['#F78C7D', '#E82005']} />
    </View>
  ) : (
    <Text style={{
        fontSize:16,
        fontWeight:600,
        fontFamily:'Inter-Regular',
        lineHeight:19,
        marginTop:20,
        marginRight:20,
    }} >{text}</Text>
  )}
  </View>
  )
}

export default SettingsData

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: 600,
        fontFamily: 'Inter-Regular',
        lineHeight: 21,
        letterSpacing: 1,
        color: '#000',
        marginLeft: 20,
        marginTop:20
      },
      button:{
        width:120,
        marginRight:20,
        
      },
      
})