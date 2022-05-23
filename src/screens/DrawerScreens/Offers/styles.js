import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../common/colors';
import {hp} from '../../../dimensions';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    // width:'90%'
  },
  headerWrapper: {
    marginTop: hp(12),
    marginBottom: hp(12),
    width: '90%',
    // backgroundColor:'red',
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 22,
    color: colors.black,
    fontFamily: 'GoogleSans-Regular',
    alignSelf:'center',
  },
  imageView: {
    width: '100%',
    height: hp(150),
    width: width,
  },
  text: {
    color: colors.black,
  },
  subTextWrapper: {
    width: '90%',
    alignSelf: 'center',
    borderBottomColor: colors.gray,
    borderWidth: 0.5,
    borderColor: colors.black,
  },
  subText: {
    color: colors.black,
    fontFamily: 'GoogleSans-Regular',
    marginTop: hp(16),
    marginBottom: hp(16),
    // width: '90%',
    fontSize: 14,
  },

  descriptionTextWrapper: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: hp(40),
  },
  descriptionText: {
    color: colors.black,
    fontFamily: 'GoogleSans-Regular',
    marginTop: hp(16),
  },
});
