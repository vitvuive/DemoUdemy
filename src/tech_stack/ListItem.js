import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux'
import CardSection from '../components/CardSection';
import * as actions from './action';
class ListItem extends Component{
    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription(){
        const{library,expaned} = this.props;
        if (expaned)
        return(
            <CardSection>
            <Text style={{flex:1}}>{library.description}</Text>
            </CardSection>
        );
     }

    render(){
        const {titleStyle}= styles;
        const {id, title} = this.props.library;

        return(
            <TouchableWithoutFeedback
            onPress= {()=>this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
            
        );
    }
}

const styles = {
    titleStyle:{
        fontSize:18,
        paddingLeft:20
    }
}
// actionCreator -> rerun reducer -> mapStateToProps -> Component Render -> View Update
const mapStateToProps = (state, ownProps) => {
    const expaned= state.selectedLibraryId===ownProps.library.id;
    return {expaned};
}

export default connect(mapStateToProps, actions)(ListItem);