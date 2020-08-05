import React from 'react';
import {Text,TouchableOpacity} from 'react-native';


const Bottum =({onPress,children})=>{
    const {touchStyle,textStyle}=styles;
    return(
<TouchableOpacity 
onPress= {onPress}
style={touchStyle} >
<Text style= {textStyle} > {children} </Text>
</TouchableOpacity>
    );
}
const styles={

    touchStyle:{
        flex:1,
        backgroundColor: '#fff',
        padding:5,
         //alignSelf:'stretch',
         // justifyContent:'center',
         borderRaduis:5,
         borderColor:'#007aff',
         borderWidth: 1,
        // paddingTop:30
        //   marginLeft:5,
        //   marginRight:5,
        //   alignItems:'center'
    },
    textStyle:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 22,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10

    }
};

export {Bottum};