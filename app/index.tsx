import React from 'react'
import { View,Text,Image, TouchableOpacity } from 'react-native'

const header = () => {
  return (
    <View>
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
 <View style={{flexDirection:'row',marginTop:8}}>
  <View style={{marginLeft:10}}>
        <TouchableOpacity>
          <View style={{borderWidth:3,borderRadius:40,padding:2}}>
        <Image style={{height:70,width:70,borderRadius:35,}} 
        source={require('../assets/images/mak.png')}/>
        </View>
        </TouchableOpacity>
      </View>

      <View style={{marginLeft:10}}>
        <TouchableOpacity>
          <View style={{borderWidth:3,borderRadius:40,padding:2}}>
        <Image style={{height:70,width:70,borderRadius:35,}} 
        source={require('../assets/images/mak.png')}/>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{marginLeft:10}}>
        <TouchableOpacity>
          <View style={{borderWidth:3,borderRadius:40,padding:2}}>
        <Image style={{height:70,width:70,borderRadius:35,}} 
        source={require('../assets/images/mak.png')}/>
        </View>
        </TouchableOpacity>
      </View>
      </View>
     

 </View>
 
 

 
  )
  
}

export default header