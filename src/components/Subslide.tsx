import React from 'react';
import {  StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import Button  from '../components/Button'
import {Text} from './Theme';

interface Subslide {
    subtitle: string;
    description: string;
    last?: boolean;
    x: Animated.SharedValue<number>;
    onPress: () => void;
}


const Subslide = ({ subtitle, description, last, x, onPress}: Subslide) =>  {
    return (
        <View style={styles.container} >            
            <Text variant="title2" style={styles.subtitle} >{subtitle}</Text>
            <Text variant="body" style={styles.description} >{description}</Text>          
            <Button
                label={last ? "Let's Get Started": 'Next'}
                variant={last ? 'primary' : 'default' }
                {... {onPress}}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    subtitle: {
        fontFamily: "SFProText-Semibold",
        fontSize: 24,
        color: "#0C0D34"
    },
    description: {
        fontFamily: "SFProText-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34"
    }
})

export default Subslide;