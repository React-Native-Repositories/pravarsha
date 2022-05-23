import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Share,
  Alert,
  Platform,
  BackHandler,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-community/async-storage'
import MyBookingsIconSvg from '../assets/svg/files/mybookings-svg';
import PrivacyPolicyIconSvg from '../assets/svg/files/privacy-policy-svg';
import TermsIconSvg from '../assets/svg/files/terms-svg';
import ContactIconSvg from '../assets/svg/files/contact-svg';
import ShareIconSvg from '../assets/svg/files/share-svg';
import LogoutIconSvg from '../assets/svg/files/logout-svg';
import {DrawerStyles} from './style';
const CustomSidebarMenu = props => {
  const signOutUser = () => {
    props.navigation.navigate('Login');
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView style={DrawerStyles.container}>
      <View style={DrawerStyles.shareIcon}>
        {/* <TouchableOpacity onPress={onShare}>
        </TouchableOpacity> */}
      </View>
      <View style={DrawerStyles.profileImageWrap}>
        <Image
          source={{uri: `https://pravarshaindustries.com/img/logo.png`}}
          style={DrawerStyles.profileImage}
          resizeMode="contain"
        />
      </View>
      <View style={DrawerStyles.seperator1} />
      {/* <DrawerContentScrollView> */}
      <ScrollView indicatorStyle="black" persistentScrollbar={true}>
        <DrawerItemList {...props} />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Products');
          }}>
          <View style={DrawerStyles.customItem}>
            <MyBookingsIconSvg />
            <Text style={DrawerStyles.sidebarTex}>Products</Text>
          </View>
        </TouchableOpacity>
        <View style={DrawerStyles.seperator2} />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('AboutUs');
          }}>
          <View style={DrawerStyles.customItem}>
            <PrivacyPolicyIconSvg />
            <Text style={DrawerStyles.sidebarTex}>About Us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Offers');
          }}>
          <View style={DrawerStyles.customItem}>
            <TermsIconSvg />
            <Text
              style={DrawerStyles.sidebarTex}
              onPress={() => {
                navigation.navigate('Offers');
              }}>
              Offers
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ContactUs');
          }}>
          <View style={DrawerStyles.customItem}>
            <ContactIconSvg />
            <Text
              style={DrawerStyles.sidebarTex}
              onPress={() => {
                props.navigation.navigate('ContactUs');
              }}>
              Contact Us
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Logout',
              'Are you sure you want to Logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    signOutUser();
                  },
                },
              ],
              {
                cancelable: false,
              },
            );
            return true;
          }}>
          <View style={DrawerStyles.customItem}>
            <LogoutIconSvg />
            <Text style={DrawerStyles.sidebarTex}>Logout</Text>
          </View>
        </TouchableOpacity>
        {/* </DrawerContentScrollView> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;
