import { View, Text,TextInput,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export default function loginPage() {
  return (
    <View style={styles.container}>
      <Image
      style={styles.tinylogo}
       source={require('../assets/images/inster.png')}/>

<TextInput placeholder="Phone number,email or username"
         placeholderTextColor={'grey'} style={styles.iginput}/>
       
       <TextInput placeholder=" Password"
         placeholderTextColor={'grey'} style={styles.iginput}/>
       
       <TouchableOpacity >
        <Text style={styles.mybtn}>Log in</Text>
       </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: 'black'

    },
    tinylogo:{
        width:150,
        height:150
    },
    iginput:{
      width:300,
      height:50,
      margin:12,
      borderWidth:2,
      borderColor:'grey',
      padding:10,
      borderRadius:5,
      color:'white',
      backgroundColor:"#272424"
    

  },
  mybtn:{
    width:300,
    height:50,
    margin:12,
    borderWidth:2,
    borderColor:'blue',
    backgroundColor:'#3185FF',
    padding:10,
    borderRadius:5,
    color:'white',
    textAlign:"center"
    
  }

})
