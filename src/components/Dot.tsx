import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

const {width} = Dimensions.get("window");

interface DotProps {
    index: number,
    scrollOffset: Animated.SharedValue<number>;
}

function Dot( {index, scrollOffset}: DotProps) {

    const opacityStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            scrollOffset.value / width,
            [ index - 1, index, index + 1  ],
            [0.5, 1, 0.5],
            Extrapolate.CLAMP
        );
        return {opacity};
    });

    const scaleStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            scrollOffset.value / width,
            [index - 1, index, index +1],
            [1, 1.25, 1],
            Extrapolate.CLAMP
        );
        return { transform: [{scale}]};
    })

    return (
        <Animated.View style={[styles.dot, opacityStyle, scaleStyle]} />
    );
}

const styles = StyleSheet.create({
    dot: {
        backgroundColor: "#2cb9b0",
        width: 6,
        borderRadius: 3,
        marginRight: 6
    }    
})


export default Dot;