import { Dimensions, Platform } from 'react-native';

export default {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  bottomTabsHeight: Platform.OS === 'ios' ? 100 : 72,
};
