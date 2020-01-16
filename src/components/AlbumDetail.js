import React from 'react';
import { View, Text, Image , Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {

    const {title , artist , thumbnail_image,image , url } = album;
    // const {thumbnailContainer , thumbnailContainer , headerStyle ,textStyleHead , imageStyle}

   return (
       <Card>
           <CardSection>

               <View style={styles.thumbnailContainer}>
                   <Image style = {styles.imageStyle} source = {{ uri: thumbnail_image }} />
               </View>
               <View style = { styles.headerStyle} >
               <Text style={styles.textStyleHead}>{title}</Text>
               <Text>{artist}</Text>     
               </View>
           
           </CardSection>

           <CardSection> 
               <Image style={styles.imageMainStyle} source = {{uri:image}} />
           </CardSection>

           <CardSection>
               <Button onClick = {() => Linking.openURL(url)} >
                    Buy now 
               </Button>
           </CardSection>
       </Card>
   );
};




const styles = {
    headerStyle : {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textStyleHead: {
        fontSize: 20,
    },
    imageStyle: {
        height:50,
        width:50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems : 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageMainStyle : {
        height:300,
        flex:1,
        width:null
    }
};



export default AlbumDetail;