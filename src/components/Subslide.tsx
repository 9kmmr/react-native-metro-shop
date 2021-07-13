import React, { useContext } from 'react';
import {  StyleSheet, View, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import Button  from '../components/Button'
import {ThemeContext} from '../theme'

interface Subslide {
    subtitle: string;
    description: string;
    last?: boolean;
    x: Animated.SharedValue<number>;
    onPress: () => void;
}


const Subslide = ({ subtitle, description, last, x, onPress}: Subslide) =>  {

    const theme = useContext(ThemeContext);

    return (
        <View style={styles.container} >            
            <Text  style={[theme.typography.title2,  styles.subtitle]} >{subtitle}</Text>
            <Text  style={[theme.typography.body, styles.description]} >{description}</Text>          
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
        alignItems: "center",
        padding: 44
       
    },
    subtitle: {
        fontFamily: "SFProText-Semibold",
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 12,
        color: "#0C0D34",
        textAlign: "center"
    },
    description: {
        fontFamily: "SFProText-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 30
    }
})

export default Subslide;