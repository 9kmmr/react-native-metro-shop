import React, { useRef } from 'react';
import { View, StyleSheet,  Dimensions } from 'react-native';

import Animated, { interpolateColor, useSharedValue, useAnimatedScrollHandler, useAnimatedStyle } from 'react-native-reanimated';

import { navigation } from '../../navigations/RootNavigation';

import Dot from '../../components/Dot';
import Slide, { SLIDE_HEIGHT } from '../../components/Slide';
import Subslide from '../../components/Subslide';
import SliderImage from '../../components/SliderImage';

const { width } = Dimensions.get("window");

const slides = [
    {
      title: 'Relaxed',
      color: '#FEC56C',
      subtitle: 'Find Your Outfits',
      description:
        "Confused about your outfits? Don't worry find the best oufit here",
      picture: {
        src: require('../../assets/images/onboarding-2.jpg'),
        width: 2513,
        height: 3583,
      },
    },
    {
      title: 'Playfull',
      color: '#E4919B',
      subtitle: 'Hear it First, Wear it First',
      description:
        'Hating the clothes in your wardrobe? Explore hundreds of ourfit ideas',
      picture: {
        src: require('../../assets/images/onboarding-1.jpg'),
        width: 2513,
        height: 3583,
      },
    },
    {
      title: 'Excentric',
      color: '#0084BC',
      subtitle: 'Your Style, Your Way',
      description:
        'Create your individuals & unique style and look amazing everyday',
      picture: {
        src: require('../../assets/images/onboarding-3.jpg'),
        width: 2513,
        height: 3583,
      },
    },
    {
      title: 'Funky',
      color: '#FE94AA',
      subtitle: 'Look Good, Feel Good',
      description:
        'Discover the best trends in fashion and explore your personality',
      picture: {
        src: require('../../assets/images/onboarding-4.jpg'),
        width: 2513,
        height: 3583,
      },
    },
  ];


function OnBoarding() {
    
    const scrollRef = useRef<Animated.ScrollView>(null);
    const scrollOffset = useSharedValue(0);
    const backgroundStyles = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            scrollOffset.value,
            [0, width, width*2, width *3],
            ['#FEC56C', '#E4919B', '#0084BC', '#FE94AA']

        );
        return { backgroundColor };
    });
    const bottombackgroundStyles = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            scrollOffset.value,
            [0, width, width*2, width *3],
            ['#FEC56C', '#E4919B', '#0084BC', '#FE94AA']

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
            <Animated.View style={[styles.slider, backgroundStyles]}>
                {slides.map( ({picture}, index) => {
                    return <SliderImage
                        key={index}
                        index={index}
                        scrollOffset={scrollOffset}
                        picture={picture}
                    />
                } )}
                <Animated.ScrollView
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={scrollHandler}
                    scrollEventThrottle={1}
                    ref={scrollRef}
                    
                    >
                    {slides.map( ({title}, index) => (
                        <Slide label={title} key={index}  right={!!(index % 2)} />
                    ))}

                </Animated.ScrollView>

            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={[StyleSheet.absoluteFillObject, bottombackgroundStyles]} />
                <View style={styles.footerContent}>
                
                    <Animated.View style={styles.pagination}>
                        {slides.map((element, index) => {
                            return <Dot key={index} scrollOffset={scrollOffset} index={index} />
                        })}

                    </Animated.View>
                    <Animated.View style={[{
                        flex: 1,
                        width: width * slides.length,
                        flexDirection: "row"

                    }, transfromStyle
                    
                    
                    ]}>

                        {
                            slides.map( ({subtitle, description}, index) => {
                                const last = index === slides.length - 1;
                                return <Subslide
                                    onPress={() => {
                                        if (last) {
                                            navigation.navigate("Welcome");
                                        } else {

                                            if (scrollRef.current) {
                                                scrollRef.current
                                                
                                                .scrollTo({ x: width * (index + 1), animated: true })
                                            }
                                        }
                                    }}
                                    key={index}
                                    last={last}
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
        borderBottomRightRadius: 75,
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1,        
        backgroundColor: "white",
        borderTopLeftRadius: 75,
    },
    pagination: {
        ... StyleSheet.absoluteFillObject,
        flex: 1,
        top: 30,
        height: 6,
        flexDirection: "row",
        justifyContent: "center"
    }
})

export default OnBoarding;