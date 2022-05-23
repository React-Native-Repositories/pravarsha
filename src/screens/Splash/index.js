import {Image, Text, View} from 'react-native';
import React from 'react';
import {Splashstyles} from './styles';

export default function SplashScreen() {
  return (
    <View style={Splashstyles.mainContainer}>
      <View style={Splashstyles.imageWrapper}>
      <Image source={{uri:'https://pravarshaindustries.com/img/favicon.png'}} style={{width:100,height:100}}/>
      </View>
      <View style={Splashstyles.textWrapper}>
        <Text style={Splashstyles.text}>Pravarsha Industries</Text>
      </View>
    </View>
  );
}
