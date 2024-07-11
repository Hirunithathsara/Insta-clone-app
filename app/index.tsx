import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,View ,Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function index() {
  
    return (
        <view style={styles.container}>
            <Text style={{color:"grey",paddingTop:20,top:500}}>English</Text>
            
<view>
    <TextInput placeholder="Phone number,email or username"
    placeholderTextColor={'grey'} style={styles.input}/> <br></br>
    <TextInput placeholder="Password"
    placeholderTextColor={'grey'} style={styles.input}
    secureTextEntry={true}
    />
    <TouchableOpacity>
        <Text style={styles.mybtn}>Log in</Text>
    </TouchableOpacity>
    <Text style={styles.primarytex}>
        Forgot your login details?<Text style={styles.secondarytext}>Get help logging.</Text></Text>
         
         <view style={{width:350}}>
            <view style={{
                borderBottomColor:"grey",
                borderBottomWidth:1,
                height:1,
                width:"40%"
                
            }}
                ></view>
            <Text >OR</Text>
            <view></view>
         </view>
</view>
            <view style={{flex:0,flexDirection:'column',alignItems:'center'}}>
                <view >
                 </view>
                 
            </view>
        </view>
           
    );
  }

  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
        

    },
     primarytex :{color:'grey',
        fontSize:13,
        paddingTop:20,
        paddingBottom:10
    },
        secondarytext:{
            fontWeight:'700',
            color:'black'
            
        },

        input:{
            backgroundColor:'#272424',
            fontSize:15,
            padding:10,
            margin:10,
            borderRadius:5,
            color:'white',
            width:350

        },
        mybtn:{
            color:'white',
            fontSize:17,
            backgroundColor:'#3185FF',
            width:350,
            padding:10,
            textAlign:'center',
            fontWeight:'700',
             borderRadius:5
    
        }

  });


