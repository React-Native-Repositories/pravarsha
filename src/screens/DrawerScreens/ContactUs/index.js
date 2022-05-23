import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../../common/colors';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [subject, setSubject] = useState('');

  return (
    <KeyboardAwareScrollView style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.headerText}>Contact Us</Text>

        <View style={styles.form}></View>
        <View style={styles.formContainer}>
          <Text style={styles.text}>Name</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={name ? styles.textInput : styles.placeholder}
              value={name}
              onChangeText={setName}
              placeholder="Enter Name"
              placeholderTextColor={colors.gray}
              keyboardAppearance="dark"
              // onSubmitEditing={() => onSubmitPhoneNumber('8886257181', '+91')}
            />
          </View>
            <Text style={styles.text}>Phone</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={phone ? styles.textInput : styles.placeholder}
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter Phone Number"
              placeholderTextColor={colors.gray}
              keyboardAppearance="dark"
              // onSubmitEditing={() => onSubmitPhoneNumber('8886257181', '+91')}
            />
          </View>
          
          <Text style={styles.text}>Email</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={email ? styles.textInput : styles.placeholder}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter Email Address"
              placeholderTextColor={colors.gray}
              keyboardAppearance="dark"
              // onSubmitEditing={() => onSubmitPhoneNumber('8886257181', '+91')}
            />
          </View>
          <Text style={styles.text}>Subject</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={subject ? styles.textInput : styles.placeholder}
              value={subject}
              onChangeText={setSubject}
              placeholder="Enter Subject"
              placeholderTextColor={colors.gray}
              keyboardAppearance="dark"
              // onSubmitEditing={() => onSubmitPhoneNumber('8886257181', '+91')}
            />
          </View>
          <Text style={styles.text}>Message</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={comment ? styles.textInputComment : styles.placeholderComment}
              value={comment}
              onChangeText={setComment}
              placeholder="Add Message"
              placeholderTextColor={colors.gray}
              keyboardAppearance="dark"
              multiline={true}
              numberOfLines={8}
              // onSubmitEditing={() => onSubmitPhoneNumber('8886257181', '+91')}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.submitWraper}>
        <TouchableOpacity
          raised
          style={styles.submitButton}
          icon={{name: 'check'}}
          title="Submit Now"
          // onPress={() => onSubmit()}
          >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}
