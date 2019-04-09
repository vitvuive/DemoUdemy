import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from './action';
import ListItem from './ListItem';
class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeFetch();
    }
    _keyExtractor = (item, index) => item.id;
    render() {
        console.log(this.props);
        return (
            <FlatList
                data={this.props.employees}
                renderItem={({ item }) => <ListItem employee={item} />}
                keyExtractor={this._keyExtractor}
                extraData={this.state}
            />
        );
    }
}
const mapStateToProps = state => {
    const employees = _.map(state.employeeReducer, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
};

export default connect(
    mapStateToProps,
    { employeeFetch }
)(EmployeeList);
