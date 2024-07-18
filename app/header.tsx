import React from 'react'
import { View,Text,Image, TouchableOpacity } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'

const header = () => {
  return (
    
    
   <View style={{paddingHorizontal:15,
                 flexDirection:'row',
                 alignItems:'center',
                 justifyContent:'space-between',
                 height:50,
                            }}>

   <View> <Text ><h1>Instagram</h1></Text> </View>
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{marginRight:15}}>
        <Image  style={{height:24,width:25}} source={require('../assets/images/heart.png')}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{position:'relative'}}>
        <Image  style={{height:24,width:25}} source={require('../assets/images/err.png')}/>
        <View style={{position:'absolute',bottom:12,left:13}}>
          <Text style={{
             backgroundColor:'red',
             paddingHorizontal:5,
             borderRadius:10}}>
              5

          </Text>
        </View>
        </View>
      </TouchableOpacity>
      </View>
     
 </View>
 
 

    
 
 
  )
}

export default header