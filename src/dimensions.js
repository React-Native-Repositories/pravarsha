import {Dimensions, PixelRatio} from 'react-native';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const wp = dimension => {
  return wp2dp((dimension / 360) * 100 + '%');
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const hp = dimension => {
  return hp2dp((dimension / 640) * 100 + '%');
};

export const fs = size => size * PixelRatio.getFontScale();

// import { Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');

// //Guideline sizes are based on standard ~5" screen mobile device
// const guidelineBaseWidth = 360;
// const guidelineBaseHeight = 640;

// const wp = size => width / guidelineBaseWidth * size;
// const hp = size => height / guidelineBaseHeight * size;
// const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

// export {wp, hp, moderateScale};
// https://github.com/nirsky/react-native-size-matters
// https://medium.com/soluto-engineering/size-matters-5aeeb462900a
