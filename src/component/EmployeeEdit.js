import React ,{Component} from 'react';
import _ from 'lodash';
import communications from 'react-native-communications';
import {Card , CardSection , Bottum , Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate,employeeSave,employeeDelete} from '../actions';
import {connect} from 'react-redux';

class EmployeeEdit extends Component{
    state={showModal: false};
    componentWillMount(){
        _.each(this.props.employee,(value,prop)=>{
            this.props.employeeUpdate({prop,value});
        });
    }
    onPressBottm(){
        const {name,phone,shift}=this.props;
        this.props.employeeSave({name,phone,shift,uid:this.props.employee.uid});
        
    }
    onText(){
        const {shift,phone}=this.props;
        communications.text(phone,`your upcoming to the shift on ${shift}`)
    }
    onDeclinePress(){
        this.setState({showModal:false})
    }
    onAcceptPress(){
        const {uid} =this.props.employee;
        this.props.employeeDelete({uid});

    }

    render (){
        return(

            <Card>
                <EmployeeForm />
                <CardSection>
                    <Bottum onPress ={this.onPressBottm.bind(this)}>
                        save changes
                    </Bottum>
                </CardSection>
                <CardSection>
                    <Bottum onPress ={this.onText.bind(this)}>
                        Text
                    </Bottum>
                </CardSection>
                <CardSection>
                    <Bottum onPress={()=>this.setState({showModal: !this.state.showModal})}>
                        Fire Employee
                    </Bottum>
                </CardSection>

                <Confirm
                onAccept={this.onAcceptPress.bind(this)}
                visible={this.state.showModal}
                onDecline={this.onDeclinePress.bind(this)}>
                 Are you sure you want Fire him?
                </Confirm>
            </Card>

        );
    }
}

const mapStateToProps=(state) =>{
    const {name,phone,shift}= state.employeeForm
    return {name,phone,shift}
}
export default connect (mapStateToProps,{employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit);