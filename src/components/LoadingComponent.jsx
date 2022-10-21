import {
  ActivityIndicator, StyleSheet, View,
} from 'react-native';
import React from 'react';

import Colors from 'constants/Colors';
import globalStyle from 'constants/Styles';

const styles = StyleSheet.create({
  centering: { justifyContent: 'center' },
});

export default function LoadingComponent() {
  return (
    <View style={[globalStyle.row, styles.centering]}>
      <ActivityIndicator size="small" color={Colors.primary} />
    </View>
  );
}
