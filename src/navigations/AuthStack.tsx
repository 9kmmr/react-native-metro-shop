import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import ForgotPassword from '../screens/auth/ForgotPassword'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import OnBoarding from '../screens/auth/OnBoarding'
import Welcome from '../screens/auth/Welcome'

export type AuthStackParamList = {
    Login: undefined,
    Register: undefined,
    ForgotPassword: undefined,
    OnBoarding: undefined,
    Welcome: undefined
    
};
const Stack = createStackNavigator<AuthStackParamList>()
const AuthStack = () => {
    const navigationOptions: StackNavigationOptions = {
        headerShown: false,
        gestureEnabled: false
    }
    return (
        <Stack.Navigator  screenOptions={navigationOptions}>
            <Stack.Screen component={OnBoarding} name="OnBoarding" />
            <Stack.Screen component={Welcome} name="Welcome" />
            <Stack.Screen component={Login} name="Login" />
            <Stack.Screen component={Register} name="Register" />
            <Stack.Screen component={ForgotPassword} name="ForgotPassword" />
            
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})