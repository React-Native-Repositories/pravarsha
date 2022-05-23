import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../common/colors';
import {hp} from '../../../dimensions';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    width: '85%',
    alignSelf: 'center',
  },
  headerText: {
    color: colors.black,
    fontSize: 22,
    marginTop: hp(16),
    marginBottom: hp(8),
  },
  headerDesc: {
    color: colors.textGray,
    fontFamily: 'GoogleSans-Regular',
  },
  formText: {
    color: colors.white,
    fontFamily: 'GoogleSans-Regular',
    marginLeft: 8,
    fontSize: 14,
  },
  iconLabel: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  form: {
    marginTop: hp(18),
    borderBottomColor: colors.gray,
    borderWidth: 0.5,
    borderColor: colors.black,
    marginBottom: hp(18),
  },
  text: {
    color: colors.black,
    fontFamily: 'GoogleSans-Regular',
    marginLeft: 8,
  },
  placeholder: {
    color: colors.white,
    fontFamily: 'GoogleSans-Regular',
  },
  formContainer: {},

  textInputWrapper: {
    borderWidth: 1,
    borderColor: colors.textGray,
    color: colors.white,
    fontSize: 16,
    backgroundColor:colors.white,
    marginTop:4,
    marginBottom:16,
    borderRadius:4,
    paddingLeft:24

  },
  textInput: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'GoogleSans-Medium',
  },
  textInputComment:{
    textAlignVertical: 'top',
    color: colors.white,
  },
  placeholderComment:{
    textAlignVertical: 'top',
  },

  submitWraper: {
    borderWidth: 1,
    // position: 'absolute',
    // bottom: 0,
    // width: wp(width - 76),
    width: '85%',
    alignSelf: 'center',
    marginBottom: hp(40),
    marginTop: hp(24),
    borderColor:'green'
    
  },
  submitButton: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(44),
    borderRadius:4,
  },
  submitText: {
    color: colors.black,
    fontSize: 16,
    fontFamily: 'GoogleSans-Medium',
  },
});
