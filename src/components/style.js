import {StyleSheet} from 'react-native';
import {colors} from '../common/colors';
import {hp, wp} from '../dimensions';


export const DrawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  shareIcon: {
    alignSelf: 'flex-end',
    position: 'absolute', // add if dont work with above
    top: 14,
    right: 16,
  },
  profileImageWrap: {
    right: 45,
    marginTop: 40,
  },
  profileImage: {
    height: hp(44),
    height: wp(44),
  },
  profileText: {
    marginTop: 7,
    color: colors.white,
    marginLeft: 25,
    fontFamily: 'GoogleSans-Regular',
  },
  viewProfile: {
    marginTop: 7,
    marginLeft: 25,
    color: colors.secondaryColor,
    fontFamily: 'GoogleSans-Regular',
  },
  seperator1: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.5,
    marginVertical: 15,
  },
  seperator2: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.5,
    marginVertical: 15,
    marginLeft: 59,
  },

  sidebarTex: {
    marginLeft: 22,
    color: colors.black,
    fontFamily: 'GoogleSans-Regular',
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.white,
    fontFamily: 'GoogleSans-Regular',
  },
});
