import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';

export default function AboutUs() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Who We Are</Text>
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionText}>
            Pravarsha Agro Industries as a corporate citizen which understands
            the enormous significance for the agro sector and industrial
            development. Leveraging the strength of superior product offerings,
            Pravarsha Agro Industries has strategized its forays into consumer
            market, with the aim to be market leaders earning respect and
            revenue for the stakeholders.
          </Text>
        </View>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Why We Are Here</Text>
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionText}>
            India with an estimated production of 112 million tones of milk in
            the year 2010 is the leading country in the world in terms of total
            milk production with per capita availability of 252 gm of milk per
            day. This production level is short of the requirements of the
            country and according to one estimate we need to double its milk
            production by the year 2020 in order to meet the needs of its
            growing population. Along with increasing the milk production, there
            also is a crying need to improve the quality of the milk as the
            quality of milk produced and milk products at present leaves much to
            be desired. With the growing local demand and potential for export,
            there is a lot of scope for large scale quality milk production.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
