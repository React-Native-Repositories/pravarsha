import React from 'react';
import {SafeAreaView, ScrollView, TextInput} from 'react-native';
import {styles} from './styles';

function HistoryScreen(props) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        <TextInput>History Screen</TextInput>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HistoryScreen;
