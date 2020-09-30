import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    paddingLeft: 16,
  },
  onPressText: {
    fontSize: 16,
    color: '#3A8B2D',
    paddingRight: 18,
  },
  arrowDownStyle: {
    marginRight: 17,
    transform: [{rotate: '90deg'}],
  },
});

export default styles;
