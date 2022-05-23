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
import React, {useState, useEffect} from 'react';
import {HomeStyles} from './styles';
import Shimmer from '../../../loader/HomeLoader';
import HomeCarousel from './components/carousel';
import {colors} from '../../../common/colors';
import {categoryStyles} from '../../DrawerScreens/CategoryDetail/style';
import {catgoryList, productsList, subCatgoryList} from '../../../services/Apis/example.service';
import config from '../../../services/config';
import HorizontalSlider from '../../../common/HorizontalSlider'
export default function Home(props) {
  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */
  const [image] = useState([
    'https://pravarshaindustries.com/img/banners/QohZxRmakxjURNZkpnlVELjYJ09yMorwJxmMYoWu.png',
    'https://pravarshaindustries.com/img/banners/tpTbV4CipntYl4G8BnlApGEAi3ZZBuVluR9FJiNw.png',
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);

  /* -------------------------------------------------------------------------- */
  /*                               UseEffect Section                            */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);
    getData();
    getSubcategoryData();
    categoryData();

  }, []);
  /* -------------------------------------------------------------------------- */
  /*                               API Section                                  */
  /* -------------------------------------------------------------------------- */

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

  const getSubcategoryData = async() => {
    try {
      let resp = await subCatgoryList();
      if(resp){
        setSubCategoryList(resp)
      }
    } catch (error) {
      
    }
  }
  const categoryData = async() => {
    try {
      let resp = await catgoryList();
      if(resp){
        setCategoryList(resp)
      }
    } catch (error) {
      
    }
  }
  const SECTIONS = [
    {
      // title: 'Made for you',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Item text 1',
          uri: 'https://images.unsplash.com/photo-1610057099443-64836ddec508?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        },
        {
          key: '2',
          text: 'Item text 2',
          uri: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },

        {
          key: '3',
          text: 'Item text 3',
          uri: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
        {
          key: '4',
          text: 'Item text 4',
          uri: 'https://images.unsplash.com/photo-1622768505337-ed0f06f22b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
        },
        {
          key: '5',
          text: 'Item text 5',
          uri: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
      ],
    },
  ];

  /* -------------------------------------------------------------------------- */
  /*                               Onchange section                             */
  /* -------------------------------------------------------------------------- */

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
          <Text style={HomeStyles.headerText}>
            About Pravarsha Agro Industries
          </Text>
        </View>
        <View style={HomeStyles.subHeaderWrap}>
          <Text style={HomeStyles.subHeaderText}>
            Pravarsha Agro Industries as a corporate citizen which understands
            the enormous significance for the agro sector and industrial
            development. Leveraging the strength of superior product offerings,
            Pravarsha Agro Industries has strategized its forays into consumer
            market, with the aim to be market leaders earning respect and
            revenue for the stakeholders.
          </Text>
        </View>
        <View style={HomeStyles.headerWraper}>
            <Text style={HomeStyles.textHeader}>Categories</Text>
            <Text style={HomeStyles.textHeaderLeft}>View All</Text>
          </View>
        <View>
        <HorizontalSlider data={[{horizontal:true,data:categoryList}]} />
        </View>
        <View style={HomeStyles.headerWraper}>
            <Text style={HomeStyles.textHeader}>Sub Categories</Text>
            <Text style={HomeStyles.textHeaderLeft}>View All</Text>
          </View>
        <View>
        <HorizontalSlider data={[{horizontal:true,data:subCategoryList}]} />
        </View>
        <View style={HomeStyles.headerWrap1}>
          <Text style={HomeStyles.headerText1}>Our Products</Text>
        </View>
        <View style={categoryStyles.listWrap}>
          <View>
            <FlatList
              data={productList}
              renderItem={({item}) => {
                return (
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
                          {item.name}
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
                        <Text style={categoryStyles.description}>
                          {item.description}
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      raised
                      style={categoryStyles.submitButton}
                      // icon={{name: 'check'}}
                      // onPress={() => props.navigation.navigate('')}
                    >
                      <View style={categoryStyles.submitWraper}>
                        <Text style={categoryStyles.submitText}>
                          ADD TO CART
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
