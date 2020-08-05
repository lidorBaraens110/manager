import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Card,CardSection,Bottum,Log,Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged,passwordChange,loginUser} from '../actions';


class LoginFrom extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChage(text){
        this.props.passwordChange(text);
    }
    onButtunPress(){
        const {email,password}=this.props;
        this.props.loginUser({email,password});
    }
    renderError(){
        if(this.props.error){
            return(
            <View style={{backgroundColor:'white'}}>
            <Text style={styles.errorTextStyle}>
                {this.props.error}
            </Text>
            </View>
            );
        }
    }
    renderBottom(){
        if(this.props.loading){
            return <Spinner size='large'/>;
        }
        return(
        <Bottum 
            onPress={this.onButtunPress.bind(this)}>
            Log In
        </Bottum>
        );
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Log 
                    lable='Email'
                    placeholder='user@gmail.com'
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    />            
                </CardSection>
                <CardSection>
                <Log
                lable='Password'
                placeholder='your pass'
                secureTextEntry
                onChangeText={this.onPasswordChage.bind(this)}
                value={this.props.password}
                />
                    </CardSection>
                    {this.renderError()}
                    <CardSection>
                    {this.renderBottom()}
                    </CardSection>
            </Card>
        );
    }
}
const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color: 'red'
    }
}
const mapStateToProps=({auth})=>{
    const {email,password,error,loading}=auth;
    return {email, password, error, loading};
};
export default connect(mapStateToProps,{emailChanged,passwordChange,loginUser})(LoginFrom);