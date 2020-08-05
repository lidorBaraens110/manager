import React from 'react';
import {View,Text,TextInput} from 'react-native';

const Log =({lable,onChangeText,value,placeholder,secureTextEntry})=>{
    const {textInputStyle,textStyle,viewStyle}=Styles;
    return(

        <View style={viewStyle}>

            <Text style={textStyle} >{lable}</Text>
            <TextInput 
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            style= {textInputStyle}/>
        </View>
    );
};

const Styles ={
    viewStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItem:'center'
    },
    textStyle:{
        flex:1,
        
        fontSize:20,
        alignSelf:'center',
        paddingLeft:20
       
    },
    textInputStyle:{
    color: '#000',
    fontSize:18,
    lineHeight:23,
    flex:2,
    paddingLeft:10,
    paddingRight:20,
    height:40,
    width:100
    }
}


export {Log};