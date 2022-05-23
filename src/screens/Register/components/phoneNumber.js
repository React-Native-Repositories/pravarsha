import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Loginstyles} from '../styles';
import {colors} from '../../../common/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default function UIPhoneNumber(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState('');
  const [cPassword, setCpassword] = useState('');

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
          <Icon name="person" size={20} color="gray" style={Loginstyles.icon} />
          <Text style={Loginstyles.text}>Name</Text>
        </View>
        <View style={Loginstyles.textInputWrapper}>
          <TextInput
            style={name ? Loginstyles.textInput : Loginstyles.placeholder}
            value={name}
            onChangeText={setName}
            placeholder="Enter Name"
            placeholderTextColor={colors.gray}
            keyboardAppearance="dark"
          />
        </View>
        <View style={Loginstyles.iconView}>
          <Icon name="mail" size={20} color="gray" style={Loginstyles.icon} />
          <Text style={Loginstyles.text}>Email</Text>
        </View>
        <View style={Loginstyles.textInputWrapper}>
          <TextInput
            style={email ? Loginstyles.textInput : Loginstyles.placeholder}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Email"
            placeholderTextColor={colors.gray}
            keyboardAppearance="dark"
          />
        </View>
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

        <View style={Loginstyles.iconView}>
          <Icon name="key" size={20} color="gray" style={Loginstyles.icon} />
          <Text style={Loginstyles.text}>Confirm Password</Text>
        </View>
        <View style={Loginstyles.textInputWrapper}>
          <TextInput
            style={cPassword ? Loginstyles.textInput : Loginstyles.placeholder}
            value={cPassword}
            onChangeText={setCpassword}
            placeholder="Confirm Password"
            placeholderTextColor={colors.gray}
          />
        </View>
        <Text style={{marginTop: 10}}>
          By continuing, you agree to Pravarsha's Conditions of use and Privacy
          Notice
        </Text>
        <View style={Loginstyles.submitWraper}>
          <TouchableOpacity
            raised
            style={Loginstyles.submitButton}
            icon={{name: 'check'}}
            onPress={() => props.onSubmitPhoneNumer('Main')}>
            <Text style={Loginstyles.submitText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={{marginTop: 10, alignSelf: 'center'}}>
          Already registerd ?{' '}
        </Text>
        <View style={Loginstyles.submitWraper}>
          <TouchableOpacity
            raised
            style={Loginstyles.submitButton}
            icon={{name: 'check'}}
            onPress={() => props.onSubmitPhoneNumer('Login')}>
            <Text style={Loginstyles.submitText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
