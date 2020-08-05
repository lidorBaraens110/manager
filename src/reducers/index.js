import {combineReducers} from 'redux';
import AuthReducer from './AuthRecducers';
import EmployeeFormReducers from './EmployeeFormReducers';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer, 
    employeeForm: EmployeeFormReducers,
    employee:EmployeeReducer
}) ;