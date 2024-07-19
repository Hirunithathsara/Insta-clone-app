import { router } from 'expo-router'
import React from 'react'
import { Button, View,Image,Text } from 'react-native'

const index = () => {
  return (
    <View>
      
       <Image style={{height:144,width:144,marginTop:127,margin:118}} source={require('../assets/images/inster.png')}/>
       
       <Text style={{fontSize:30,color:'red',fontWeight:600}}> </Text>
      <Button title='looding'
      onPress={()=>router.push('/loginPage')}></Button>
    </View>
  )
}

export default index