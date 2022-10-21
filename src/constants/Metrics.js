import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default {
  screenWidth: WIDTH,
  screenHeight: HEIGHT,
  bottomTabsHeight: Platform.OS === 'ios' ? 100 : 72,
  headerHeight: getStatusBarHeight() + 30,
};
