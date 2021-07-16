import React from 'react';

import { View, StyleSheet,  Dimensions, Image, Text, StatusBar } from 'react-native';
import { Button } from '../../components';
import { ThemeContext } from '../../theme'
import { navigation } from '../../navigations/RootNavigation';
const { width } = Dimensions.get("window");

function ForgotPassword() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View  style={styles.headerContainer}>
                
            </View>
            <View style={styles.mainContent}>
                <View style={styles.footer}>

                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer: {
        backgroundColor: "green",
        borderBottomLeftRadius: 75,
        overflow: 'hidden',
        height: width * 2 / 3,
    },
    mainContent: {
        flex: 1,
        overflow: "hidden"
    },
    footer: {        
        flex: 1,
        borderRadius: 75,
        borderTopLeftRadius: 0,
        backgroundColor: "white"
    }

})

export default ForgotPassword;