import { View, Text,TextInput,Image,StyleSheet,TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'


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
       
       <Button  title='Log in'
      onPress={()=>router.push('/home')}></Button>
       
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: 'white'

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
 Button:{
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
