import React, { useContext } from 'react';
import { View, StyleSheet,  Dimensions, Image, Text } from 'react-native';

import { Button } from '../../components';
import { ThemeContext } from '../../theme'
import { navigation } from '../../navigations/RootNavigation';

const { width } = Dimensions.get("window");


const photo = {
    src: require('../../assets/images/welcome2.png'),
    width: 2150,
    height: 2160
};

function Welcome() {
    const theme = useContext( ThemeContext );
    return (        
        <View style={styles.container}>
            <View style={styles.underlay}>
                
                <Image
                source={photo.src}
                style={styles.picture}
                />               

            </View>
            <View style={styles.footer} >
                <View style={styles.footerCurve} />
                <View style={styles.fotterContent}>
                    <Text  style={[theme.typography.title2]}   >Let's Get Started</Text>
                    <Text style={[theme.typography.body, { textAlign: "center" }]}  >Login to your account below or sign up for amazing experience</Text>
                    <Button variant='primary' label="Have an account? Login" onPress={() => navigation.navigate("Login")} />
                    <Button variant='default' label="Join us, Its free" onPress={() => navigation.navigate("Register")}  />
                    <Button variant="transparent"  label="Forgot Password?" onPress={() => navigation.navigate("ForgotPassword")}  />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        backgroundColor: "#fff"      
    },
    underlay: {        
        backgroundColor: "#ffe7ee",
        borderBottomRightRadius: 75,
        alignItems: "center",
        justifyContent: "flex-end"
    },   
    picture: {        
        width: width - 75,
        height: (  (width - 75) * photo.height ) / photo.width,
        borderBottomRightRadius: 75,
    },    
    footer: {
        flex: 1,
        borderTopLeftRadius: 75,
    },
    footerCurve: {             
        backgroundColor: "#ffe7ee",
        position:"absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0        
    },
    fotterContent: {
        backgroundColor: "white",
        borderTopLeftRadius: 75,
        justifyContent: "space-evenly",
        alignItems: "center",
        flex: 1,
        padding: 45,

    }
    
})

export default Welcome;