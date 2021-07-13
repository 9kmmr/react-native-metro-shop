import {StyleProp, TextStyle} from 'react-native';
import colors from './colors';

interface typography {
    [key: string]: StyleProp<TextStyle>;
}

const typography: typography = {
    hero: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: 'SFProText-Bold',
        color: colors.white,
        textAlign: 'center',
    },
    title: {
        fontSize: 28,
        fontFamily: 'SFProText-SemiBold',
        color: colors.title,
    },
    title2: {
        fontSize: 24,
        lineHeight: 30,
        fontFamily: 'SFProText-SemiBold',
        color: colors.title,
    },
    body: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'SFProText-Regular',
        color: colors.body,
    },
    button: {
        fontSize: 15,
        lineHeight: 24,
        color: 'text',
        fontFamily: 'SFProText-Light',
    },
};

export default typography;