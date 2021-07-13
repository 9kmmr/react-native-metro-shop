import React from 'react';
import { useContext } from 'react';
import { Dimensions,  View, StyleSheet, Text } from 'react-native';
import {ThemeContext} from '../theme';

const {width, height} = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

interface SlideProps {
    label: string,
    right: boolean
}


const Slide = ({label, right}: SlideProps) => {

    const theme = useContext(ThemeContext);
    
    const transform  = [
        { translateY: (SLIDE_HEIGHT - 100) / 2},
        { translateX: right ? width / 2 -60 : width / 2 -330 },
        { rotate: right ? '-90deg' : '90deg' },
    ]
    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, {transform}]}>
                <Text style={theme.typography.hero}>{label}</Text>
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