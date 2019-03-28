import React from 'react';
import {View, Text,StyleSheet,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
const AlbumDetail = (props) =>{
    return(
        <Card>
            <CardSection>
            <View style={styles.thumbnailContainerStyle}>
                <Image 
                style={styles.thumbnailStyle}
                source={{uri:props.album.thumbnail_image}}/>
            </View>
            <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{props.album.title}</Text>
            <Text>{props.album.artist}</Text>
            </View>
            
            </CardSection>
            <CardSection>
            <Image source={{uri:props.album.image}}
            style={styles.imageStyle}
            />
            </CardSection>

            <CardSection>
            <Button onPress={()=>Linking.openURL(props.album.url)}>
            BUY NOW
            </Button>
            </CardSection>
        </Card>
    );
};

const styles=StyleSheet.create({
    headerContentStyle:{
        justifyContent:'space-around',
        flexDirection:'column'
    },
    thumbnailStyle:{
        width:50,
        height:50
    },
    thumbnailContainerStyle:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginRight:10
    },
    headerTextStyle:{
        fontSize:18
    },
    imageStyle:{
        flex:1,
        height:300
    }

});
export default AlbumDetail;