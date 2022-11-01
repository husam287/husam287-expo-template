import {
  ActivityIndicator, StyleSheet, View,
} from 'react-native';
import React from 'react';

import Colors from 'constants/Colors';
import GLOBAL_STYLES from 'constants/GlobalStyles';

const styles = StyleSheet.create({
  centering: { justifyContent: 'center' },
});

export default function LoadingComponent() {
  return (
    <View style={[GLOBAL_STYLES.row, styles.centering]}>
      <ActivityIndicator size="small" color={Colors.primary} />
    </View>
  );
}
