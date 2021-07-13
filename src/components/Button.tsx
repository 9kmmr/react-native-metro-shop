import React, { useContext } from 'react';

import { StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { ThemeContext } from '../theme'

interface ButtonProps {
    variant: 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'transparent';
    label: string;
    onPress: () => void
}


function Button({variant='default', label, onPress}: ButtonProps  ) {


    const theme = useContext(ThemeContext);
    const backgroundColor =
        variant === 'primary'
        ? theme.colors.primary
        : variant === 'transparent'
        ? 'transparent'
        : theme.colors.grey;

    const color =
        variant === 'primary' ? theme.colors.white : theme.colors.button;
    return (
        
        <RectButton style={[styles.container, {backgroundColor}]} { ...{onPress}  }   >
            <Text   style={[ styles.label,  {color}]}  >{label}</Text>    
        </RectButton>
    );
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontSize: 15,
        color: "#0C0D34",
        textAlign: "center",
        fontFamily: "SFProText-Semibold",
        
    }    
})


export default Button;