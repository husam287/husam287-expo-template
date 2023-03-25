import { View } from 'react-native';
import React from 'react';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import LoadingComponent from './LoadingComponent';

export default function LoadingPage() {
  return (
    <View style={[GLOBAL_STYLES.fullSize, GLOBAL_STYLES.vhCentering]}>
      <LoadingComponent />
    </View>
  );
}
