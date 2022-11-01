import COLORS from 'constants/Colors';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import React from 'react';
import { I18nManager, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.light,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    ...GLOBAL_STYLES.font400,
  },
});

export default function CustomText({ style, children, ...otherProps }) {
  const customStyles = style?.lenght ? [...style] : style;
  return (
    <Text {...otherProps} style={[styles.textStyle, customStyles]}>
      {children}
    </Text>
  );
}
