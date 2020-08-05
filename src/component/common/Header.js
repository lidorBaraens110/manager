import React from 'react';
import {Text,View} from 'react-native';


const Header = (props)=>{
const {textStyle,viewStyle}= styles;
return(
    <View style= {viewStyle}>
        <Text style={textStyle}>{props.HeaderText}</Text>
    </View>
);
}

const styles = {
  textStyle:{
      fontSize: 20
  } , 
  viewStyle:{
      backgroundColor: '#f8f8f8',
      justifyContent:'center',
      alignItems: 'center',
      height: 60,
      paddingTop:15,
      shadowColor: '#00ffff',
      shdowOffset : {width:0,height:10},
      shadowOpacity:0.2,
       elevation:5,
      position:'relative'

  
}
};

export {Header};
