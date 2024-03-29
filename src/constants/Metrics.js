import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const METRICS = {
  screenWidth: WIDTH,
  screenHeight: HEIGHT,
  bottomTabsHeight: Platform.OS === 'ios' ? 76 : 56,
  headerHeight: getStatusBarHeight() + 30,
  generalSpacingValue: WIDTH * 0.035,
};

export default METRICS;
