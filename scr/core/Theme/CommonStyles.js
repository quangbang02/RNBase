/**
 * @format
 * @flow
 */

import {Platform} from 'react-native';
import Resolution from '../Utilities/Resolution';
const {width, height} = Resolution.screen();
const tabViewWidth = width < height ? width : height;

export const metrics = {
  paddingHorizontal: {
    paddingHorizontal: 16,
  },
  videoSize: {
    width: Resolution.screen().width,
    height: (Resolution.screen().width * 9) / 16,
  },
  paddingVertical: {
    paddingVertical: 16,
  },
  padding: {
    padding: 16,
  },
  marginHorizontal: {
    marginHorizontal: 16,
  },
  marginVertical: {
    marginVertical: 16,
  },
  margin: {
    margin: 16,
    marginTop24: 24,
    marginBottom16: 16,
  },
  iPadWidth: Platform.isPad ? {width: 414} : {width: '100%'},
  tabView: !Platform.isPad ? {width: tabViewWidth} : {},
};

export const fonts = {
  bold: {
    fontFamily: 'SFProDisplay-Bold',
  },
  light: {
    fontFamily: 'SFProDisplay-Light',
  },
  medium: {
    fontFamily: 'SFProDisplay-Medium',
  },
  regular: {
    fontFamily: 'SFProDisplay-Regular',
  },
  semiBold: {
    fontFamily: 'SFProDisplay-Semibold',
  },
  thin: {
    fontFamily: 'SFProDisplay-Thin',
  },
};

export default {
  metrics,
  fonts,
};
