import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DeliveryScreen from '../screens/TabScreens/DeliveryScreen';
import HistoryScreen from '../screens/TabScreens/HistoryScreen';
import MoneyScreen from '../screens/TabScreens/MoneyScreen';
import OfferScreen from '../screens/TabScreens/OfferScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {hp, wp} from '../dimensions';
import CartScreen from '../screens/TabScreens/Cart';

const Tab = createBottomTabNavigator();

function UIBottomTabNavigator(props) {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      tabBarOptions={{showLabel: false}}
      screenOptions={{
        tabBarStyle: {height: 60 + insets.bottom},
      }}>
      <Tab.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          headerTitleStyle: {textAlign: 'left'},
          headerTitle: () => {
            <View>
              <Text style={{color: 'black'}}>Home</Text>
            </View>;
          },
          headerShown: true,
          headerTitleAlign: 'left',
          tabBarActiveTintColor: '#77D569',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Icon name="home" size={25} color={'#77D569'} />
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Icon name="home" size={25} color={'black'} />
              </View>
            );
          },
          headerLeft: () => (
            <View style={styles.location}>
              <Icon name="location-outline" size={25} color={'#77D569'} />
              <Text style={styles.locationText}>Begumpet</Text>
            </View>
          ),
          headerRight: () => <View style={styles.profile}>
             <Icon name="person-outline" size={25} color={'#77D569'} />
            </View>,
        }}
      />
      <Tab.Screen
        name="Search"
        component={OfferScreen}
        options={{
          headerTitleStyle: {textAlign: 'left'},
          headerShown: true,
          headerTitleAlign: 'left',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Icon name="ios-search" size={25} color={'#77D569'} />
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Icon name="ios-search" size={25} color={'black'} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitleStyle: {textAlign: 'left'},
          headerShown: true,
          headerTitleAlign: 'left',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Icon name="ios-cart" size={25} color={'#77D569'} />
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Icon name="ios-cart" size={25} color={'black'} />
              </View>
            );
          },
          tabBarActiveTintColor: '#77D569',
        }}
      />
      <Tab.Screen
        name="Money"
        component={MoneyScreen}
        options={{
          headerTitleStyle: {textAlign: 'left'},
          headerShown: true,
          headerTitleAlign: 'left',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Icon name="wallet-sharp" size={25} color={'#77D569'} />
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Icon name="wallet-sharp" size={25} color={'black'} />
              </View>
            );
          },
          tabBarActiveTintColor: '#77D569',
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerTitleStyle: {textAlign: 'left'},
          headerShown: true,
          headerTitleAlign: 'left',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Icon name="calendar-outline" size={25} color={'#77D569'} />
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Icon name="calendar-outline" size={25} color={'black'} />
              </View>
            );
          },
          tabBarActiveTintColor: '#77D569',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    alignItems: 'center',
    width: '100%',
  },
  labelFocusedContainer: {
    alignItems: 'center',
    width: '100%',
    // borderBottomWidth: 3,
    // borderBottomColor: '#77D569',
  },
  labelFocusedStyle: {
    textAlign: 'center',
    marginVertical: 9,
    color: '#77D569',
    backgroundColor: 'transparent',
    fontSize: 10,
  },
  labelStyle: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'black',
    backgroundColor: 'transparent',
    fontSize: 10,
  },
  profile: {
    height: 30,
    width: 30,
    // backgroundColor: '#77D569',
    // borderRadius: 15,
    right: 12,
  },
  location: {
    left: 8,
    flexDirection:'row'
  },
  locationText:{
    color: '#77D569',
    fontWeight:'400',
    marginTop:5
  }
});

export default UIBottomTabNavigator;
