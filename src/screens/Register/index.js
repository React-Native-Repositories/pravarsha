import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import UIPhoneNumber from './components/phoneNumber';
import {Loginstyles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function RegisterScreen(props) {
  const onSubmitPhoneNumer = (phoneNumber, countryCode) => {
    props.navigation.navigate({
      name: 'Login',
      params: {phoneNumber: phoneNumber, countryCode: countryCode},
    });
  };

  return (
    <KeyboardAwareScrollView style={Loginstyles.mainContainer}>
      <View style={Loginstyles.container1}>
        <UIPhoneNumber onSubmitPhoneNumer={onSubmitPhoneNumer} />
      </View>
    </KeyboardAwareScrollView>
  );
}
