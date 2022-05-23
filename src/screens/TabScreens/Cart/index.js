import React from 'react';
import {SafeAreaView, ScrollView, TextInput} from 'react-native';
import {styles} from './styles';

function CartScreen(props) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        <TextInput>Cart Screen</TextInput>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CartScreen;
