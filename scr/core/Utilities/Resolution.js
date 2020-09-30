/**
 *
 * @format
 * @flow
 */
import {Dimensions} from 'react-native';

export default {
  screen() {
    return Dimensions.get('window');
  },
  isSmallScreen() {
    return Dimensions.get('window').width < 360;
  },
};
