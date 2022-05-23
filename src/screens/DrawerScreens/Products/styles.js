import {StyleSheet} from 'react-native';
import {colors} from '../../../common/colors';
import {hp, wp} from '../../../dimensions';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  scroll: {
    width: '85%',
  },

  pickerWrapper: {
    // backgroundColor: colors.secondaryColor,
    width: '100%',
    marginTop: hp(16),
    paddingLeft: 48,
    backgroundColor: colors.secondaryColor,
  },
  picker: {
    borderWidth: 1,
    // width: wp(100),
    color: colors.black,
    borderColor: colors.black,
    backgroundColor: colors.secondaryColor,
  },
  arrowWrapper: {
    position: 'absolute',
    right: 16,
    color: colors.black,
    top: hp(10),
  },
  listWrapper: {
    marginBottom: hp(16),
  },
  dropDownImage: {
    position: 'absolute',
    top: hp(8),
    marginLeft: 16,
    height: hp(24),
    width: wp(24),
  },
  listViewStyle: {
    backgroundColor: colors.primaryColor,
    marginTop: 16,
    borderRadius: 8,
    height: hp(80),
    flexDirection: 'row',
  },
  listItem: {
    marginTop: hp(16),
  },
  list1: {
    // marginRight:hp(48)
  },
  list2: {
    // marginRight:18,
  },
  text1: {
    marginLeft: 16,
    marginTop: 16,
    marginRight: 18,
    fontSize: 14,
    color: colors.white,
  },
  text3: {
    marginLeft: 16,
    marginTop: 2,
    fontSize: 12,
    color: colors.textGray,
  },
  text2: {
    width:78,
    marginLeft: 16,
    marginTop: 2,
    fontSize: 12,
    color: colors.pink,
    // width:67
  },
});
