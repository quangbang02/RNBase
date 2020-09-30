/**
 *
 * @format
 * @flow
 */
import {StyleSheet} from 'react-native';
import {fonts} from '../../Theme/CommonStyles';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    zIndex: 999999,
    width: '100%',
    height: '100%',
    backgroundColor: '#00000090',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerView: {
    width: 280,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  headerView: {
    paddingTop: 16,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    ...fonts.bold,
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    ...fonts.regular,
    marginTop: 4,
    marginBottom: 16,
    textAlign: 'center',
  },
  footerView: {
    height: 49,
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 4,
    borderTopColor: '#F4F4F5',
    borderTopWidth: 1,
  },
  verticalSeparator: {
    backgroundColor: '#F4F4F5',
    width: 1,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    ...fonts.regular,
  },
});

export default styles;
