import {EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCES,
    LOGIN_USER_FAIL,
    LOGIN_USER} from '../actions/types';

const IMITINAL_STATE= {email:'',
password:'',
user: null,
error:'',
loading:false
};

export default  (state= IMITINAL_STATE, action)=>{
switch(action.type){
case EMAIL_CHANGED:
    return {...state, email:action.payload};
case PASSWORD_CHANGED:
    return {...state,password:action.payload};
case LOGIN_USER:
    return {...state, loading:true,error:''};
case LOGIN_USER_SUCCES:
    return{...state,user: action.payload,loading:false,error:''};
case LOGIN_USER_FAIL:
        return{...state, error:'authentication failed.',password:'',loading:false};    
default:
    return state;
}
};