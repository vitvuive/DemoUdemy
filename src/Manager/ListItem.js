import React, {Component} from 'react';
import {Text} from 'react-native';
import CardSection from '../components/CardSection';
class ListItem extends Component{
    render(){
        const {name}= this.props.employee;
        return(
            <CardSection>
            <Text>
              {name}
            </Text>
          </CardSection>
        );
    }
}

export default ListItem;