import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';


const {width, height} = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

interface SlideProps {
    label: string
}


const Slide = ({label}: SlideProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{label}</Text>
            </View>
        </View>        
    );
}

const styles = StyleSheet.create({
    container: {
        width,
    },
    titleContainer: {
        backgroundColor: "red",
        height: 100,
        justifyContent: "center",
        
    },
    title: {
        
    }
    
})

export default Slide;