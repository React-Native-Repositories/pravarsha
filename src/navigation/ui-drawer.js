import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomSidebarMenu from '../components/CustomDrawer';
import Home from '../screens/DrawerScreens/Home';
import {colors} from '../common/colors';
import HomeIconSvg from '../assets/svg/files/home-svg';
import {Image, TouchableOpacity} from 'react-native';
import {hp, wp} from '../dimensions';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerStack = props => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: 'green',
        // insider drawer label styles
        drawerLabelStyle: {
          color: colors.black,
          marginLeft: -10,
        },
        color: colors.white,
        headerStyle: {
          backgroundColor: colors.white,
          height: hp(57),
        },
        headerTitle: () => (
          <Image
            source={{uri: `https://pravarshaindustries.com/img/logo.png`}}
            style={{height: hp(25), width: wp(80)}}
          />
        ),
        headerTintColor: colors.black,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: colors.white,
          right: 0,
        },
        headerRight: () => (
          <Icon name="cart" size={30} color="black" style={{right: 17}} />
        ),
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />}
      drawerLabel={props => console.log('label', props)}>
      <Drawer.Screen
        name="Home"
        options={{
          headerTitleStyle: {fontFamily: 'GoogleSans-Regular'},
          drawerLabel: 'Home',
          color: colors.white,
          drawerIcon: ({focused, color}) => <HomeIconSvg color={color} />,
        }}
        component={Home}
      />
    </Drawer.Navigator>
  );
};
export default DrawerStack;
