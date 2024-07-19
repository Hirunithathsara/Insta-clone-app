import React from 'react'
import { View,Text, Image, TouchableOpacity } from 'react-native'

const myprofile = () => {
  return (
    <View>
    <View style={{paddingHorizontal:15,paddingTop:10,height:55}}>
     
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <Text style={{fontSize:24,fontWeight:'500',color:'black'}}>____chaEunwoo__</Text>

      <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity>
       <Image style={{height:24,width:24}} source={require('../assets/images/add.png')}/>
       </TouchableOpacity>
      </View>
      </View>
    </View>
    <View style={{paddingHorizontal:15}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Image style={{ height:90,width:90,borderRadius:100}} source={require('../assets/images/cha.jpg')}/>

        <View style={{width:75,alignItems:'center'}}>
          <Text style={{fontSize:24,fontWeight:'400',color:'black'}}>40</Text>
          <Text style={{fontSize:16,color:'black'}}> Posts</Text>
        </View>

        <View style={{width:75,alignItems:'center'}}>
          <Text style={{fontSize:24,fontWeight:'400',color:'black'}}>1.2M</Text>
          <Text style={{fontSize:16,color:'black'}}>followers </Text>
        </View>

        <View style={{width:75,alignItems:'center'}}>
          <Text style={{fontSize:24,fontWeight:'400',color:'black'}}>10</Text>
          <Text style={{fontSize:16,color:'black'}}> following</Text>
        </View>
        </View>

    </View>
     <Text style={{fontSize:18,color:'black',fontWeight:'500',marginTop:10}}>Cha Eun Woo</Text>
     <Text style={{color:'black'}}>Singer</Text>
     <Text style={{color:'black'}}>Actor</Text>
     <Text style={{color:'black',fontSize:16,fontWeight:'500'}}>See Translation</Text>
     <View style={{flexDirection:'row',marginTop:15,justifyContent:'space-between',marginHorizontal:10}}>
    
      <TouchableOpacity>
        <Text
         style ={{
            backgroundColor:'#E1E1E1',
            with:150,
            paddingHorizontal:20,
            paddingVertical:5,
            borderRadius:5,
            textAlign:'center',
            color:'black'

          }}>
            Edit Profile

        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
         style ={{
            backgroundColor:'#E1E1E1',
            with:150,
            paddingHorizontal:20,
            paddingVertical:5,
            borderRadius:5,
            textAlign:'center',
            color:'black'

          }}>
            Share Profile

        </Text>
      </TouchableOpacity>
      </View>
    
    </View>
  )
}

export default myprofile