import firebase from 'firebase';
import {EMPLOYEE_UPDATE,EMPLOYEE_CREATE,EMPLOYEE_FETCH_SUCCESS} from './types';
import { Actions } from 'react-native-router-flux';


export const employeeUpdate=({prop,value})=>{
return{
    type: EMPLOYEE_UPDATE,
    payload: {prop,value}
  };
};
export const employeeCreate=({name,phone,shift})=>{
  const {currentUser}= firebase.auth();
  return (dispatch) => {
  firebase.database().ref(`users/${currentUser.uid}/employees`)
  .push({name,phone,shift})
  .then(()=>{dispatch({type:EMPLOYEE_CREATE});
  Actions.pop({type : 'reset'})
});
};
};

export const employeeFetch=()=>{
  const {currentUser}= firebase.auth();
  return (dispatch) => {
  firebase.database().ref(`users/${currentUser.uid}/employees`)
  .on('value',snapshot=>{
    dispatch({type:EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()})
  });
  };
};

export const employeeSave =({name,phone,shift,uid})=>{
  const {currentUser}= firebase.auth();
  return (dispatch)=>{
  firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`).set({name,phone,shift})
  .then (()=>{dispatch({type:EMPLOYEE_CREATE})
  Actions.employeeList({type: 'reset'})
  });
  };

};
export const employeeDelete =({uid})=>{
const {currentUser}= firebase.auth();
return ()=>{
  firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
  .remove()
  .then(()=>{
    Actions.employeeList({type:'reset'})
  });
};
};
