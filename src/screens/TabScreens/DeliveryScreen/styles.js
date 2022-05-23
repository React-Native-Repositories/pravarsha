import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../common/colors';
import {hp, wp} from '../../../dimensions';
const {width, height} = Dimensions.get('window');
export const HomeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  scrollContainer: {
    width: '85%',
  },
  textHeader: {
    color: colors.black,
    fontWeight: '400',
    fontSize: 20,
    marginBottom: 5,
    marginTop:20,
  },
  headerWraper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeaderLeft:{
    color:colors.red,
    fontSize:14,
    marginTop:20,
  },
  carouselWarp: {
    marginTop: 16,
    width: wp(width - 56),
    height: hp(122),
  },
  headerWrap: {
    // width: wp(width - 56),
    marginTop: hp(31),
    marginBottom:hp(20),
    alignSelf:'center'
  },
  headerText: {
    color: colors.black,
    fontSize: 30,
    alignSelf:'center',
  },
  headerWrap1: {
    width: wp(width - 56),
    marginTop: hp(15),
    // marginBottom:hp(15),
    alignSelf:'center'
  },
  headerText1: {
    color: colors.black,
    fontSize: 30,
    alignSelf:'center'
  },
  subHeaderWrap: {
    // width: wp(width - 56),
    marginTop: 4,
    marginBottom: hp(16),
    minHeight: hp(32),
    alignItems:'center'
  },
  subHeaderText: {
    color: colors.black,
    fontSize: 15,
    // width: '85%',
    alignSelf:'center'

  },
  gridList: {
    // backgroundColor: 'red',
    flexDirection: 'column',
  },
  gridWrap: {
    marginTop: hp(16),
  },
  gridView: {
    flex: 1,
    marginBottom: hp(6),
  },
  gridImageView: {},
  gridImage: {
    width: wp(96),
    height: hp(97),
    borderRadius: 10,
    marginRight: '3%',
  },
  gridTextView: {
    //
  },
  gridText: {
    color: colors.black,
    fontSize: 12,
    width: wp(96),
    marginBottom: hp(16),
  },
});
