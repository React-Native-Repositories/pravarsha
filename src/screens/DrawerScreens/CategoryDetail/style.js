import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../common/colors';
import {hp, wp} from '../../../dimensions';
const {width, height} = Dimensions.get('window');

export const categoryStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
  listWrap: {
    alignSelf: 'center',
    marginTop: hp(16),
    width: '100%',
  },
  itemWrap: {
    flex: 1,
    minHeight: hp(300),
    backgroundColor: colors.white,
    borderColor:colors.textGray,
    borderWidth:1,
    // marginTop: 16,
    borderRadius: 6,
    marginBottom: 16,
  },
  itemImageView: {
    height: hp(122),
  },
  itemImage: {
    borderRadius: 6,
    height: '100%',
    width: '100%',
  },
  mainWrap: {
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
  },
  headerWrap: {
    minHeight: 18,
  },
  headerText: {
    fontSize: 18,
    alignSelf:'center',
    color: colors.black,
    fontFamily: 'GoogleSans-Medium',
  },
  amountWrap: {
    marginTop: 4,
    alignSelf:'center'
  },
  amount1: {
    color: colors.black,
    fontSize: 16,
    
    fontFamily: 'GoogleSans-Medium',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.secondaryColor,
  },
  amount2: {
    color: colors.secondaryColor,
    fontSize: 16,
    fontFamily: 'GoogleSans-Medium',
  },
  descriptionWrap: {
    marginTop: 15,
    flexWrap: 'wrap',
  },
  description: {
    alignSelf:'center',
    color: colors.black,
    fontSize: 12,
    fontFamily: 'GoogleSans-Regular',
  },
  submitWraper: {
    // marginTop: 16,
    // position: 'absolute',
    justifyContent: 'flex-end',
    marginTop: hp(16),
    marginBottom: hp(5),
    height: hp(44),
    backgroundColor: colors.white,
    borderColor:'green',
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 2,
    width: '90%',
  },
  submitButton: {
    borderRadius: 2,
  },
  submitText: {
    fontSize: 16,
    color: colors.black,
    fontFamily: 'GoogleSans-Regular',
  },
  underline: {
    marginTop: 7,
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.5,
    borderColor: colors.green,
    borderWidth: 1,
  },
});