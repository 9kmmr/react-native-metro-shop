import { 
    NavigationContainer, 
    StackActions,
    NavigationContainerRef, 
    NavigationAction } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import RootTab from './RootTab';
import { navigationRef } from './RootNavigation'

export type SuperRootStackParamList = {
    Home: undefined,
    Profile: { userId: string },
    Feed: { sort: 'latest' | 'top' } | undefined,
    Logout: undefined,
}
const RootStack = createStackNavigator<SuperRootStackParamList>()

const index = ():JSX.Element => {
    const navigationOptions: StackNavigationOptions = {
        headerShown: false,
        gestureEnabled: false,
        cardStyle: {
        }
    }

    

    return (
        <NavigationContainer  ref={navigationRef} >

            <RootStack.Navigator
                initialRouteName='Home'
                screenOptions={navigationOptions}>
                     <RootStack.Screen name="Home" component={RootTab} />
                     
            </RootStack.Navigator>
           
        </NavigationContainer>
    )
}
export default index