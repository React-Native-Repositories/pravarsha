import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Loginstyles} from '../styles';
import {colors} from '../../../common/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default function UIPhoneNumber(props) {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState('');

  return (
    <View style={Loginstyles.LoginContainer}>
      <View style={Loginstyles.textWrapper}>
        <Image
          source={{uri: 'https://pravarshaindustries.com/img/favicon.png'}}
          style={{width: 60, height: 60}}
        />
      </View>
      <View style={Loginstyles.formContainer}>
        <View style={Loginstyles.iconView}>
          <Icon name="call" size={20} color="gray" style={Loginstyles.icon} />
          <Text style={Loginstyles.text}>Phone</Text>
        </View>
        <View style={Loginstyles.textInputWrapper}>
          <TextInput
            style={
              phoneNumber ? Loginstyles.textInput : Loginstyles.placeholder
            }
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter Phone Number"
            placeholderTextColor={colors.gray}
            keyboardAppearance="dark"
          />
        </View>

        <View style={Loginstyles.iconView}>
          <Icon name="key" size={20} color="gray" style={Loginstyles.icon} />
          <Text style={Loginstyles.text}>Password</Text>
        </View>
        <View style={Loginstyles.textInputWrapper}>
          <TextInput
            style={password ? Loginstyles.textInput : Loginstyles.placeholder}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Password"
            placeholderTextColor={colors.gray}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{marginTop: 10}}>Remember me ? </Text>
          <Text style={{marginTop: 10}}>Forgot your password </Text>
        </View>
        <View style={Loginstyles.submitWraper}>
          <TouchableOpacity
            raised
            style={Loginstyles.submitButton}
            icon={{name: 'check'}}
            onPress={() => props.onSubmitPhoneNumer('Main')}>
            <Text style={Loginstyles.submitText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={{marginTop: 10, alignSelf: 'center'}}>
          New to Pravarsha ?{' '}
        </Text>
        <View style={Loginstyles.submitWraper}>
          <TouchableOpacity
            raised
            style={Loginstyles.submitButton}
            icon={{name: 'check'}}
            onPress={() => props.onSubmitPhoneNumer('Register')}>
            <Text style={Loginstyles.submitText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
