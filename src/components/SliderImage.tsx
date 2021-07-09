import React from 'react';
import { Dimensions, Image } from 'react-native';
import { ImageRequireSource, StyleSheet } from 'react-native';
import Animated, { Extrapolate } from 'react-native-reanimated';
import { interpolate } from 'react-native-reanimated';
import { useAnimatedStyle } from 'react-native-reanimated';

const {width} = Dimensions.get("window");


interface SliderImageProps {
    index: number;
    scrollOffset: Animated.SharedValue<number>;
    picture: {
        src: ImageRequireSource;
        width: number;
        height: number;
    }
}


function SliderImage({index, scrollOffset, picture}: SliderImageProps) {

    const opacityStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            scrollOffset.value / width,
            [index-1, index, index+1],
            [0, 1, 0],
            Extrapolate.CLAMP
        );
        return {opacity};
    })

    return (
        <Animated.View
            key={index}
            style={[styles.underlay, opacityStyle]}
        >
            <Image source={picture.src} style={styles.picture} />
        </Animated.View>
    );
}


const styles = StyleSheet.create({
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end"

    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    }

})

export default SliderImage;