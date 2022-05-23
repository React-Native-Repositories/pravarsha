import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../../common/colors';
import {HomeStyles} from '../Home/styles';
import Shimmer from '../../../loader/HomeLoader';
import {categoryStyles} from '../CategoryDetail/style';
import HomeCarousel from '../Home/components/carousel';
import { productsList, subCatgoryList } from '../../../services/Apis/example.service';

export default function Products(props) {
  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */
  const [image] = useState([
    'https://pravarshaindustries.com/img/banners/QohZxRmakxjURNZkpnlVELjYJ09yMorwJxmMYoWu.png',
    'https://pravarshaindustries.com/img/banners/tpTbV4CipntYl4G8BnlApGEAi3ZZBuVluR9FJiNw.png',
  ]);
  const [categoryDetailInfo, setCategoryDetailInfo] = useState([
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  /* -------------------------------------------------------------------------- */
  /*                               UseEffect Section                            */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);
      let resp = await productsList();
      if (resp) {
        setIsLoading(false);
        setProductList(resp);
        console.log(resp, '-------------->');
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={HomeStyles.mainContainer}>
      <ScrollView style={HomeStyles.scrollContainer}>
        <View style={HomeStyles.carouselWarp}>
          <Shimmer
            autoRun={true}
            style={{height: '100%', width: '100%'}}
            visible={!isLoading}>
            {!isLoading ? (
              <HomeCarousel image={image} />
            ) : (
              <Text
                style={{
                  height: '100%',
                  width: '100%',
                  color: colors.white,
                }}></Text>
            )}
          </Shimmer>
        </View>
        <View style={HomeStyles.headerWrap}>
          <Text style={HomeStyles.headerText}>Products (13)</Text>
        </View>

        <View style={categoryStyles.listWrap}>
          <View>
            <FlatList
              data={productList}
              renderItem={({item}) => (
                <View style={categoryStyles.itemWrap}>
                  <View style={categoryStyles.itemImageView}>
                    <Image
                      source={{
                        uri: 'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
                      }}
                      style={categoryStyles.itemImage}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={categoryStyles.mainWrap}>
                    <View style={categoryStyles.headerWrap}>
                      <Text style={categoryStyles.headerText}>
                        {item.headerText}
                      </Text>
                    </View>
                    <View style={categoryStyles.amountWrap}>
                      <Text>
                        <Text style={categoryStyles.amount1}>
                          ₹ {item.price}
                        </Text>
                        <Text style={{color: 'black'}}> / </Text>
                        <Text style={categoryStyles.amount2}>
                          {item.units}
                        </Text>
                      </Text>
                    </View>
                    <View style={categoryStyles.descriptionWrap}>
                      <ScrollView>
                        <Text style={categoryStyles.description}>
                          {item.description}
                        </Text>
                      </ScrollView>
                    </View>
                  </View>
                  <TouchableOpacity
                    raised
                    style={categoryStyles.submitButton}
                    // icon={{name: 'check'}}
                    // onPress={() => props.navigation.navigate('BookNowOne')}
                  >
                    <View style={categoryStyles.submitWraper}>
                      <Text style={categoryStyles.submitText}>ADD TO CART</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
