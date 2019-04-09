import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CardSection from '../components/CardSection';
import { Actions } from 'react-native-router-flux';
class ListItem extends Component {
    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }
    render() {
        const { name } = this.props.employee;
        return (
            <View>
                <TouchableOpacity onPress={this.onRowPress.bind(this)}>
                    <CardSection>
                        <Text style={styles.textStyle}>{name}</Text>
                    </CardSection>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = {
    textStyle: {
        fontSize: 20,
        paddingLeft: 20,
    },
};
export default ListItem;
