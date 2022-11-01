import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from 'components/general/CustomText';
import i18n from 'assets/i18n';
import COLORS from 'constants/Colors';

const styles = StyleSheet.create({
  coloredBackground: {
    backgroundColor: COLORS.secondary,
  },
});

export default function ColoredText() {
  return (
    <View style={styles.coloredBackground}>
      <CustomText>{i18n.t('CFBundleDisplayName')}</CustomText>
    </View>
  );
}
