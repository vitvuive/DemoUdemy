import React from 'react';
import {View, Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
const AlbumDetail = (props) =>{
    return(
        <Card>
            <CardSection>
            <View></View>
            <View>
            <Text>{props.album.title}</Text>
            <Text>{props.album.artist}</Text>
            </View>
            </CardSection>
        </Card>
    );
};
export default AlbumDetail;