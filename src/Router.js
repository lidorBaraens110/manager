import React from 'react';
import {Scene,Router,Actions} from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmploeeList from  './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';
import EmploeeEdit from './component/EmployeeEdit';

const RouterComponent =()=>{
    return(
<Router > 
<Scene key="root"
headerLayoutPreset={'center'}
hideNavBar>
<Scene key= "auth">
<Scene key="login"
component={LoginForm}
title="please login">
</Scene>
</Scene>
<Scene key="main">
<Scene rightTitle="Add"
onRight={()=>Actions.employeeCreate()}
key="employeeList" component={EmploeeList}
title="Employee"
/>
<Scene key= "employeeCreate" 
component={EmployeeCreate} 
title="Employee"/>
<Scene key ="employeeEdit"
component ={EmploeeEdit}
title ="Employee Edit"/>
</Scene>
</Scene>
</Router>
    );
};
// const styles={
//     titleStyle:{
//         selfItem:'center'
//     }
// }
export default RouterComponent;