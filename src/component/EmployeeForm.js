import React , {Component} from 'react';
import {View,Text,Picker} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {CardSection,Log} from './common';
class EmployeeForm extends Component{
    
    render(){
        return(
            <View>
            <CardSection>
            <Log
            lable="name"
            placeholder="jana" 
            value={this.props.name}
            onChangeText={value=>this.props.employeeUpdate({prop: 'name',value})}
           />
       </CardSection>
       <CardSection>
           <Log
           lable="phone"
           placeholder="555-555-5555"
           value={this.props.phone}
           onChangeText={value=> this.props.employeeUpdate({prop:'phone' ,value})}
           />
        </CardSection>
        <CardSection >
           <Text style={Styles.textPickerStyle}>shift</Text>
            <Picker
           style={{flex:2}}
            selectedValue={this.props.shift}
            onValueChange={value=>this.props.employeeUpdate({prop:'shift',value})}
            >
               <Picker.Item label="Monday" value="Monday"/> 
               <Picker.Item label="Tuseday" value="Tuseday"/>
               <Picker.Item label="Wednesday" value="Wednesday"/>
               <Picker.Item label="Thursday" value="Thursday"/>
               <Picker.Item label="Friday" value="Friday"/>
               <Picker.Item label="Saturday" value="Saturday"/>
               <Picker.Item label="Sunday" value="Sunday"/>
            </Picker>
        </CardSection>
        </View>
        );
    }
}
const Styles={
    textPickerStyle:{
        fontSize:20,
        padding:20
    }
};
const mapStateToProps =(state)=>{
    const {name,phone,shift}= state.employeeForm
    return { name,phone,shift};
}

export default connect (mapStateToProps,{employeeUpdate})(EmployeeForm);