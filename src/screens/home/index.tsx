import React, { useEffect, useRef, useState } from 'react'
import {
    Animated, NativeScrollEvent,
    NativeSyntheticEvent, RefreshControl,
    SafeAreaView, ScrollView, StyleSheet,
    Text, View, KeyboardAvoidingView, Keyboard, TextInput,
    TouchableOpacity
} from 'react-native'


const index = () => {
    return (
    <SafeAreaView>
        <KeyboardAvoidingView behavior="height">

        </KeyboardAvoidingView>
    </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    keyboardAvoidingViewContainer: {
        position: "relative"
    },
    scrollContainer: {

    },
    loadingIcon: {
        position: 'relative',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})