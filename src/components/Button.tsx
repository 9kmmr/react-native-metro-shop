import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


interface ButtonProps {
    variant: 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    label: string;
    onPress: () => void
}


function Button({variant, label, onPress}: ButtonProps  ) {



    return (
        
        <RectButton style={styles.container} { ...{onPress}  }   >
            <Text style={styles.label}  >{label}</Text>    
        </RectButton>
    );
}

Button.defaultProps = {
    variant: 'default'
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
    }    
})


export default Button;