import React, { useRef } from 'react';
import { View, StyleSheet,  Dimensions } from 'react-native';

import Animated, { interpolateColor, useSharedValue, useAnimatedScrollHandler, useAnimatedStyle } from 'react-native-reanimated';
import Dot from '../../components/Dot';

import Slide, { SLIDE_HEIGHT } from '../../components/Slide';
import Subslide from '../../components/Subslide';

const { width } = Dimensions.get("window");

const slides = [
    {
      title: 'Relaxed',
      color: '#BFEAF5',
      subtitle: 'Find Your Outfits',
      description:
        "Confused about your outfits? Don't worry find the best oufit here",
    },
    {
      title: 'Playfull',
      color: '#BEECC4',
      subtitle: 'Hear it First, Wear it First',
      description:
        'Hating the clothes in your wardrobe? Explore hundreds of ourfit ideas',
    },
    {
      title: 'Excentric',
      color: '#FFE4D9',
      subtitle: 'Your Style, Your Way',
      description:
        'Create your individuals & unique style and look amazing everyday',
    },
    {
      title: 'Funky',
      color: '#FFDDDD',
      subtitle: 'Look Good, Feel Good',
      description:
        'Discover the best trends in fashion and explore your personality',
    },
  ];

function OnBoarding() {
    
    const scrollRef = useRef<Animated.ScrollView>(null);
    const scrollOffset = useSharedValue(0);
    const backgroundStyles = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            scrollOffset.value,
            [0, width, width*2, width *3],
            ['#BFEAF5', '#BEECC4', '#FFE4D9', '#FFDDDD']

        );
        return { backgroundColor };
    });

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollOffset.value = event.contentOffset.x;
        }
    })

    const transfromStyle = useAnimatedStyle(() => {
        return {
          transform: [{translateX: -scrollOffset.value}],
        };
    });


    return (
        <View style={styles.container}>
            <Animated.View style={styles.slider}>
                <Animated.ScrollView
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={scrollHandler}
                    scrollEventThrottle={1}

                >
                    {slides.map( ({title}, index) => (
                        <Slide label={title} key={index}  />
                    ))}

                </Animated.ScrollView>

            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={[StyleSheet.absoluteFillObject, backgroundStyles]} />
                <View style={styles.footerContent}>
                
                    <Animated.View style={styles.pagination}>
                        {slides.map((_, index) => {
                            <Dot key={index} scrollOffset={scrollOffset} index={index} />
                        })}

                    </Animated.View>
                    <Animated.View style={[{
                        flex: 1,
                        width: width * slides.length,
                        flexDirection: "row"

                    }]}>

                        {
                            slides.map( ({subtitle, description}, index) => {
                                <Subslide
                                    onPress={() => {
                                        if (scrollRef.current) {
                                            scrollRef.current
                                            .getNode()
                                            .scrollTo({ x: width * (index + 1), animated: true })
                                        }
                                    }}
                                    key={index}
                                    last={index === slides.length - 1}
                                    x={scrollOffset}
                                    {...{subtitle, description}}
                                />
                            } )
                        }
                    </Animated.View>
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
    slider: {
        height: SLIDE_HEIGHT,

    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1,
        backgroundColor: "white"
    },
    pagination: {
        ... StyleSheet.absoluteFillObject,
        flex: 1,
        top: 12,
        height: 8,
        flexDirection: "row",
        justifyContent: "center"
    }
})

export default OnBoarding;