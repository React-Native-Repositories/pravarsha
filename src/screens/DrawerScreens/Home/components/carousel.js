import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
const {width, height} = Dimensions.get('window');

export default function HomeCarousel(props) {
  return (
    <SliderBox
      images={props.image}
      style={{height: '100%',width: '100%'}}
      currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
      dotColor="#FFEE58"
      inactiveDotColor="#90A4AE"
      dotStyle={{
        width: 6,
        height: 6,
        borderRadius: 6,
      }}
      paginationBoxStyle={{
        position: 'absolute',
        padding: 0,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
      }}
      paginationBoxVerticalPadding={10}
      autoplay
      circleLoop
      ImageComponentStyle={{width: '100%', marginTop: 5}}
      imageLoadingColor="#2196F3"
      resizeMode={'cover'}
      parentWidth={width}
    />
  );
}

const styles = StyleSheet.create({});
