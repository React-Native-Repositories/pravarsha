// https://www.reactnativeschool.com/vertical-and-horizontal-scrolling-in-a-sectionlist-flatlist
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../../dimensions';
import { colors } from '../colors';

const ListItem = ({item}) => {
  return (
    <View style={styles1.item}>
      <Image
        source={{
          uri: 'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
        }}
        style={styles1.itemPhoto}
        resizeMode="contain"
      />
      <Text style={styles1.itemText}>{item.name}</Text>
    </View>
  );
};

export default function HorizontalSlider(props) {
  return (
    <View>
      <SectionList
        // contentContainerStyle={{paddingHorizontal: 10}}
        stickySectionHeadersEnabled={false}
        sections={props.data}
        renderSectionHeader={({section}) => (
          <>
            {/* <Text style={styles.sectionHeader}>{section.title}</Text> */}
            {section.horizontal ? (
              <FlatList
                horizontal
                data={section.data}
                renderItem={({item}) => <ListItem item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            ) : null}
          </>
        )}
        renderItem={({item, section}) => {
          if (section.horizontal) {
            return null;
          }
          return <ListItem item={item} />;
        }}
      />
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    marginRight: 10,
    borderWidth:1,
    borderColor:colors.textGray,
    borderRadius:5
  },
  itemPhoto: {
    width: wp(140),
    height: hp(90),
    borderRadius: 10,
  },
  itemText: {
    color: 'black',
    marginTop: 5,
    textAlign:'center',
    marginBottom: 5,
  },
});
