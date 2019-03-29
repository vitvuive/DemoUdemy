import React,{Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
class LibraryList extends Component{
    render(){
        return(
            <View>
            <Text>viet</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {libraries: state.libraries};
}

export default connect(mapStateToProps)(LibraryList);