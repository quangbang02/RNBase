/**
 *
 * @format
 * @flow
 */
import {StyleSheet} from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    root: {
      backgroundColor: 'white',
      flex: 1,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleStyle: {
      fontSize: 32,
    },
  });
};

export default useStyles;
