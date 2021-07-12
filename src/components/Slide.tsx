import React from 'react';
import { Dimensions,  View, StyleSheet } from 'react-native';
import Text from './Text'

const {width, height} = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

interface SlideProps {
    label: string,
    right: boolean
}


const Slide = ({label, right}: SlideProps) => {
    const transform  = [
        { translateY: (SLIDE_HEIGHT - 100) / 2},
        { translateX: right ? width / 2 -60 : width / 2 -330 },
        { rotate: right ? '-90deg' : '90deg' },
    ]
    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, {transform}]}>
                <Text variant="title">123</Text>
            </View>
        </View>        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
    },
    titleContainer: {        
        height: 100,
        justifyContent: "center",        
    },
   
    
})

export default Slide;