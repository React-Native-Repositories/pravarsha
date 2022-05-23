import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LogBox, Image} from 'react-native';
import LoginScreen from '../screens/Login';
import DrawerStack from './ui-drawer';
import Offers from '../screens/DrawerScreens/Offers';
import ContactUs from '../screens/DrawerScreens/ContactUs';
import Products from '../screens/DrawerScreens/Products';
import {colors} from '../common/colors';
import {hp} from '../dimensions';
import AboutUs from '../screens/DrawerScreens/AboutUs';
import RegisterScreen from '../screens/Register';
import UIBottomTabNavigator from './ui-bottom-tab';

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();
export const UIStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
         <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="Main"
        component={UIBottomTabNavigator}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />

      {/* <Stack.Screen
        name="Main"
        component={DrawerStack}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      /> */}

      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          headerTitleStyle: {fontFamily: 'GoogleSans-Regular'},
          headerTitleStyle: {
            fontSize: 16,
            height: hp(20),
          },
          headerStyle: {
            backgroundColor: colors.white,
            height: hp(57),
          },
          headerTintColor: colors.black,
        }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          headerTitleStyle: {fontFamily: 'GoogleSans-Regular'},
          headerTitleStyle: {
            fontSize: 16,
            height: hp(20),
          },
          headerStyle: {
            backgroundColor: colors.white,
            height: hp(57),
          },
          headerTintColor: colors.black,
        }}
      />
      <Stack.Screen
        name="Offers"
        component={Offers}
        options={{
          headerTitleStyle: {fontFamily: 'GoogleSans-Regular'},
          headerTitleStyle: {
            fontSize: 16,
            height: hp(20),
          },
          headerStyle: {
            backgroundColor: colors.white,
            height: hp(57),
          },
          headerTintColor: colors.black,
        }}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          headerTitleStyle: {fontFamily: 'GoogleSans-Regular'},
          headerTitleStyle: {
            fontSize: 16,
            height: hp(20),
          },
          headerStyle: {
            backgroundColor: colors.white,
            height: hp(57),
          },
          headerTintColor: colors.black,
        }}
      />
      
    </Stack.Navigator>
  );
};
