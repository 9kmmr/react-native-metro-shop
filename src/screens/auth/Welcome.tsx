import React, { useRef } from 'react';
import { View, StyleSheet,  Dimensions, Image } from 'react-native';

import Animated, { interpolateColor, useSharedValue, useAnimatedScrollHandler, useAnimatedStyle } from 'react-native-reanimated';
import Dot from '../../components/Dot';


import Slide, { SLIDE_HEIGHT } from '../../components/Slide';
import Subslide from '../../components/Subslide';
import SliderImage from '../../components/SliderImage';

const { width } = Dimensions.get("window");

const photo = {
    src: require('../../assets/images/welcome.jpg'),
    width: 1920,
    height: 1080
};

function Welcome() {
    
    return (        
        <View style={styles.container}>
            <View style={styles.underlay}>
                
                <Image
                source={photo.src}
                style={styles.picture}
                />               

            </View>
            <View style={styles.footer} >
                <View style={styles.footerContent}>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        borderBottomRightRadius: 75,
        backgroundColor:"grey"
    },
   
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: width - 75,
        height: (( width - 75 ) * photo.height ) / photo.width,
        borderBottomRightRadius: 75,
    },
    
    footer: {
        flex: 1,
        borderTopLeftRadius: 75,
    },
    footerContent: {
             
        backgroundColor: "grey",
        position:"absolute",
        top: 0,
        
    },
    
})

export default Welcome;