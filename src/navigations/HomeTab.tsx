import { BottomTabBarOptions, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Account from '../screens/home/account/Account';
import Settings from '../screens/home/account/Settings';
import HomeIndex from '../screens/home/index';
import Explore from '../screens/home/explore/Shop';


export type HomeTabParamList = {
    HomeIndex: undefined,
    Explore: undefined,     
    Account: undefined,
    
    
};
const Stack = createStackNavigator();

const AccountStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: false
        }}>
            <Stack.Screen component={Account} name="AccountIndex" />
            <Stack.Screen component={Settings} name="Settings" />
            
        </Stack.Navigator>
    )
}

const ExploreStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: false
        }}>
            <Stack.Screen name="Explore" component={Explore} />
           
        </Stack.Navigator>
    )
}
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: false
        }}>
            <Stack.Screen name="HomeIndex" component={HomeIndex}  />
            
        </Stack.Navigator>
    )
}
const Tab = createBottomTabNavigator<HomeTabParamList>()


const HomeTab = () => {
    const tabBarOptions: BottomTabBarOptions = {
        showLabel: false,
    }
    const navigationOptions: BottomTabNavigationOptions = {

    }
    return (
        <Tab.Navigator  tabBarOptions={tabBarOptions} screenOptions={navigationOptions}>
            <Tab.Screen options={{
                tabBarIcon: ({ focused }: any) => <Icon name="home"
                        size={30} color={focused ? '#000' : '#ddd'} />
            }} component={HomeStack} name="HomeIndex" />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }: any) => <Icon name="search"
                        size={30} color={focused ? '#000' : '#ddd'} />
            }} component={ExploreStack} name="Explore" />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }: any) => <Icon name="user"
                        size={30} color={focused ? '#000' : '#ddd'} />
            }} component={AccountStack} name="Account" />
            
        </Tab.Navigator>
    )
}

export default HomeTab

const styles = StyleSheet.create({})