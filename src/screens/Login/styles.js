import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../common/colors';
import {hp, wp} from '../../dimensions';

export const Loginstyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  LoginContainer: {
    flex: 1,
    alignItems: 'center',
    fontFamily: 'GoogleSans-Medium',
  },
  textWrapper: {
    marginTop: hp(48),
    height: hp(20),
    marginBottom: (40),
  },

  phoneWrapper: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    // width: wp(width - 76),
    width: '85%',
    alignItems: 'center',
  },

  pickerWrapper: {
    backgroundColor: colors.black,
    width: wp(24),
  },
  picker: {
    borderWidth: 1,
    width: wp(100),
    color: 'white',
    borderColor: colors.black,
    backgroundColor: colors.black,
  },

  arrowWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },

  textInputWrapper: {
    marginLeft: 8,
    borderColor: colors.textGray,
    borderWidth: 1,
  },
  textInput: {
    fontSize: 18,
    letterSpacing: 3,
    borderBottomColor: colors.textGray,
    borderColor: colors.textGray,
    color: colors.secondaryColor,
    fontFamily: 'GoogleSans-Medium',
  },
  placeholder: {
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    height: hp(20),
    color: colors.black,
    marginTop: hp(10),
    marginBottom: hp(10),
    marginLeft: 10,
    minHeight: hp(16),
  },
  subTextWrapper: {
    alignItems: 'center',
  },
  subtext: {
    fontSize: 12,
    color: colors.white,
    marginTop: 17,
  },

  submitWraper: {
    borderWidth: 1,
    justifyContent: 'center',
    bottom: 0,
    // width: wp(width - 76),
    width: '100%',
    alignSelf: 'center',
    marginTop: hp(16),
    borderColor: colors.textGray,
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(38),
    borderRadius: 2,
  },
  submitText: {
    color: colors.black,
    fontSize: 16,
    fontFamily: 'GoogleSans-Medium',
  },

  carouselWrap: {
    marginTop: hp(43),
    height: hp(380),
    justifyContent: 'flex-end',
  },

  formContainer: {
    width: '85%',
  },

  textInputWrapper1: {
    borderWidth: 1,
    borderColor: colors.textGray,
    color: colors.black,
    fontSize: 16,
    backgroundColor: colors.white,
    marginTop: 4,
    marginBottom: 16,
    borderRadius: 4,
    paddingLeft: 24,
    borderWidth: 1,
    borderColor: 'red',
  },
  iconView: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: 10,
  },
});
