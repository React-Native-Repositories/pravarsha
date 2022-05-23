import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {hp} from '../../../dimensions';
import {colors} from '../../../common/colors';

export default function Offers() {
  const [categoryDetailInfo, setCategoryDetailInfo] = useState([
    {
      image:
        'https://pravarshaindustries.com/img/offers.jpg',
    },
    {
      image:
        'https://pravarshaindustries.com/img/refer.png',
    },
  ]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>My Offers</Text>
        </View>
        <View style={{alignSelf: 'center', marginTop: hp(16), width: '85%'}}>
          <View>
            <FlatList
              data={categoryDetailInfo}
              renderItem={({item}) => (
                <View
                  style={{
                    flex: 1,
                    minHeight: hp(180),
                    backgroundColor: colors.white,
                    borderColor: colors.textGray,
                    borderWidth: 1,
                    // marginTop: 16,
                    borderRadius: 6,
                    marginBottom: 16,
                  }}>
                  <View style={{height: hp(192)}}>
                    <Image
                      source={{uri: item.image}}
                      style={{borderRadius: 6, height: '100%', width: '100%'}}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
