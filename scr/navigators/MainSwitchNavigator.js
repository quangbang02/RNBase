import {createSwitchNavigator} from 'react-navigation';
import Home from '../screens/Home';

const MainSwitchNavigator = createSwitchNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default MainSwitchNavigator;
