import COLORS from 'constants/Colors';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import React from 'react';
import { I18nManager, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.dark,
    fontSize: 14,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    ...GLOBAL_STYLES.font500,
  },
});

export default function CustomText({
  style,
  children,
  numberOfLines,
  ...otherProps
}) {
  return (
    <Text
      {...otherProps}
      numberOfLines={numberOfLines}
      style={[styles.textStyle, style]}
    >
      {children}
    </Text>
  );
}
