import React from 'react';
import {View} from 'react-native';

const CardSection=(props)=>{
    return(
<View style= {[styles.containerStyle,props.style]}>
{props.children}
</View>
    );
}
const styles={

    containerStyle:{

        borderButtonWidth: 1,
        padding: 5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderWidth:0.2,
    //    elevation:1,
        borderColor:'#000',
        positon:'relative'
    }
};


export {CardSection};