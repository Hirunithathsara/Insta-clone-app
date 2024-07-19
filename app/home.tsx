import React from 'react'
import { View,Text,Image, TouchableOpacity, Button } from 'react-native'
import { router } from 'expo-router'
const home = () => {
  return (
    <View>
   <View style={{paddingHorizontal:15,
                 flexDirection:'row',
                 alignItems:'center',
                 justifyContent:'space-between',
                 height:50,
                 backgroundColor:'white',
                            }}>

   <View> <Text style={{ backgroundColor:'white'}}><h1>Instagram</h1></Text> </View>
    <View style={{flexDirection:'row', backgroundColor:'white'}}>
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
          <View style={{borderWidth:3,borderRadius:40,padding:2,borderColor:'red'}}>
        <Image style={{height:70,width:70,borderRadius:35,}} 
        source={require('../assets/images/mak.png')}/>
        </View>
        </TouchableOpacity>
      </View>

      <View style={{marginLeft:10}}>
        <TouchableOpacity>
          <View style={{borderWidth:3,borderRadius:40,padding:2,borderColor:'red'}}>
        <Image style={{height:70,width:70,borderRadius:35,}} 
        source={require('../assets/images/cou.jpg')}/>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{marginLeft:10}}>
        <TouchableOpacity>
          <View style={{borderWidth:3,borderRadius:40,padding:2,borderColor:'red'}}>
        <Image style={{height:70,width:70,borderRadius:35,}} 
        source={require('../assets/images/cha.jpg')}/>
        </View>
        </TouchableOpacity>
      </View>
      </View>

      <View style={{marginTop:20}}>
         <Image style={{height:30,width:30,borderRadius:35,}} 
        source={require('../assets/images/cha.jpg')}/>
        <Text style={{marginLeft:40,marginTop:-25}}>cha eun woo</Text>
        <View>
        <Image style={{height:290,width:470,marginTop:20,borderRadius:25}} 
        source={require('../assets/images/pic.jpg')}/>
       
        </View>
        

        <View style={{paddingHorizontal:15,
                 flexDirection:'row',
                 alignItems:'center',
                 marginTop:15
                            }} >
          <TouchableOpacity>
            <Image style={{height:24,width:28,marginLeft:5}}source={require('../assets/images/heart.png')}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image style={{height:24,width:28,marginLeft:5}}source={require('../assets/images/err.png')}/>
            </TouchableOpacity>
            </View>
            <View>
          <Text style={{marginLeft:20,marginTop:10,fontSize:16,fontWeight:'600',color:'black'}}>Liked by and 895 others</Text>
        </View>
        
      </View>
      <Button title='Sin in'
      onPress={()=>router.push('/myprofile')}></Button>
 </View>
 
  )
  
}

export default home