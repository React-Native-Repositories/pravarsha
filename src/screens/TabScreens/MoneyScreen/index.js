import React from 'react';
import {SafeAreaView, ScrollView, TextInput} from 'react-native';
import {styles} from './styles';

function MoneyScreen(props) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        <TextInput>Transaction Screen</TextInput>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MoneyScreen;
