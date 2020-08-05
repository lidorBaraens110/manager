import React,{Component} from 'react';
import EmployeeForm from './EmployeeForm';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate} from '../actions';
import {Card,CardSection,Bottum} from './common';

class EmployeeCreate extends Component{
    onBottomPress(){
        const {name,phone,shift}=this.props;
        this.props.employeeCreate({name,phone,shift: shift||'Monday'});
    }
    render(){
      //  console.log(this.props.employee);
        return(
           <Card>
              <EmployeeForm {...this.props}/>
                <CardSection>
                   <Bottum onPress={this.onBottomPress.bind(this)}> 
                       Create
                   </Bottum>
               </CardSection>
           </Card>

        );
    }
}

const mapStateToProps=({employeeForm})=>{
    const {name,phone,shift}=employeeForm;
    return{name,phone,shift};

};

export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate);