import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const log = () => {
  return (
    <View style={styles.mainContainer}>
      <TextInput style={styles.textInput}
      placeholder='+'/>
    </View>
  )
}

export default log

const styles = StyleSheet.create({
  mainContainer:{
    height:68
  },

  textInput:{
    borderWidth :1,
    width:350,
    borderColor:'grey',
    borderRadius:5,
    paddingHorizontal:10



  }
})