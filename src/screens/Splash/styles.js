import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../common/colors';
import {hp, wp} from '../../dimensions';

const {width, height} = Dimensions.get('window');

export const Splashstyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(width - 178),
    // backgroundColor:'white'
  },

  textWrapper: {
    width: wp(width - 148),
  },
  text: {
    marginTop: hp(12),
    fontSize: 22,
    color: colors.secondaryColor,
    textAlign: 'center',
    fontFamily: 'GoogleSans-Bold',
  },
});
