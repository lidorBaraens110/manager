import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeeFetch } from '../actions';
import ListItem from './ListItem'
 
class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeeFetch();
	}
	renderItem(employee) {
		console.log('lidor'+employee);
		console.log('smai'+employee.item);
		return <ListItem employee={employee.item} />;
	}
	render() {
		console.log('lidor');
		console.log(this.props.employee);
		return (
			<FlatList
				data={this.props.employee}
				renderItem={this.renderItem.bind(this)}
				keyExtractor={(employee, index) => index.toString()}
			/>
		);
	}
}
 
const mapStateToProps = (state) => {
    const employee = _.map(state.employee, (val, uid) => {
        return { ...val, uid };
	});

    return { employee}
};
 
export default connect(mapStateToProps, { employeeFetch })(EmployeeList);